/// <reference types="react" />
import { ViewProps as RNViewProps } from 'react-native';
import { BackgroundPropsType, ChildrenPropsType, DimensionPropsType, TextPropsType, ZIndexPropsType, SpacingPropsType, RoundedPropsType, ShadowPropsType, OpacityPropsType, VariantPropsType } from '../../types';
export interface TooltipRef {
    hide: () => void;
    show: () => void;
}
export interface TooltipProps extends RNViewProps, ChildrenPropsType, SpacingPropsType, ShadowPropsType, RoundedPropsType, TextPropsType, DimensionPropsType, OpacityPropsType, ZIndexPropsType, Pick<BackgroundPropsType, 'bg'>, VariantPropsType {
    animationDuration?: number;
    text: string | React.ReactNode;
    useNativeDriver?: boolean;
}
export interface TriangleProps extends RNViewProps {
    invert: boolean;
}
