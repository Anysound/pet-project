import axios from 'axios';
import { userActions } from 'entities/User/model/slice/userSlice';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true); // mockedAxios для тс типов. 1 параметр - модуль, 2 параметр - глубина мока

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // // mock getState
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = { username: '123', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //   console.log('result: ', result);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3); // кол-во вызванных диспачей: 1 раз при вызове
  //   // loginByUsername, 2 раз вызов экшна setAuthData, 3 вызов - успешное выполнение запроса
  //   expect(mockedAxios.post).toBeCalled(); // проверка отправки запроса
  //   expect(result.meta.requestStatus).toBe('fulfilled'); // запрос отработал без ошибки
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('error login', async () => {
  //   const userValue = { username: '123', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toBeCalled(); // проверка отправки запроса
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected'); // запрос отработал без ошибки
  //   expect(result.payload).toBe('error');
  // });

  test('success login', async () => {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3); // кол-во вызванных диспачей: 1 раз при вызове
    // loginByUsername, 2 раз вызов экшна setAuthData, 3 вызов - успешное выполнение запроса
    expect(thunk.api.post).toBeCalled(); // проверка отправки запроса
    expect(result.meta.requestStatus).toBe('fulfilled'); // запрос отработал без ошибки
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: '123', password: '123' });
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toBeCalled(); // проверка отправки запроса
    expect(result.meta.requestStatus).toBe('rejected'); // запрос отработал без ошибки
  });
});
