import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
  id: '1',
  title: 'title',
};

describe('articleDetailsSlice.test', () => {
  test('fetchArticleIsPending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { data };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toStrictEqual({ data, error: undefined, isLoading: true });
  });

  test('fetchArticleFulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { data };
    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled)).toStrictEqual({ data: undefined, isLoading: false });
  });

  // test('cancelEdit', () => {
  //   const state: DeepPartial<ProfileSchema> = { readonly: false, form: {}, validateErrors: undefined };
  //   expect(articleDetailsReducer(state as ProfileSchema, profileActions.cancelEdit())).toStrictEqual({ readonly: true, form: undefined, validateErrors: undefined });
  // });

  // test('test cancel edit', () => {
  //   const state: DeepPartial<ProfileSchema> = {
  //     data,
  //     form: {
  //       username: '',
  //     },
  //   };

  //   expect(articleDetailsReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
  //     readonly: true,
  //     validateErrors: undefined,
  //     data,
  //     form: data,
  //   });
  // });

  // test('update profile', () => {
  //   const state: DeepPartial<ProfileSchema> = {
  //     data,
  //     form: {
  //       username: '',
  //     },
  //   };

  //   expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'eidk' }))).toEqual({
  //     data,
  //     form: {
  //       username: 'eidk',
  //     },
  //   });
  // });

  // test('update profile pending', () => {
  //   const state: DeepPartial<ProfileSchema> = {
  //     isLoading: false,
  //     validateErrors: [ValidateProfileError.SERVER_ERROR],
  //   };

  //   expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
  //     isLoading: true,
  //     validateErrors: undefined,
  //   });
  // });

  // test('update profile fulfilled', () => {
  //   const state: DeepPartial<ProfileSchema> = {
  //     isLoading: true,
  //     validateErrors: [ValidateProfileError.SERVER_ERROR],
  //   };

  //   expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
  //     form: data,
  //     data,
  //     isLoading: false,
  //     readonly: true,
  //     validateErrors: undefined,
  //   });
  // });
});
