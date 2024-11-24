import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
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
align?: string;
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export const Text = memo(({
  className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
}: TextProps) => {
  const { t } = useTranslation();

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
