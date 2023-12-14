import React, { useState } from 'react';
import { LuramiClothing } from '@/components/Icons';
import { Form } from '@/components/Form';
import { Social } from '@/components/Social';
import { Modal } from '@/components/Modal';
import { Policy } from '@/components/Policy';

const URL_SHOP = 'https://luramiclothing.com/';

export const Join = () => {
	const [show, setShow] = useState(false);
	const handleOpen = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<React.Fragment>
			<main className="relative flex justify-center items-center w-screen h-screen bg-coming-soon bg-cover bg-center">
				<div className="absolute inset-0 z-10 bg-black/50"></div>
				<div className="relative z-20 w-full max-w-xl mx-2 rounded-md shadow-sm md:mx-auto md:rounded-lg md:shadow-md bg-orange-500">
					<div className="flex flex-col gap-4 rounded-tl-[48px] rounded-md p-4 md:rounded-tl-[96px] md:rounded-lg md:p-8 bg-white">
						<table className="items-center">
							<tbody className="w-full">
								<tr className="align-bottom">
									<td className="text-orange-500">
										<a href={URL_SHOP} target="_blank" rel="noopener noreferrer nofollow">
											<LuramiClothing className="w-16 h-8 md:w-24 md:h-12" />
										</a>
									</td>
									<td className="text-orange-500">
										<div className="flex justify-center w-full h-full">
											<h1 className="uppercase text-lg font-extrabold md:text-3xl leading-[0.75!important]">
												Subscribe
											</h1>
										</div>
									</td>
									<td>
										<Social
											className="flex flex-row justify-end items-end gap-1 w-full h-full md:gap-2"
											size="w-4 h-4 md:w-5 md:h-5"
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="w-full h-0.5 md:h-1 bg-orange-500"></div>
						<p className="text-center text-sm font-extrabold uppercase mb-2 md:text-lg text-orange-500">
							Face your challenge with style
						</p>
						<Form onClick={handleOpen} />
					</div>
				</div>
				<Modal value={show} onClose={handleClose}>
					<Policy />
				</Modal>
			</main>
		</React.Fragment>
	);
};
