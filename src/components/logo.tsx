import { SVGProps } from 'react';

type LogoProps = SVGProps<SVGSVGElement>;

const Logo = (props: LogoProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='3000 4000 5000 4000'
			fill='currentColor'
			style={{ transform: 'scale(1, -1)' }}
			{...props}
		>
			<path
				d='M3440 6275 l0 -1685 465 0 465 0 2 1135 3 1134 570 -598 c314 -329
574 -597 578 -594 5 3 1807 1988 2060 2271 l20 22 -580 0 -581 0 -433 -482
c-237 -266 -441 -493 -453 -506 l-21 -22 -454 505 -453 505 -594 0 -594 0 0
-1685z'
			/>
			<path
				d='M7498 7409 l-118 -130 0 -1245 0 -1244 -207 2 -208 3 -5 1008 -5
1007 -127 -140 -128 -141 0 -969 0 -970 460 0 460 0 0 1475 c0 811 -1 1475 -2
1475 -2 0 -56 -59 -120 -131z'
			/>
		</svg>
	);
};

export default Logo;
