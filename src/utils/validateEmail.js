const validateEmail = (value) => {
    const emailRegex = /\w+@\w+\.\w+/;
    return emailRegex.test(value);
}

export default  validateEmail
