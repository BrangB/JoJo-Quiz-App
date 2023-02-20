import React from 'react'
import Animation from './Animation'
import { useLottie } from "lottie-react";
import comingSoon from "../15003-lottie-coming-soon.json";

function Dashboard(){

    const options = {
        animationData: comingSoon,
        loop: true
      };
    
      const { View } = useLottie(options);
    return (
        <div className='flex justify-center items-center xsm:h-[550px] md:h-[350px] transition-all' >

                <div className='xsm:w-[90%] sm:w-[45%] md:w-[40%] flex justify-center items-center' >
                <Animation>
                    {View}
                    <h1 className='flex items-center justify-center comingSoon text-2xl '><span className='text-3xl'>C</span>oming Soon</h1>
                </Animation>
                </div>

        </div>

    )
}

export default Dashboard