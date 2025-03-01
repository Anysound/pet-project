import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
className?: string,
height?: string | number,
width?: string | number,
border?: string
}

export const Skeleton = ({
  className, height, width, border,
}: SkeletonProps) => {
  const divStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div style={divStyles} className={classNames(styles.Skeleton, {}, [className])} />
  );
};
