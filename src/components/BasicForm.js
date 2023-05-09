import useInput from '../hooks/use-input';

const BasicForm = () => {
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput((firstName) => firstName.trim() !== '');

	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput((lastName) => lastName.trim() !== '');

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((email) => email.trim() !== '' && email.trim().includes('@'));

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(firstNameValue, lastNameValue, emailValue);

		resetFirstName();
		resetLastName();
		resetEmail();
	};

	const firstNameInputClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';

	const lastNameInputClasses = lastNameHasError
		? 'form-control invalid'
    : 'form-control';
  
  	const emailInputClasses = emailHasError
			? 'form-control invalid'
			: 'form-control';

	return (
		<form onSubmit={formHandler}>
			<div className={firstNameInputClasses}>
				<div className="form-control">
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={firstNameValue}
					/>
					{firstNameHasError && (
						<p className="error-text">First name must not be empty.</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="last-name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastNameValue}
					/>
					{lastNameHasError && (
						<p className="error-text">Last name must not be empty.</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="email"
					id="email"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={emailValue}
				/>
				{emailHasError && (
					<p className="error-text">Email must be valid.</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
