'use client'
import React, {useEffect} from 'react';
import {Hero} from "@/app/sections";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotal} from "@/app/features/CartDataSlice";

const Page = () => {
    return (
        <>
            <div className="container mx-auto px-32">
                <Hero />
            </div>
        </>
    );
};

export default Page;