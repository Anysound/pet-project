import {
  fetchProfileData,
  getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, ProfileCard,
} from 'entities/Profile';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ name: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    const validatedValue = value?.replace(/\D+/gm, '');
    dispatch(profileActions.updateProfile({ age: Number(validatedValue || 0) }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('')}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
