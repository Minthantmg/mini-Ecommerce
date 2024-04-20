'use client'
import React, {useEffect, useState} from 'react';
import {Hero} from "@/app/sections";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotal} from "@/app/features/CartDataSlice";

const Page = () => {
    console.log("testing")
    return (
        <>
            <div className="container px-8 sm:px-32">
                <Hero/>
            </div>
        </>
    );
};

export default Page;