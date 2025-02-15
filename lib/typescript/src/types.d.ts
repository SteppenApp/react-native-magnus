/// <reference types="react" />
import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';
declare type Undefined<T> = {
    [P in keyof T]: P extends undefined ? T[P] : never;
};
declare type FilterFlags<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};
declare type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
declare type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;
export declare type OptionalKeys<T> = Exclude<keyof T, NonNullable<keyof SubType<Undefined<T>, never>>>;
export declare type ThemeProps<T> = {
    [name: string]: T;
};
declare type ComponentsProps<T> = Omit<Pick<T, OptionalKeys<T>>, 'children' | 'variant'>;
export declare type VariantType<T> = ComponentsProps<T> & {
    variants?: {
        [name: string]: ComponentsProps<T>;
    };
};
export declare type DefaultProps<Props extends object> = {
    [K in keyof Props]?: Props[K];
};
export declare const borderProps: readonly ["borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "borderWidth", "borderTopWidth", "borderRightWidth", "borderLeftWidth", "borderBottomWidth", "borderStartWidth", "borderEndWidth", "borderStyle"];
export interface BorderPropsType {
    borderColor?: string;
    borderTopColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    borderLeftColor?: string;
    borderWidth?: number;
    borderTopWidth?: number;
    borderRightWidth?: number;
    borderLeftWidth?: number;
    borderBottomWidth?: number;
    borderStartWidth?: number;
    borderEndWidth?: number;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
}
export declare const spacingProps: readonly ["m", "mt", "mr", "mb", "ml", "mx", "my", "ms", "p", "pt", "pr", "pb", "pl", "px", "py", "ps"];
export interface SpacingPropsType {
    m?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    mx?: string | number;
    my?: string | number;
    ms?: string | number;
    p?: string | number;
    pt?: string | number;
    pr?: string | number;
    pb?: string | number;
    pl?: string | number;
    px?: string | number;
    py?: string | number;
    ps?: string | number;
}
export declare const roundedProps: readonly ["rounded", "roundedTopLeft", "roundedTopRight", "roundedBottomLeft", "roundedBottomRight", "roundedTop", "roundedLeft", "roundedRight", "roundedBottom"];
export interface RoundedPropsType {
    rounded?: string | number;
    roundedTopLeft?: string | number;
    roundedTopRight?: string | number;
    roundedBottomLeft?: string | number;
    roundedBottomRight?: string | number;
    roundedTop?: string | number;
    roundedLeft?: string | number;
    roundedRight?: string | number;
    roundedBottom?: string | number;
}
export declare const shadowProps: readonly ["shadow", "shadowColor"];
export interface ShadowPropsType {
    shadow?: string | number;
    shadowColor?: string;
}
export declare const dimensionProps: readonly ["minH", "minW", "maxH", "maxW", "h", "w"];
export interface DimensionPropsType {
    minH?: number | string;
    minW?: number | string;
    maxH?: number | string;
    maxW?: number | string;
    h?: number | string;
    w?: number | string;
}
export declare const flexProps: readonly ["row", "flex", "flexDir", "flexWrap", "justifyContent", "alignSelf", "alignItems"];
export interface FlexPropsType {
    row?: boolean;
    flex?: number;
    flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
export declare const positionProps: readonly ["position", "top", "right", "bottom", "left"];
export interface PositionPropsType {
    position?: 'absolute' | 'relative';
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
export declare const backgroundProps: readonly ["bg", "bgImg", "bgMode"];
export interface BackgroundPropsType {
    bg?: string;
    bgImg?: RNImageSourcePropType;
    bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}
export declare const textProps: readonly ["color", "fontSize", "textDecorLine", "textDecorStyle", "fontStyle", "textDecorColor", "fontWeight", "fontFamily", "lineHeight", "textAlign", "textTransform", "letterSpacing", "textAlignVertical"];
export interface TextPropsType {
    color?: string;
    fontSize?: string | number;
    textDecorLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
    textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
    fontStyle?: 'normal' | 'italic';
    textDecorColor?: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    fontFamily?: string;
    lineHeight?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    letterSpacing?: number;
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
    textDecorationColor?: string;
    textShadowColor?: string;
    textShadowOffset?: {
        width: number;
        height: number;
    };
    textShadowRadius?: number;
}
export declare const opacityProps: readonly ["opacity"];
export interface OpacityPropsType {
    opacity?: number;
}
export declare const overflowProps: readonly ["overflow"];
export interface OverflowPropsType {
    overflow?: 'hidden' | 'visible' | 'scroll';
}
export declare const zIndexProps: readonly ["zIndex"];
export interface ZIndexPropsType {
    zIndex?: number;
}
export declare const loadingProps: readonly ["loading", "loaderSize", "loaderColor"];
export interface LoadingPropsType {
    loading?: boolean;
    loaderSize?: number | string;
    loaderColor?: string;
}
export declare const preffixSuffixProps: readonly ["preffix", "suffix"];
export interface PrefixSuffixPropsType {
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
}
export declare const inputProps: readonly ["focusBorderColor"];
export interface InputPropsType {
    focusBorderColor?: string;
}
export declare const disabledProps: readonly ["disabled"];
export interface DisabledPropsType {
    disabled?: null | boolean;
}
export declare const buttonProps: readonly ["underlayColor", "block", "borderless", "rippleColor", "ripple"];
export interface ButtonPropsType {
    underlayColor?: string;
    block?: boolean;
    borderless?: boolean;
    rippleColor?: string;
    ripple?: boolean;
}
export declare const overlayProps: readonly ["overlayColor", "overlayOpacity"];
export interface OverlayPropsType {
    overlayColor?: string;
    overlayOpacity?: number;
}
export declare const variantProps: readonly ["variant"];
export interface VariantPropsType {
    variant?: string;
}
export interface ChildrenPropsType {
    children?: React.ReactNode;
}
export {};
