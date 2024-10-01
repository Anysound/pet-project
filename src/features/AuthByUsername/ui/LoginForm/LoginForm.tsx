import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    console.log('loginFormuseEffect');
    dispatch({ type: '@INIT login reducer', payload: 'dsfiosd' });

    store.reducerManager.add('login', loginReducer);
    return () => {
      // store.reducerManager.remove('login');
      // dispatch({ type: '@INIT destroy init login reducer' });
    };
    // eslint-disable-next-line
  }, []);

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  console.log('username: ', username, 'password: ', password);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Input
          value={username}
          placeholder={t('Логин')}
          autoFocus
          className={styles.input}
          onChange={onChangeUsername}
        />
        <Input
          value={password}
          placeholder={t('Пароль')}
          className={styles.input}
          onChange={onChangePassword}
        />
        <Button
          onClick={onLoginClick}
          disabled={isLoading}
          theme={ButtonTheme.OUTLINE}
          className={styles.loginBtn}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
