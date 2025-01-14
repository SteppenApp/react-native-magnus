/// <reference types="react" />
import { DivProps } from '../div/div.type';
import { Skeleton, Circle } from './skeleton.component';
export declare type CompundedSkeleton<P> = React.FunctionComponent<P> & {
    Box: typeof Skeleton;
    Circle: typeof Circle;
};
export interface SkeletonProps extends DivProps {
    duration?: number;
}
