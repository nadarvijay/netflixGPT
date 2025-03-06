
export const validateSignIn = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if (!isEmailValid) { return "Email is not Valid" }
    if (!isPasswordValid) { return "Password is not Valid" }

    return null;
}

export const validateSignUp = (email, name, mobile, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isNameValid = /[a-zA-Z][a-zA-Z ]*/.test(name);
    const isMobileValid = /^[6-9]\d{9}$/.test(mobile);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (!isEmailValid) { return "Email is not Valid" }
    if (!isNameValid) { return "Name is not Valid" }
    if (!isMobileValid) { return "Mobile is not Valid" }
    if (!isPasswordValid) { return "Password is not Valid" }

    return null;
}