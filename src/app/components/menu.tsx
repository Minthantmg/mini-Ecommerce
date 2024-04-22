import React from 'react';
import {X} from 'lucide-react';
import {displayProps} from "@/app/types";

const Menu = ({toggleDisplay}: displayProps) => {
    return (
        <div>
            <div className="absolute z-10 w-full bg-white p-4 h-screen flex-col items-center justify-center">
                <div className="mb-4 flex justify-end mr-2 mt-3" onClick={toggleDisplay}>
                    <X />
                </div>
                <div className="flex flex-col items-center justify-center pt-60">
                    <a href="/sections/Categories" className="mb-4 font-bold text-xl" onClick={toggleDisplay}>
                        Categories
                    </a>
                    <a href="/sections/product_page/1" className="mb-4 font-bold text-xl" onClick={toggleDisplay}>
                        Product Page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;