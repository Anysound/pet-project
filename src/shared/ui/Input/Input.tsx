import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
className?: string;
value?: string;
onChange?: (value: string) => void;
}

export const Input = memo(((props: InputProps) => {
  const {
    value, className, onChange, type = 'text', placeholder, autoFocus, ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    // так как мы точно знаем что это импут мы можем скастовать его к нужному типу
    const target = event.target as HTMLInputElement;
    setCaretPosition(target.selectionStart);
  };

  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles.caretWrapper}>
        <input
          type={type}
          value={value}
          onBlur={onBlur}
          ref={ref}
          onFocus={onFocus}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onSelect={onSelect}
          className={styles.input}
          {...otherProps}
        />
        {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 6}px` }} />}
      </div>
    </div>
  );
}));
