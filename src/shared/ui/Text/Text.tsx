import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
className?: string;
title?: string;
text?: string;
theme?: TextTheme;
}

export const Text = memo(({
  className, title, text, theme = TextTheme.PRIMARY,
}: TextProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.Text, { [styles[theme]]: true })}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
