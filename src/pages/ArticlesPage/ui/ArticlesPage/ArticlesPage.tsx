import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('articles');
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticlesPage)}>
      {t('Страница со статьями')}
    </div>
  );
};

export default memo(ArticlesPage);
