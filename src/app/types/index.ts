import {MouseEventHandler} from "react";
import iphone from "../../../public/iph.jpg";

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
    image?: any;
}


export interface clickIdProps {
    clickedItemId: string;
}

export interface productProps {
    id: number,
    title: string,
    price?: string,
    brand?: string,
    image?: any,
    category?: string,
    quantity?: number,
    description?: string,
    weight?: string,
    size?: string
}

export interface cartItemProps {
    id: number,
    title : string,
    price : number,
    quantity : number
    image : any
}

export interface cartProps {
    id: number,
    title: string,
    price: string,
    quantity: string,
    image: any
}

export interface displayProps{
    toggleDisplay: any
}

