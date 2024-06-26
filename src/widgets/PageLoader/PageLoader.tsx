import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'widgets/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(styles.PageLoader)}>
    <Loader />
  </div>
);
