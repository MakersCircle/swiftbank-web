import * as React from 'react';

export default function Form() {
    return (
        <div className='bg-[#DCECF0] px-12 py-10'>
            <h1  className='text-5xl font-semibold text-[#1F93D5] text-center'>Sign In</h1>
            <div className='mt-8 '>
                <div>
                    <label className='text-[#1F93D5] font-medium'>User name</label>
                    <input
                        className='w-full rounded-md p-1'
                    />
                </div>
                <div>
                    <label className='text-[#1F93D5] font-medium'>Password</label>
                    <input
                        className='w-full rounded-md p-1'
                    />
                </div>
            </div>
            <div className='mt-6 shadow-2xl'>
                <button className='w-full bg-[#1F93D5] text-white rounded-md py-1'>Sign in</button>
            </div>
        </div>
    )
}