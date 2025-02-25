/// <reference types="react" />
import { ViewProps as RNViewProps, ImageSourcePropType as RNImageSourcePropType } from 'react-native';
import { AvatarGroup } from './avatar.group.component';
import { BorderPropsType, ChildrenPropsType, SpacingPropsType, RoundedPropsType, ShadowPropsType, BackgroundPropsType, FlexPropsType, OpacityPropsType, PositionPropsType, TextPropsType, ZIndexPropsType, VariantPropsType } from '../../types';
export declare type CompoundedAvatar<P> = React.FunctionComponent<P> & {
    Group: typeof AvatarGroup;
};
export interface AvatarProps extends RNViewProps, BorderPropsType, ChildrenPropsType, SpacingPropsType, RoundedPropsType, ShadowPropsType, PositionPropsType, ZIndexPropsType, OpacityPropsType, Pick<FlexPropsType, 'alignSelf'>, Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight' | 'fontFamily'>, Pick<BackgroundPropsType, 'bg'>, VariantPropsType {
    size?: number;
    source?: RNImageSourcePropType;
}
