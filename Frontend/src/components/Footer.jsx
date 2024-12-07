import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
		<div>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
				<div>
					<img src={assets.logo} alt='' className='mb-5 w-32' />
					<p className='w-full md:w-2/3 text-gray-600'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						voluptatibus sed eos perferendis expedita minima nihil provident
						deserunt enim accusamus!
					</p>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'></p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>Home</li>
						<li>Delivery</li>
						<li>About us</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>Get in touch</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1 234 567 890</li>
                        <li>contact@forever.com</li>
                    </ul>
				</div>
			</div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'> Copyright  2024 © forever - All rights reserved</p>
            </div>
		</div>
	)
}

export default Footer