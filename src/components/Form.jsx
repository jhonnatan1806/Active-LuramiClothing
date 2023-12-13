import React from 'react';
import useForm from '@/hooks/UseForm';
import { Error, Success } from '@/components/Icons';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export const Form = ({onClick}) => {

	const additionalData = {
		sent: new Date().toISOString(),
	};

	const { handleSubmit, status, message } = useForm({
		additionalData,
	});

	

	if (status === 'success') {
		return (
			<section>
				<div className="text-2xl text-center font-medium">Thank you!</div>
				<div className="text-orange-500">
					<Success className="w-24 h-24 mx-auto" />
				</div>
				<div className="text-md text-center font-light">{message}</div>
			</section>
		);
	}

	if (status === 'error') {
		return (
			<section>
				<div className="text-2xl text-center font-medium">Something bad happened!</div>
				<div className="text-orange-500">
					<Error className="w-24 h-24 mx-auto" />
				</div>
				<div className="text-md text-center font-light">{message}</div>
			</section>
		);
	}

	return (
		<form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4">
			<div className="flex flex-col flex-wrap md:flex-row gap-4 w-full">
				<label htmlFor="firstName" hidden>
					First name
				</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					placeholder="First name"
					className="grow p-2 text-sm rounded-md border border-gray-200 bg-gray-50  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
					required
				/>
				<label htmlFor="lastName" hidden>
					Last name
				</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					placeholder="Last name"
					className="grow p-2 text-sm rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
					required
				/>
			</div>
			<div>
				<label htmlFor="email" hidden>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					className="w-full p-2 text-sm rounded-md border border-gray-200 bg-gray-50  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
					required
				/>
			</div>
			<div className="flex items-center">
				<input type="checkbox" id="privacy-policy" className="mr-2" required />
				<label htmlFor="privacy-policy" className="text-xs md:text-sm">
					I agree to the&nbsp;
					<span
						className="cursor-pointer underline underline-offset-2 select-none text-orange-500"
						onClick={() => onClick(true)}>
						privacy policy
					</span>
					&nbsp;of Lurami Clothing.
				</label>
			</div>
			<div className="flex justify-center">
				<button
					type="submit"
					className="mt-2 px-12 py-2 rounded-[16px] uppercase hover:scale-105 transition-all bg-orange-500 text-white">
					Submit
				</button>
			</div>
		</form>
	);
};
