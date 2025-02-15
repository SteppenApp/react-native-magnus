/// <reference types="react" />
import { FlexPropsType, BorderPropsType, RoundedPropsType, ShadowPropsType, SpacingPropsType, VariantPropsType } from '../../types';
import CarouselItem from './item.carousel';
interface CarouselIndicator {
    selectedPage: number;
    totalPages: number;
}
export interface CarouselProps extends BorderPropsType, RoundedPropsType, ShadowPropsType, SpacingPropsType, Pick<FlexPropsType, 'flex'>, VariantPropsType {
    showIndicators?: boolean;
    renderIndicators?: (props: CarouselIndicator) => JSX.Element;
}
export interface CompoundedCarousel<T> extends React.FC<T> {
    Item: typeof CarouselItem;
}
export {};
