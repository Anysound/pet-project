import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
className?: string;
text: string;
}

export const Code = ({ className, text }: CodeProps) => {
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.Code)}>
      <Button
        className={styles.copyBtn}
        onClick={onCopy}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
