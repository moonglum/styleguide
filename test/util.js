let path = require("path");
let assert = require("assert");

let FIXTURES = path.resolve(__dirname, "fixtures");
let EXPECTATIONS = path.resolve(__dirname, "expectations");

class MockManifest {
	get(path) {
		return `/${path}`;
	}

	toJSON() {
		return {
			"snippet-0.css": "snippet-0.css",
			"snippet-1.css": "snippet-1.css",
			"snippet-1.js": "snippet-1.js"
		};
	}
}

exports.MockAssetManager = class MockAssetManager {
	constructor(referenceDir) {
		this.referenceDir = referenceDir;
		this.manifest = new MockManifest();
	}

	// TODO: this is currently a private method
	_report() {
	}
};

exports.assertSame = assert.strictEqual;
exports.assertDeep = assert.deepStrictEqual;

exports.fixturesPath = filepath => path.resolve(FIXTURES, filepath);
exports.fixturesDir = FIXTURES;

exports.expectationsPath = filepath => path.resolve(EXPECTATIONS, filepath);
exports.expectationsDir = EXPECTATIONS;
