import React from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Social } from '@/components/Social';
import { Link } from 'react-router-dom';

const URL_SHOP = 'https://luramiclothing.com/';

function Background({ className }) {
	return (
		<section className={className}>
			<div className="relative h-full flex flex-col items-center md:items-start md:justify-center md:pl-32 pt-36 md:pt-0 select-none">
				<div>
					<h1 className="uppercase md:text-7xl text-4xl font-extrabold text-white mb-6 md:mb-16">Subscribe now!</h1>
					<p className="md:text-3xl text-base font-medium text-white mb-2">
						The first 500 registered will have <br /> early access to
					</p>
					<h2 className="uppercase md:text-5xl text-2xl font-bold italic text-tertiary mb-2">
						Our exclusive <br />
						launch collection
					</h2>
					<p className="md:text-4xl text-xl font-medium italic text-white">and more benefits.</p>
				</div>
			</div>
		</section>
	);
}

function Side({ className }) {
	return (
		<section className={className}>
			<div className="flex flex-col items-center justify-between md:pl-32 h-full py-4 pl-24">
				<div></div>
				<div className="flex flex-col gap-2 w-full">
					<a href={URL_SHOP} target="_blank" rel="noopener noreferrer nofollow">
						<LuramiClothing className="md:w-36 w-32 h-auto text-orange-500" />
					</a>
					<div className="w-full h-3 bg-orange-500 mb-2"></div>
					<h2 className="uppercase font-extrabold text-2xl mb-6 md:text-3xl text-orange-500">
						Face your
						<br />
						challenge
						<br /> with style
					</h2>
					<Link
						to="/join"
						className="w-fit px-8 py-2 rounded-[20px] uppercase hover:scale-105 transition-all bg-orange-500 text-white">
						Join Now
					</Link>
				</div>
				<div className="flex flex-row items-center justify-between w-full pb-4 pr-16">
					<h3 className="uppercase font-extrabold text-lg md:text-xl text-orange-500">Follow US</h3>
					<Social className="flex gap-2 md:gap-4" size="w-4 h-4 md:w-5 md:h-5" />
				</div>
			</div>
		</section>
	);
}

export const Home = () => {
	return (
		<main className="relative flex items-end h-screen">
			<section className="absolute z-0 top-0 md:right-0 bg-secondary h-full w-screen md:pl-36">
				<Background className="relative z-10 bg-orange-500 h-full w-full max-w-screen-2xl md:rounded-tl-[350px] rounded-tl-[250px]"/>
			</section>
			<Side className="md:absolute z-20 md:top-0 md:right-0 bg-white h-[500px] md:h-screen w-screen md:w-[450px] md:rounded-tl-[350px] rounded-tl-[250px]"/>
		</main>
	);
};
