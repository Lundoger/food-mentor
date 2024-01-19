interface InputFieldProps {
	value: string,
	placeholder: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
} 

const InputField = ({value, placeholder, onChange}: InputFieldProps) => {
	return (
		<input
			type="number"
			className="measurements__input"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default InputField