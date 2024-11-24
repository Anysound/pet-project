import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
className?: string
src?: string;
alt?: string;
size?: number;
}

export const Avatar = ({
  className, src, alt, size,
}: AvatarProps) => {
  const mods: Mods = {};

  const imgStyles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return <img src={src} style={imgStyles} alt={alt} className={classNames(styles.Avatar, mods, [className])} />;
};
