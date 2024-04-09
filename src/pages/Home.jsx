import React from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Social } from '@/components/Social';
import { Link } from 'react-router-dom';

const URL_SHOP = 'https://luramiclothing.com/';

function Banner(props) {
	return (
		<section className={props.className}>
			<div className='select-none'>
				<h1 className="text-white text-center md:text-start text-3xl md:text-6xl font-extrabold uppercase mb-4 md:mb-8">Subscribe now!</h1>
				<p className="text-white text-base md:text-3xl mb-1 md:mb-2 font-semibold md:leading-[3.2rem!important]">
					Only the first to register will get early 
          <br /> access to our{' '}
          <span className='text-primary text-lg md:text-4xl mb-1 md:mb-2 font-bold italic uppercase'>
            Exclusive launch 
            <br /> collection
          </span>{' '}
          and more benefits
				</p>
			</div>
		</section>
	);
}

function Information(props) {
	return (
		<section className={props.className}>
			<div className="text-primary h-full flex flex-col items-center justify-around md:justify-between pl-16">
				<div className="w-full flex flex-col gap-2">
					<a href={URL_SHOP} target="_blank" rel="noopener noreferrer nofollow">
						<LuramiClothing className="w-28 md:w-36 h-auto pt-2" />
					</a>
					<div className="bg-primary w-full h-3"></div>
          <div className="w-full flex md:flex-col items-end md:items-start justify-between gap-2 pr-16 md:pr-0">
					<h2 className="font-extrabold text-base md:text-2xl uppercase">
						Face your
						<br />
						challenge
						<br />
						with style
					</h2>
					<Link to="/join" className="bg-primary text-white text-sm md:text-base w-fit h-fit rounded-2xl uppercase px-4 py-1 md:px-8 md:py-1 mt-2 mb-1 md:mt-8">
						Join Now
					</Link>
					</div>
				</div>
        <div className="flex flex-row w-full justify-between items-center md:gap-20 pr-8">
						<span className="font-extrabold text-base md:text-lg uppercase">Follow US</span>
						<Social className="flex gap-2" size="w-4 h-4" />
					</div>
			</div>
		</section>
	);
}

export const Home = () => {
	return (
		<main className="h-screen w-screen flex flex-col md:flex-row">
      <section className='grow w-full h-1/2 md:h-full bg-banner bg-cover bg-center'>
        <Banner className="flex items-center md:items-start justify-center w-full h-full md:pt-[35vh]"/>
      </section>
      <section className="h-1/2 w-full md:h-full md:w-[35vw]">
					<Information className="h-full w-full pt-[2vh] pb-[2vh] md:pt-[35vh]"/>
				</section>
		</main>
	);
};

