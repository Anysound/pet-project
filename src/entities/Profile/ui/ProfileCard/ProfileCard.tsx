import { Country } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'widgets/Loader/Loader';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
className?: string;
data?: Profile;
isLoading?: boolean;
error?: string;
onChangeFirstname?: (e: string) => void;
onChangeLastname?: (e: string) => void;
onChangeCity?: (e: string) => void;
onChangeAge?: (e: string) => void;
onChangeUsername?: (e: string) => void;
onChangeAvatar?: (e: string) => void;
onChangeCurrency?: (currency: Currency) => void;
onChangeCountry?: (country: Country) => void;
readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className, data, isLoading, error, onChangeFirstname, onChangeLastname,
    onChangeAge, onChangeCity, readonly, onChangeAvatar, onChangeUsername, onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && <div className={styles.avatarWrapper}><Avatar src={data?.avatar} alt={t('Аватар')} /></div>}
        <Input
          value={data?.name}
          placeholder={t('Ваше имя')}
          className={styles.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={styles.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ссылка на аватар')}
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={styles.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
          className={styles.input}
        />
      </div>
    </div>
  );
};
