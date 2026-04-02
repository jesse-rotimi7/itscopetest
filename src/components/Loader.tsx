import { Spinner } from "./Spinner";

type LoaderProps = {
	text?: string;
	className?: string;
};

export const Loader = ({ text, className }: LoaderProps) => {
	return (
		<div
			className={`mx-auto flex items-center gap-1 font-semibold ${className}`}
		>
			<Spinner className='text-white' />
			<p className='text-xs text-white'>
				{text ? text : "sending..."}
			</p>
		</div>
	);
};
