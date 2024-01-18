import { useNavigate  } from "react-router-dom"

interface ContinueButtonProps {
	to: string,
	disabled: boolean,
}

const ContinueButton = ({to, disabled}: ContinueButtonProps) => {
	const navigate = useNavigate()
	
	const handleClick = () => {
		navigate(to)
	}

	return (
		<button disabled={disabled} onClick={handleClick} className="continue-button">Continue</button>
	)
}

export default ContinueButton