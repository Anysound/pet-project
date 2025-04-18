import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';
import { CombinedState } from 'redux';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate: ((to: To, options?: NavigateOptions) => void) | undefined
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema
}
