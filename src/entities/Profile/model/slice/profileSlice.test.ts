import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastName: 'anysound',
  name: 'nurlan',
  city: 'spb',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toStrictEqual({ readonly: true });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false, form: {}, validateErrors: undefined };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toStrictEqual({ readonly: true, form: undefined, validateErrors: undefined });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'eidk' }))).toEqual({
      data,
      form: {
        username: 'eidk',
      },
    });
  });

  test('update profile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('update profile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      form: data,
      data,
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
