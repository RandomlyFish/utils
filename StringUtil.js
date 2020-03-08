module.exports = {
    /**
     * Checks if a string contains any of the provided strings
     * @param {string} string 
     * @param {string[]} strings 
     */
    containsAny: (string = "", strings = []) => {
        for (let i = 0; i < strings.length; i++) {
            if (string.indexOf(strings[i]) >= 0) {
                return true;
            }
        }

        return false;
    },

    /** 
     * Replaces all occurances of a string inside a string with another
     * @param {string} string - The string to use as a source
     * @param {string} find - The string to replace
     * @param {string} replaceWith - The string which will replace the found strings
     */
    replace: (string, find, replaceWith) => {
        return string.split(find).join(replaceWith);
    }
};