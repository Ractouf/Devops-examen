// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkName = (name) =>
    name.length >= 8 && /[^a-zA-Z0-9]/.test(name) && /[0-9]/.test(name);

module.exports = {
    isEmpty,
    checkName,
};
