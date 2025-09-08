import React from "react";
import ShimmerCard from "./ShimmerCard";

const ShimmerList = ({ title }) => {

    return (
        <div className='mt-6'>
            <h1 className='text-xl sm:text-3xl pl-3 text-white'>
                {title}
            </h1>
            <div className='flex overflow-x-scroll hide-scrollbar my-3 py-3 items-center'>
                <div className='flex'>
                    {[...Array(10)].map((_, index) => (<ShimmerCard key={index} />))}
                </div>
            </div>
        </div>
    );
}

export default ShimmerList