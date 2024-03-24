import React from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Social } from '@/components/Social';
import { Link } from 'react-router-dom';

const URL_SHOP = 'https://luramiclothing.com/';

function Banner(props) {
	return (
		<section className={props.className}>
			<div className='select-none'>
				<h1 className="text-white text-3xl md:text-6xl font-extrabold uppercase mb-4 md:mb-8">Subscribe now!</h1>
				<p className="text-white text-sm md:text-xl mb-1 md:mb-2 font-medium">
					The first 500 registered will have <br /> early access to
				</p>
				<h2 className="text-tertiary text-xl md:text-4xl mb-1 md:mb-2 font-bold italic uppercase">
					Our exclusive <br /> launch collection
				</h2>
				<p className="text-white text-lg md:text-3xl font-medium italic">and more benefits.</p>
			</div>
		</section>
	);
}

function Information(props) {
	return (
		<section className={props.className}>
			<div className="text-primary h-full flex flex-col items-center justify-between pl-24">
				<div className="w-full flex flex-col gap-2">
					<a href={URL_SHOP} target="_blank" rel="noopener noreferrer nofollow">
						<LuramiClothing className="w-28 md:w-36 h-auto" />
					</a>
					<div className="bg-primary w-full h-3"></div>
					<h2 className="font-extrabold text-xl md:text-3xl uppercase">
						Face your
						<br />
						challenge
						<br />
						with style
					</h2>
					<Link to="/join" className="bg-primary text-white text-sm md:text-base w-fit rounded-3xl uppercase px-8 py-2 md:px-12 md:py-3 my-2 md:my-4">
						Join Now
					</Link>
					
				</div>
        <div className="flex flex-row w-full justify-between items-center md:gap-20 pr-8">
						<h3 className="font-extrabold text-base md:text-xl uppercase">Follow US</h3>
						<Social className="flex gap-2" size="w-4 h-4" />
					</div>
			</div>
		</section>
	);
}

export const Home = () => {
	return (
		<main className="bg-secondary h-screen w-screen md:pl-[8vw]">
			<div className="bg-primary h-full w-full flex flex-col md:flex-row md:justify-end rounded-tl-[50vw] md:rounded-tl-[25vw]">
				<Banner className="bg-transparent h-1/2 grow flex flex-col items-center pt-[20vh] md:pt-[35vh]" />
				<section className="bg-white h-1/2 w-full md:h-full md:w-[30vw] rounded-tl-[50vw] md:rounded-tl-[25vw]">
					<Information className="bg-transparent h-full w-full pt-[8vh] pb-[2vh] md:pt-[35vh]"/>
				</section>
			</div>
		</main>
	);
};

