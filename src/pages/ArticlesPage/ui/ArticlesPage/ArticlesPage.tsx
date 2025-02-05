import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticlesPage)}>
      articles page
    </div>
  );
};

export default memo(ArticlesPage);
