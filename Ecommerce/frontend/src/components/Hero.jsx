import React, { useEffect, useState } from 'react'

const images = [
  {
  src: 'https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?semt=ais_hybrid&w=740', 
},
{
  src: 'https://blog.flyerwiz.app/wp-content/uploads/2023/08/Clothing-Flyer-Templates.jpg'
},
{
  src: 'https://img.freepik.com/free-psd/luxury-men-s-fashion-facebook-cover-template_23-2150871409.jpg'
},
{
  src: 'https://market-resized.envatousercontent.com/previews/files/316723209/01_barly_preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=b569b80fdac78f570a246a1a388491ce04285f69c4619b2b1a98088ad1fc4f96'
},
{
 src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-%283%29-design-template-6196d74d35eb96b55098e32888fefc76_screen.jpg?ts=1663660096'
}
]

function Hero() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const handelPrevious = ()=>{
   setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }
  const handelNext = ()=>{
   setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  useEffect(()=>{
   const timer = setInterval(()=>{
    handelNext()
  }, 3000)
  return ()=> clearInterval(timer)
  }, [currentIndex])

  
  return (
    <div className='w-[100%] h-[400px] flex sm:flex-row '>
     <div className='w-full h-full relative '>
      <div className=' absolute top-[50%] left-10 cursor-pointer' onClick={handelPrevious}>⬅️</div>
      {
        images && images.length ? images.map((imageItem, index) => (
          <img 
          key={index}
          src={imageItem.src} alt="" 
          className={currentIndex === index ? 'current-image transition-all duration-500' : 'hide-current-image'}
          
          />
        )) : null
      }
      <div className=' absolute top-[50%] right-10 cursor-pointer' onClick={handelNext}>➡️</div>
      <div className='absolute left-[47%] bottom-5'>
        {images && images.length ? images.map((_, index)=>(
          <button key={index}
          className={currentIndex === index ? 'active-indicator' : 'active-indicator inactive-indicator '}
          onClick={()=> setCurrentIndex(index)}
          ></button>
        )) : null}
      </div>
     </div>
    </div>
  )
}

export default Hero