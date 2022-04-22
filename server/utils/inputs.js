function checkEmptyInputs(...params) {
    for (let param of params) {
        if (param === '') {
            return true;
        }
    }

    return false;
}

module.exports = {
    checkEmptyInputs
}