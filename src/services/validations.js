// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkName = (name) => {
    return name.length >= 8;
};

module.exports = {
    isEmpty,
    checkName,
};
