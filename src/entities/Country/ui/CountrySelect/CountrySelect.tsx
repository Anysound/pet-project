import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string,
  value?: Country,
  onChange?: (value: Country) => void,
  readonly?: boolean;
}

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const options = (Object.keys(Country) as Array<keyof typeof Country>).map((key) => ({
    value: Country[key],
    content: Country[key],
  }));

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      options={options}
      label={t('Укажите страну')}
      readonly={readonly}
      className={className}
    />
  );
});
