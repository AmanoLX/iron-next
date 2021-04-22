const CheckboxGroup = ({ options, values, onUpdate }) => {
	const handleCheckboxChange = event => {
		const { name, checked } = event.target;
		if (checked) {
			onUpdate([...values, name]);
		} else {
			onUpdate(values.filter(value => value !== name));
		}
	};

	return (
		<div>
			{options.map(option => (
				<div className='form-check form-check-inline' key={option.value}>
					<label
						className='form-check-label d-flex align-items-center mb-2 mr-3'
						htmlFor={`input-checkbox-${option.value}`}>
						<input
							className='form-check-input me-1'
							id={`input-checkbox-${option.value}`}
							type='checkbox'
							name={option.value}
							checked={values.includes(option.value)}
							onChange={handleCheckboxChange}
						/>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};

export default CheckboxGroup;
