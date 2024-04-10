import Image from "next/image";
import {CustomCardProps} from "@/app/types";

const CustomCard = ({ containerStyles, textStyles, title , price,image }: CustomCardProps) => (
    <div
        className={`border border-gray-300 hover:border-black bg-white cursor-pointer h-[420px] ${containerStyles}`}
    >
        <div className="flex justify-center items-center">
            <img src={image} alt={title} className="w-72 h-72 p-10" width={0} height={0}/>
        </div>
        <div className="flex flex-col mt-6 mb-4">
            <span className={`font-mono ml-4 line-clamp-2 ${textStyles}`}>{title}</span>
            <span className={`font-bold font-mono ml-4 mt-1 ${textStyles}`}>{price}$</span>
        </div>
    </div>
);

export default CustomCard;