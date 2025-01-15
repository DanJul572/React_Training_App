import { ZLoader } from '@/context/ZLoader';
import { PropsType } from './types';

const Empty = (props: PropsType) => {
    return <ZLoader>{props.children}</ZLoader>;
};

export default Empty;
