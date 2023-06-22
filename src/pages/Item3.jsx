import React from 'react';
import { dentalData } from '../data/baseIndex';

export const Item3 = () => {
    return (
        <>        
            {dentalData.map((data, id) => (
                <div key={id} className='flex items-start w-full border-b-[2px]'>
                    <div className='w-[40px] h-[40px] flex items-center justify-center border-r-[2px]'>{data.id}</div>
                    <div className='w-[180px] h-[40px] flex items-center justify-center border-r-[2px]'>{data.fName}</div>
                    <div className='w-[180px] h-[40px] flex items-center justify-center border-r-[2px]'>{data.lName}</div>
                    <div className='w-[180px] h-[40px] flex items-center justify-center'>{data.mName}</div>
                </div>
            ))}
        </>
    );
};
