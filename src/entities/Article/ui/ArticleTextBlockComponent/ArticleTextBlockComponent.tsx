import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
className?: string;
block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticleTextBlockComponent)}>
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((p) => (
        <Text key={p} text={p} className={styles.paragraph} />
      ))}
    </div>
  );
});
