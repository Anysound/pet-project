import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage)}>
        {t('Статья не найдена')}
      </div>
    );
  }
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticleDetailsPage)}>
      <ArticleDetails id="1" />
    </div>
  );
};

export default memo(ArticleDetailsPage);
