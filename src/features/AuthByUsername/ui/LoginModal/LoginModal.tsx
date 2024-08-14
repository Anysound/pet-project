import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
className?: string;
isOpen: boolean;
onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal lazy className={classNames(styles.LoginModal)} isOpen={isOpen} onClose={onClose}><LoginForm /></Modal>
);
