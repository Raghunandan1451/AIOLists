import React from 'react';
import Button from '@src/components/atoms/Button/Button';

interface TitleWithButtonProps {
	heading: string;
	onDownload: (heading: string) => void;
	buttonText: string;
}

const TitleWithButton: React.FC<TitleWithButtonProps> = (props) => {
	const { heading, onDownload, buttonText } = props;
	return (
		<div className="flex place-content-between place-items-center p-2">
			<h1 className="text-4xl font-bold">{heading.toUpperCase()}</h1>
			<Button
				type="button"
				className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-sm"
				onClick={() => onDownload(heading)}
				text={buttonText}
			/>
		</div>
	);
};

export default TitleWithButton;
