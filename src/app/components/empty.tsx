import React from 'react';
import Image from "next/image";
import empty from '../../../public/empty.webp'

const Empty = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div>
                <Image src={empty} alt="empty_cart" width={0} height={0}/>
            </div>
            <div>
                Your cart is empty
            </div>
        </div>
    );
};

export default Empty;