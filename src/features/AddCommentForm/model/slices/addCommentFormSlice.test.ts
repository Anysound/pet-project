import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastName: 'anysound',
  name: 'nurlan',
  city: 'spb',
  currency: Currency.RUB,
};

describe('addCommentFormSlice.test', () => {
  test('set comment', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: '', error: '' };

    expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('textComment'))).toStrictEqual({ text: 'textComment', error: '' });
  });
});
