import { ImageProps as RNImageProps } from 'react-native';
import { BackgroundPropsType, ChildrenPropsType, DimensionPropsType, FlexPropsType, OpacityPropsType, PositionPropsType, ZIndexPropsType, BorderPropsType, SpacingPropsType, RoundedPropsType, ShadowPropsType, VariantPropsType } from '../../types';
export interface ImageProps extends RNImageProps, ChildrenPropsType, BorderPropsType, SpacingPropsType, ShadowPropsType, RoundedPropsType, DimensionPropsType, PositionPropsType, OpacityPropsType, ZIndexPropsType, Pick<BackgroundPropsType, 'bg'>, Pick<FlexPropsType, 'flex' | 'alignSelf'>, VariantPropsType {
}
