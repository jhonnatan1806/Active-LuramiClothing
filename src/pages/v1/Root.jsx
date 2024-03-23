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
				<div className="flex flex-col items-center justify-between w-full pl-12 md:m-0 md:max-w-[400px] h-full bg-white">
					<div></div>
					<div className="flex flex-col gap-2 w-full">
						<a href={URL_SHOP} target="_blank" rel="noopener noreferrer nofollow">
							<LuramiClothing className="w-32 h-16 md:w-40 md:h-20 text-orange-500" />
						</a>
						<div className="w-full h-3 bg-orange-500 mb-2"></div>
						<h2 className="uppercase font-extrabold text-xl mb-6 md:text-3xl text-orange-500">
							Face your
							<br />
							challenge
							<br /> with style
						</h2>
						<Link
							to="/join"
							className="w-fit px-12 py-2 rounded-[16px] uppercase hover:scale-105 transition-all bg-orange-500 text-white">
							Join Now
						</Link>
					</div>
					<div className='flex flex-row items-center justify-between w-full pb-4 pr-10'>
						<h3 className="uppercase font-extrabold text-base md:text-xl text-orange-500">Follow US</h3>
						<Social className="flex gap-2 md:gap-4" size="w-4 h-4 md:w-5 md:h-5"/>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};
