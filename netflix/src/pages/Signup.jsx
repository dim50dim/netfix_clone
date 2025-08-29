import React from 'react'

const Signup = () => {
  return (
    <> 
    <div className='w-full h-screen'>
        <img 
        className='hidden sm:block absolute w-full h-full object-cover'
             src='https://econoflash.com/wp-content/uploads/2025/03/Actus-bourse-Netflix.jpg'
             alt='background_picture'
             />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-60">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
               <div className="max-w-[320px] mx-auto py-16">
                    <h1 className='font-bold text-3xl '> Sign up</h1>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
