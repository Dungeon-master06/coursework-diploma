import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
		<div>
			<div className='text-2xl text-center pt-8 border-t'>
				<Title text1={'About'} text2={'Us'} />
			</div>
			<div className='my-10 flex flex-col md:flex-row gap-16'>
				<img className='w-full md:max-w-[450px]' src={assets.about_img} />
				<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						suscipit doloremque nulla qui aliquam ratione ullam labore pariatur
						incidunt velit dolores exercitationem, sint blanditiis quod quis
						sapiente deleniti quae quibusdam architecto. Minus tempore fuga sunt
						consequuntur impedit neque?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						suscipit doloremque nulla qui aliquam ratione ullam labore pariatur
						incidunt velit dolores exercitationem, sint blanditiis quod quis
						sapiente deleniti quae quibusdam architecto. Minus tempore fuga sunt
						consequuntur impedit neque?
					</p>
					<b className='text-gray-800'>Our Mission</b>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt
						suscipit doloremque nulla qui aliquam ratione ullam labore pariatur
						incidunt velit dolores exercitationem
					</p>
				</div>
			</div>
			<div className='text-4xl py-4'>
				<Title text1={'Why'} text2={'Choose Us'} />
			</div>
			<div className='flex flex-col md:flex-row text-sm  mb-20'>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Ouality Assurance:</b>
					<p className='text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt
						suscipit doloremque nulla.
					</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Convenience:</b>
					<p className='text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt
						suscipit doloremque nulla qui.
					</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Exceptional Customer Service:</b>
					<p className='text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt
						suscipit doloremque nulla qui.
					</p>
				</div>
			</div>
      <NewsletterBox />
		</div>
	)
}

export default About