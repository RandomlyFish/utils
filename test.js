const StringUtil = require("./StringUtil.js");

// TODO: Create a module for testing
function logError(msg) {
    console.log("[31m" + msg + "[39m");
}

function logSuccess(msg) {
    console.log("[32m" + msg + "[39m");
}

/** @param {string} name @param {*} input @param {*} expectedOutput */
function test(name, input, expectedOutput) {
    if (input !== expectedOutput) {
        logError(`Test: ${name} failed, input: "${input}" did not return the expected output: "${expectedOutput}"`);
        process.exit();
    } else {
        console.log(`Test: ${name} passed`);
    }
}

test("Contains none", StringUtil.containsAny("Test string", []), false);
test("Contains none 2", StringUtil.containsAny("Test string", ["find"]), false);
test("Contains single", StringUtil.containsAny("Test string", ["string"]), true);

test("Replace none", StringUtil.replace("Test string 1", "123", "321"), "Test string 1");
test("Replace single", StringUtil.replace("Test string", "Test", "Working"), "Working string");
test("Replace multiple", StringUtil.replace("Test 123 test 123", "123", "abc"), "Test abc test abc");

logSuccess(`All tests passed`);