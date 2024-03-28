import Image from "next/image";
import {CustomCardProps} from "@/app/types";

const CustomCard = ({ containerStyles, textStyles, title , price,image }: CustomCardProps) => (
    <div
        className={`border border-gray-300 hover:border-black bg-white cursor-pointer ${containerStyles}`}
    >
        <div className="flex justify-center items-center">
            <Image src={image} alt={title} className="w-52 h-52"/>
        </div>
        <div className="flex flex-col mt-6 mb-4">
            <span className={`font-mono ml-4 ${textStyles}`}>{title}</span>
            <span className={`font-bold font-mono ml-4 mt-2 ${textStyles}`}>{price}$</span>
        </div>
    </div>
);

export default CustomCard;