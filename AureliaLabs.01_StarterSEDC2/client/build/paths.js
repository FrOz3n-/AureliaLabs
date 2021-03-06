var path = require("path");

var appRoot = "src/";
var outputRoot = "dist/";

module.exports = {
    root: appRoot,
    source: appRoot + "**/*.ts",
    typings: "typings/**/*.ts",
    html: appRoot + "**/*.html",
    style: "styles/**/*.css",
    output: outputRoot,
    sourceMapRelativePath: "../" + appRoot,
    doc: "./doc",
    e2eSpecsSrc: "test/e2e/src/*.ts",
    e2eSpecsDist: "test/e2e/dist/"
};
