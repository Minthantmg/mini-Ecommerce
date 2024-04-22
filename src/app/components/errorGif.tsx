import React from 'react';
import Image from "next/image";
import notfound from '../../../public/not_found.svg'

const ErrorGif = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <Image src={notfound} alt="notfound" className="w-screen h-80"></Image>
                <div className="mt-10 text-3xl">
                    404
                </div>
                <div className="mt-4">
                    Sorry, we coundn&apos;t find this page.
                </div>
            </div>
        </>
    );
};

export default ErrorGif;