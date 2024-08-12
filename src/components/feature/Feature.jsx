import React from 'react'

const Feature = ({ title, description, image, alt, video, direction, id, muqal }) => {
  return (
    < >
      <div className={`relative mx-auto flex max-w-screen-lg flex-col items-center justify-center ${
				id % 2 !== 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
          } space-y-4`}>
        <div className='mt-12 flex-1 tranking-wider'>
          <h1 className='mx-w-lg text-center text-4xl font-bold sm:text-5xl'>{title}</h1>
          <h2 className='pl-2 mt-2 text-center tranking-normal text-2xl '>{description}</h2>
        </div>
      
      <div className='relative flex flex-1'>
        <img className='z-10' alt='' src={`./images/logos/${image}`} />
          {/* <video loop autoPlay={true} src={`./images/logos/${video}`} /> */}
          
        <video
          loop
          autoPlay
          className=' absolute top-1 -z-10 sm:top-20 sm:left-16 sm:w-96'
          src={`./images/logos/${video} type="video/watch.m4v"`} 
          />
          

        </div>
      </div>  
    </>
  )
}

export default Feature