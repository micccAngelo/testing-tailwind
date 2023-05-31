import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Single from '../Assets/single.png'

const NewsList = () => {
  return (
    <div className='py-[10rem] px-4 bg-gradient-to-r from-blue-900 to-indigo-500'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
            <div className='bg-white animate-pulse shadow-xl order-1 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className="flex flex-col items-center">
                <img className='w-20 mx-auto bg-white float-left' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>News 1</h2>
            </div>
            <div className='flex flex-row justify-center'>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-full">btc</span>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-red-500 rounded-full">eth</span>
            </div>
            <div className='text-center font-medium mt-2'>
                <p className='py-2 mx-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequatur nobis quaerat unde odio pariatur quidem quia at, maiores saepe vitae distinctio et necessitatibus veniam error a veritatis itaque possimus?</p>
            </div>
            <button className='bg-[#00df9a] w-[70%] rounded-md font-medium my-6 mx-auto px-6 py-3'>View More</button>
            </div>
            <div className='bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className="flex flex-col items-center">
                <img className='w-20 mx-auto bg-white float-left' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>News 2</h2>
            </div>
            <div className='flex flex-row justify-center'>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-full">btc</span>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-red-500 rounded-full">eth</span>
            </div>
            <div className='text-center font-medium mt-2'>
                <p className='mx-8 line-clamp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequatur nobis quaerat unde odio pariatur quidem quia at, maiores saepe vitae distinctio et necessitatibus veniam error a veritatis itaque possimus?</p>
            </div>
            <button className='bg-[#00df9a] w-[70%] rounded-md font-medium my-6 mx-auto px-6 py-3'>View More</button>
            </div>
            <div className='bg-white border-gray-700 border-8 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className="flex flex-col items-center">
                <img className='w-20 mx-auto bg-white float-left' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>News 3</h2>
            </div>
            <div className='flex flex-row justify-center'>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-full">btc</span>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-red-500 rounded-full">eth</span>
            </div>
            <div className='text-center font-medium mt-2'>
                <p className='py-2 mx-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequatur nobis quaerat unde odio pariatur quidem quia at, maiores saepe vitae distinctio et necessitatibus veniam error a veritatis itaque possimus?</p>
            </div>
            <button className='bg-[#00df9a] w-[70%] rounded-md font-medium my-6 mx-auto px-6 py-3'>View More</button>
            </div>
            <div className='bg-white skew-y-3 cursor-not-allowed order-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className="flex flex-col items-center">
                <img className='w-20 mx-auto bg-white float-left' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>News 4</h2>
            </div>
            <div className='flex flex-row justify-center'>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-full">btc</span>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-red-500 rounded-full">eth</span>
            </div>
            <div className='text-center font-medium mt-2'>
                <p className='py-2 mx-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequatur nobis quaerat unde odio pariatur quidem quia at, maiores saepe vitae distinctio et necessitatibus veniam error a veritatis itaque possimus?</p>
            </div>
            <button className='bg-[#00df9a] w-[70%] rounded-md font-medium my-6 mx-auto px-6 py-3'>View More</button>
            </div>
            <div className='bg-white border-gray-700 hover:animate-bounce border-8 shadow-xl flex flex-col col-span-2 p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className="flex flex-col items-center">
                <img className='w-20 mx-auto bg-white float-left' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>News 5</h2>
            </div>
            <div className='flex flex-row justify-center'>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-full">btc</span>
                <span className="inline-block px-2 py-0.5 text-xs mx-1 font-semibold tracking-wide text-white uppercase bg-red-500 rounded-full">eth</span>
            </div>
            <div className='text-center font-medium mt-2'>
                <p className='py-2 mx-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis consequatur nobis quaerat unde odio pariatur quidem quia at, maiores saepe vitae distinctio et necessitatibus veniam error a veritatis itaque possimus?</p>
            </div>
            <button className='bg-[#00df9a] w-[70%] rounded-md font-medium my-6 mx-auto px-6 py-3'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default NewsList