import {MouseEventHandler} from "react";
import {Products} from "../../../constants";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomCardProps {
    containerStyles?: string;
    textStyles?: string;
    title: string;
    price: string;
    image? : any;
}

export interface CarouselProps{
    card : string[]
}