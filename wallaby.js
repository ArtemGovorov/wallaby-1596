const transform = require("fuse-test-runner").wallabyFuseTestLoader;

module.exports = function (wallaby) {
  return {
    files: [
      "src/**/*.ts",
      "src/**/*.html",
      "!src/**/*.test.ts",
    ],
    tests: [
      "src/**/*.test.ts"
    ],
    compilers: {
      "src/**/*.ts": wallaby.compilers.typeScript({ jsx: "react", module: "commonjs" })
    },
    preprocessors: {
      "**/*.test.ts": file => transform(file.content)
    },
    env: {
      type: "node"
    },
    testFramework: "mocha",

    //setup virtual dom and browser in test environment
    setup: (wallaby) => {

      delete require.cache[require.resolve('jquery')];

      //pass local project directory to test file
      global.isBeingRunInWallaby = true;
      global.projectRootPath = wallaby.localProjectDir;

      //setup virtual dom and browser environment in test runner
      const { JSDOM } = require("jsdom");
      const jsdom = new JSDOM("<!doctype html><html></html>");
      const { window } = jsdom;

      global.window = window;
      global.document = window.document;
      global.navigator = {
        userAgent: "node.js",
      };
    },

    debug: true
  };
};
