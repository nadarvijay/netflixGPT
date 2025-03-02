
export const validateSignIn = (mobile, password) => {
    const isMobileValid = /^[6-9]\d{9}$/.test(mobile)
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if (!isMobileValid) { return "Mobile is not Valid" }
    if (!isPasswordValid) { return "Password is not Valid" }

    return null;
}

export const validateSignUp = (mobile, name, email) => {
    const isMobileValid = /^[6-9]\d{9}$/.test(mobile)
    const isNameValid = /[a-zA-Z][a-zA-Z ]*/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    if (!isMobileValid) { return "Mobile is not Valid" }
    if (!isNameValid) { return "Name is not Valid" }
    if (!isEmailValid) { return "Email is not Valid" }

    return null;
}