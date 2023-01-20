// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkName = (name) => {
    if (name.length < 8) return false;

    let regex = /[^a-zA-Z0-9]/;
    if (!regex.test(name)) return false;

    return true;
};

module.exports = {
    isEmpty,
    checkName,
};
