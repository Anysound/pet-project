import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  name?: string,
  lastName?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error: string | undefined;
  readonly: boolean;
}
