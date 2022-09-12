import { TextProps as RNTextProps } from 'react-native';
import { BackgroundPropsType, ChildrenPropsType, DimensionPropsType, FlexPropsType, OpacityPropsType, OverflowPropsType, TextPropsType, ZIndexPropsType, BorderPropsType, SpacingPropsType, RoundedPropsType, VariantPropsType } from '../../types';
export interface TextProps extends RNTextProps, ChildrenPropsType, SpacingPropsType, RoundedPropsType, BorderPropsType, TextPropsType, DimensionPropsType, OverflowPropsType, OpacityPropsType, ZIndexPropsType, Pick<BackgroundPropsType, 'bg'>, Pick<FlexPropsType, 'flex'>, VariantPropsType {
}
