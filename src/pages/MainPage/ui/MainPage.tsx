import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
