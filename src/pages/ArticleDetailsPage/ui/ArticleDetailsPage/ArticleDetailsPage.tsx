import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticleDetailsPage)}>
      article details page
    </div>
  );
};

export default memo(ArticleDetailsPage);
