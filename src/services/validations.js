// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkName = (name) => {
    if (name.length < 8) return false;

    let regexSpecial = /[^a-zA-Z0-9]/;
    if (!regexSpecial.test(name)) return false;

    let regexNumber = /[0-9]/;
    if (!regexNumber.test(name)) return false;

    return true;
};

module.exports = {
    isEmpty,
    checkName,
};
