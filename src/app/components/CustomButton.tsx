// import {ButtonProps} from "@/app/types";
import Image from "next/image";
import {ButtonProps} from "@/app/types";

const CustomButton = ({ label,
                    iconURL,
                    backgroundColor,
                    textColor,
                    borderColor,
                    fullWidth,} : ButtonProps) => {
    console.log(backgroundColor,textColor,borderColor)
return(
    <>
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : ""
            } rounded-full ${fullWidth && "w-full"}`}
        >
            {label}
            {iconURL && (
                <Image
                    src={iconURL}
                    alt='arrow right icon'
                    className='ml-2 rounded-full bg-white w-5 h-5'
                />
            )}
        </button>
    </>
)
}
export default CustomButton;