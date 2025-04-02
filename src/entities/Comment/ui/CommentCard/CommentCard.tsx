import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
className?: string;
comment?: Comment;
isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className, styles.isLoading])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={styles.username} />
        </div>
        <Skeleton width="100%" height={50} className={styles.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={styles.header}>
        {comment?.user.avatar && <Avatar src={comment?.user.avatar} size={30} />}
        <Text className={styles.username} title={comment?.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment?.text} />
    </div>
  );
};
