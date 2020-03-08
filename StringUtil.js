/**
 * Checks if a string contains any of a string
 * @param {string} string - The string to use as a source
 * @param {string[]} strings - Array of strings to check
 */
module.exports.includesAny = (string, strings) => {
    for (let i = 0; i < strings.length; i++) {
        if (string.indexOf(strings[i]) >= 0) {
            return true;
        }
    }

    return false;
}

/**
 * Returns any strings that are included in another string
 * @param {string} string - The string to use as a source
 * @param {string[]} strings - Array of strings to check
 */
module.exports.getIncluded = (string, strings) => {
    const included = [];
    for (let i = 0; i < strings.length; i++) {
        if (string.indexOf(strings[i]) >= 0) {
            included.push(strings[i]);
        }
    }

    return included;
}

/** 
 * Replaces all occurrences of a string inside a string with another
 * @param {string} string - The string to use as a source
 * @param {string} find - The string to replace
 * @param {string} replaceWith - The string which will replace the found strings
 */
module.exports.replace = (string, find, replaceWith) => {
    return string.split(find).join(replaceWith);
}

/** 
 * Returns a string between two strings
 * @param {string} string - The string to use as a source
 * @param {string} after - Returns the string after this
 * @param {string} upto - Returns the string upto this
 */
module.exports.getBetween = (string, after, upto) => {
    if (string.indexOf(after) >= 0) {
        string = string.substring(string.indexOf(after) + after.length);
    }
    if (string.indexOf(upto) >= 0) {
        string = string.substring(0, string.indexOf(upto));
    }

    return string;
}