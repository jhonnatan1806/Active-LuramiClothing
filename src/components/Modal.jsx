import React from 'react';
import { Close } from '@/components/Icons';

export const Modal = ({ children, value, onClick }) => {
	return (
		<React.Fragment>
			{value && (
				<div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
					<div className="px-4 pt-2 pb-4 rounded-lg w-full max-w-xl m-2 md:m-0 bg-white ">
						<div className="flex w-full justify-end py-2 cursor-pointer" onClick={() => onClick(false)}>
							<Close className="w-6 h-6 text-gray-500" />
						</div>
						<div className="h-[75vh] overflow-y-scroll pr-4">{children}</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
