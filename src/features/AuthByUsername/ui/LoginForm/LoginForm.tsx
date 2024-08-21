import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

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
  );
});
