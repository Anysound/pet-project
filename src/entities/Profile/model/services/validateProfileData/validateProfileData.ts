import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [];
  }
  const {
    name, lastName, age, country,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!name || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }
  return errors;
};
