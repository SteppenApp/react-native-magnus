import { StyleProp, ViewStyle } from 'react-native';
import { BackgroundPropsType, ChildrenPropsType, DimensionPropsType, FlexPropsType, OpacityPropsType, PrefixSuffixPropsType, TextPropsType, BorderPropsType, SpacingPropsType, RoundedPropsType, ShadowPropsType, VariantPropsType } from '../../types';
export interface SnackbarRef {
    show: (message: string | JSX.Element, config?: SnackbarProps) => void;
    hide: (id: string) => void;
    update: (id: string, message: string | JSX.Element, config?: SnackbarProps) => void;
}
export interface SnackbarProps extends BorderPropsType, ChildrenPropsType, SpacingPropsType, ShadowPropsType, RoundedPropsType, PrefixSuffixPropsType, DimensionPropsType, OpacityPropsType, FlexPropsType, Pick<BackgroundPropsType, 'bg'>, Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight'>, VariantPropsType {
    id?: string;
    duration?: number;
    onClose?: () => void;
    style?: StyleProp<ViewStyle>;
    useNativeDriver?: boolean;
}
export interface SnackbarContainerProps {
    placement: 'top' | 'bottom';
    offset?: number;
}
export interface SnackbarState {
    toasts: Array<SnackbarProps & {
        message: string | JSX.Element;
    }>;
}
