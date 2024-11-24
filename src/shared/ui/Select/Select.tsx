import { ChangeEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
className?: string,
label?: string,
options?: SelectOption[],
value?: string,
onChange?: (value: string) => void,
readonly?: boolean;
}

export const Select = memo(({
  className, label, options, value, onChange, readonly,
}: SelectProps) => {
  const { t } = useTranslation();
  const mods: Mods = {};

  const optionsList = useMemo(() => options?.map((opt) => (
    <option className={styles.option} key={opt.value} value={opt.value}>{opt.content}</option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select className={styles.select} value={value} onChange={onChangeHandler} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
});
