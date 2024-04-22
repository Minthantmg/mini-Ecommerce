import React from 'react';
import Image from "next/image";
// @ts-ignore
import loading from '../../../public/loading.gif'
const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Image src={loading} alt="loading" priority/>
        </div>
    );
};

export default Loading;