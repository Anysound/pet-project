/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { decrement, increment } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counter = useSelector(getCounterValue);
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1 data-testid="counter">
        {t('Счетчикк')}
        :
        {' '}
        {counter}
      </h1>
      <button data-testid="increment-btn" type="button" onClick={incrementHandler}>increment</button>
      <button data-testid="decrement-btn" type="button" onClick={decrementHandler}>decrement</button>

    </div>
  );
};
