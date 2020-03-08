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
 * Returns a string upto another string
 * @param {string} string - The string to use as a source
 * @param {string} upto - Removes any part of the string after and including this
 */
module.exports.getUpTo = (string, upTo) => {
    if (string.indexOf(upTo) >= 0) {
        string = string.substr(0, string.indexOf(upTo));
    }
    return string;
}

/** 
 * Returns a string between two strings
 * @param {string} string - The string to use as a source
 * @param {string} after - Removes any part of the string up to and including this
 */
module.exports.getAfter = (string, after) => {
    if (string.indexOf(after) >= 0) {
        string = string.substr(string.indexOf(after) + after.length);
    }
    return string;
}

/** 
 * Returns a string between two strings
 * @param {string} string - The string to use as a source
 * @param {string} after - Removes any part of the string up to and including this
 * @param {string} upto - Removes any part of the string after and including this
 */
module.exports.getBetween = (string, after, upto) => {
    string = this.getAfter(string, after);
    string = this.getUpTo(string, upto);
    return string;
}