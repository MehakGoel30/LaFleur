import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}></Title>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""></img>
      <div className='flex flex-col justify-center gap-6 ms:w-2/4 text-gray-600'>
        <p>La Fleur was born from a passion for timeless beauty and delicate craftsmanship. Rooted in elegance, it blends nature’s grace with artistic expression. Every creation tells a story — soft, subtle, and full of soul. Designed to evoke emotion, each piece invites you into a world of quiet wonder.
        Our designs whisper elegance, leaving a lasting impression without ever needing to shout.</p>
        <p>What began as a love letter to floral charm soon blossomed into something more. It became a celebration of femininity, freedom, and the art of slow living. La Fleur is not just a brand — it’s a feeling, a moment, a muse. With every collection, we honor the beauty in simplicity and intention.
        We create not just for the eyes, but for the heart that longs for something meaningful.

</p>
<b className='text-gray-800'>Our Mission</b>
<p>At La Fleur, we strive to create pieces that embody timeless elegance and thoughtful design.
We are devoted to celebrating femininity, nature, and the art of mindful living.
Each creation is a blend of beauty, emotion, and intention.
Our mission is to inspire confidence, serenity, and authentic self-expression.</p>
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance: </b>
        <p className='text-gray-600'>We hold ourselves to the highest standards, ensuring every piece reflects impeccable craftsmanship and care.
        Each detail is thoughtfully inspected to deliver lasting beauty and quality you can trust.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience: </b>
        <p className='text-gray-600'>From seamless browsing to swift delivery, we make your La Fleur experience effortless and elegant.
        Designed with your comfort in mind, shopping with us is as graceful as our creations.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service: </b>
        <p className='text-gray-600'>Your satisfaction is at the heart of everything we do.
        Our team is here to support you with kindness, attention, and genuine care — every step of the way.</p>
      </div>
    </div>
    <NewsLetterBox/>
      
    </div>
  )
}

export default About