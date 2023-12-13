import React from 'react';
import { Facebook, Instagram, Tiktok } from '@/components/Icons';

const SOCIAL = {
	INSTAGRAM: 'https://instagram.com/luramiclothing/',
	FACEBOOK: 'https://facebook.com/luramiclothing/',
	TIKTOK: 'https://tiktok.com/@luramiclothing/',
};

export const Social = ({ className, size }) => {
	return (
		<div className={className ?? 'flex flex-row gap-2'}>
			<a
				href={SOCIAL.INSTAGRAM}
				target="_blank"
				rel="noopener noreferrer nofollow"
				className="rounded-full p-1 md:p-1.5 hover:scale-105 transition-all text-white bg-orange-500"
				title="Visit our instagram page">
				<Instagram className={size ?? 'w-5 h-5 md:w-6 md:h-6'} />
			</a>
			<a
				href={SOCIAL.FACEBOOK}
				target="_blank"
				rel="noopener noreferrer nofollow"
				className="rounded-full p-1 md:p-1.5 hover:scale-105 transition-all text-white bg-orange-500"
				title="Visit our facebook page">
				<Facebook className={size ?? 'w-5 h-5 md:w-6 md:h-6'} />
			</a>
			<a
				href={SOCIAL.TIKTOK}
				target="_blank"
				rel="noopener noreferrer nofollow"
				className="rounded-full p-1 md:p-1.5 hover:scale-105 transition-all text-white bg-orange-500"
				title="Visit our tiktok page">
				<Tiktok className={size ?? 'w-5 h-5 md:w-6 md:h-6'} />
			</a>
		</div>
	);
};
