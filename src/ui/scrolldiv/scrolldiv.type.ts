import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import {
  BackgroundPropsType,
  ChildrenPropsType,
  DimensionPropsType,
  FlexPropsType,
  PositionPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface ScrollDivProps
  extends RNScrollViewProps,
    ChildrenPropsType,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    FlexPropsType,
    PositionPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    VariantPropsType {}
