import React from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Social } from '@/components/Social';
import { Link } from 'react-router-dom';

const URL_SHOP = 'https://luramiclothing.com/';

export const Root = () => {
	return (
		<React.Fragment>
			<main className="flex flex-row justify-end w-screen h-screen bg-coming-soon bg-cover bg-center">
				<div className="w-full h-full hidden md:flex md:flex-col md:items-center md:justify-center bg-black/50">
					<h1 className="text-6xl font-extrabold uppercase drop-shadow-md text-white">Coming Soon</h1>
				</div>
				<div className="flex flex-col items-center justify-between w-full md:m-0 md:max-w-[400px] h-full bg-white">
                    <div></div>
					<div className='flex flex-col gap-2 w-full pl-12'>
						<a href={URL_SHOP} target="_blank" rel="noopener noreferrer nofollow">
							<LuramiClothing className="w-32 h-16 md:w-40 md:h-20 text-orange-500" />
						</a>
                        <div className='w-full h-3 bg-orange-500'></div>
						<h2 className="uppercase font-extrabold text-xl mb-6 md:text-3xl text-orange-500">Follow US</h2>
						<Social className="flex flex-row gap-2 md:gap-4" />
					</div>
					<Link
						to="/join"
						className="px-12 py-2 mb-6 rounded-[16px] uppercase hover:scale-105 transition-all bg-orange-500 text-white">
						Join Now
					</Link>
				</div>
			</main>
		</React.Fragment>
	);
};
