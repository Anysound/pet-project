import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
className?: string,
value?: string,
onChange?: (value: Currency) => void,
readonly?: boolean;
}

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const options = (Object.keys(Currency) as Array<keyof typeof Currency>).map((key) => ({
    value: Currency[key],
    content: Currency[key],
  }));

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      options={options}
      label={t('Укажите валюту')}
      readonly={readonly}
      className={className}
    />
  );
});
