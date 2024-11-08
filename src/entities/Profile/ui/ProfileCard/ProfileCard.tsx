import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={styles.data}>
        <Input value={data?.name} placeholder={t('Ваше имя')} className={styles.input} />
        <Input value={data?.lastName} placeholder={t('Ваша фамилия')} className={styles.input} />
      </div>
    </div>
  );
};
