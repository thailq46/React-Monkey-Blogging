import React from 'react';
import { useController } from 'react-hook-form';

const Radio = ({ checked, children, control, name, ...rest }) => {
	const { field } = useController({
		control,
		name,
		defaultValue: '',
	});
	return (
		<label>
			<input
				onChange={() => {}}
				className="hidden-input"
				checked={checked}
				type="radio"
				{...rest}
				{...field}
			/>

			<div className="flex items-center gap-x-3 font-medium cursor-pointer">
				<div
					className={`w-7 h-7 rounded-full ${
						checked ? 'bg-green-400' : 'bg-gray-200'
					}`}
				></div>
				<span>{children}</span>
			</div>
		</label>
	);
};

export default Radio;
