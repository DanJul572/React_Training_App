import { PropsType } from './types';

const UnProtectedRoute = (props: PropsType) => {
  const isLogined = localStorage.getItem('token');
  if (isLogined) {
    window.location.href = '/';
  }
  return props.children;
};

export default UnProtectedRoute;
