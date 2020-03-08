const StringUtil = require("./StringUtil.js");
const {performance} = require("perf_hooks");

// TODO: Create a module for testing
function logError(msg) {
    console.log("[31m" + msg + "[39m");
}

function logSuccess(msg) {
    console.log("[32m" + msg + "[39m");
}

/** 
 * @param {string} name 
 * @param {function} func 
 * @param {*} expectedValue 
 */
function test(name, func, expectedValue) {
    const repeat = 100;
    const begin = performance.now();
    for (let i = 0; i < repeat; i++) {
        func();
    }
    const end = performance.now();
    const executionTime = (end - begin).toFixed(4);

    let input = func();
    let matchingTypes = typeof input === typeof expectedValue;

    if (typeof input === "string") {
        input = '"' + input + '"';
    }
    if (typeof expectedValue === "string") {
        expectedValue = '"' + expectedValue + '"';
    }

    if (Array.isArray(input) === true) {
        input = "[" + input.toString() + "]";
    }
    if (Array.isArray(expectedValue) === true) {
        expectedValue = "[" + expectedValue.toString() + "]";
    }

    if (input !== expectedValue || matchingTypes === false) {
        logError(`Test: ${name} failed, input: ${input} does not match the expected value: ${expectedValue}`);
        process.exit();
    } else {
        console.log(`Test: ${name} passed | ${executionTime}ms`);
    }
}

test("Includes any none", () => StringUtil.includesAny("Test string", []), false);
test("Includes any none 2", () => StringUtil.includesAny("Test string", ["find"]), false);
test("Includes any single", () => StringUtil.includesAny("Test string", ["string"]), true);

test("Get included none", () => StringUtil.getIncluded("Test string", []), []);
test("Get included none 2", () => StringUtil.getIncluded("Test string", ["notString"]), []);
test("Get included none 3", () => StringUtil.getIncluded("Test string", ["Test string extended"]), []);
test("Get included single", () => StringUtil.getIncluded("Test string", ["string"]), ["string"]);
test("Get included single 2", () => StringUtil.getIncluded("Test string string string", ["string"]), ["string"]);
test("Get included multiple", () => StringUtil.getIncluded("Test string", ["Test", "string"]), ["Test", "string"]);
test("Get included multiple 2", () => StringUtil.getIncluded("Test string", ["Test", "string", "notString"]), ["Test", "string"]);

test("Replace none", () => StringUtil.replace("Test string 1", "123", "321"), "Test string 1");
test("Replace single", () => StringUtil.replace("Test string", "Test", "Working"), "Working string");
test("Replace multiple", () => StringUtil.replace("Test 123 test 123", "123", "abc"), "Test abc test abc");

test("Get up to none", () => StringUtil.getUpTo("Start string end", " notEnd"), "Start string end");
test("Get up to end", () => StringUtil.getUpTo("Start string end", " end"), "Start string");
test("Get up to end 2", () => StringUtil.getUpTo("Start string end end", " end"), "Start string");

test("Get after none", () => StringUtil.getAfter("Start string end", "notStart"), "Start string end");
test("Get after end", () => StringUtil.getAfter("Start string end", "Start "), "string end");
test("Get after end 2", () => StringUtil.getAfter("Start Start string end", "Start "), "Start string end");

test("Get between none", () => StringUtil.getBetween("Start string end", "notStart ", " notEnd"), "Start string end");
test("Get between middle", () => StringUtil.getBetween("Start string end", "Start ", " end"), "string");
test("Get between only start", () => StringUtil.getBetween("Start string end", "Start ", " notEnd"), "string end");
test("Get between only end", () => StringUtil.getBetween("Start string end", "notStart ", " end"), "Start string");
test("Get between middle multiple", () => StringUtil.getBetween("Start Start string end end", "Start ", " end"), "Start string");
test("Get between start multiple", () => StringUtil.getBetween("Start Start string end", "Start ", " notEnd"), "Start string end");
test("Get between end multiple", () => StringUtil.getBetween("Start string end end", "Start ", " end"), "string");
test("Get between end in beginning", () => StringUtil.getBetween(" end", "Start ", " end"), "");

logSuccess(`All tests passed`);