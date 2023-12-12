import React from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Social } from '@/components/Social';
import { Link } from 'react-router-dom';

const URL_SHOP = 'https://luramiclothing.com/';

export const Root = () => {
	return (
		<React.Fragment>
			<main className="flex flex-row justify-end w-screen h-screen bg-coming-soon bg-cover">
				<div className="w-full h-full hidden md:flex md:flex-col md:items-center md:justify-center bg-black/25">
					<h1 className="text-4xl font-bold text-white">Coming Soon</h1>
				</div>
				<div className="w-full max-w-[400px] h-screen bg-orange-500">
					<div className="flex flex-col items-center justify-between p-6 md:p-8 w-full h-full rounded-tl-[48px] md:rounded-tl-[72px] bg-white">
						<div className="flex items-center justify-between w-full">
							<h2 className="uppercase font-bold text-lg md:text-xl text-orange-500">Follow US</h2>
							<Social className="flex flex-row justify-center gap-2 md:gap-4" />
						</div>
                        <a href={URL_SHOP} rel="noreferrer noopener" target="_blank">
                            <LuramiClothing className="w-40 h-20 md:w-48 md:h-24 text-orange-500" />
                        </a>
						<Link
							to="/join"
							className="px-12 py-2 rounded-[16px] uppercase hover:scale-105 transition-all bg-orange-500 text-white">
							Join Now
						</Link>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};
