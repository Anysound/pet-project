import { CounterSchema } from '../types/counterSchema';
import { counterReducer, decrement, increment } from './counterSlice';

describe('counterSlice', () => {
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state as CounterSchema, increment())).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state as CounterSchema, decrement())).toEqual({ value: 9 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
});
