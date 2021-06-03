// argon-promisify/test/main.test.js

'use strict';

const engine = require('..');

function seven(callback) {
	return callback(null, 7);
}

function double(a, callback) {
	return callback(null, 2 * a);
}

function add(a, b, callback) {
	return callback(null, a + b);
}

exports.promisify0 = {
	setUp: function(done) {
		done();
	},
	test: function(test) {
		test.expect(1);

		const expectedResult = 7;

		engine
			.promisify(seven)()
			.then(actualResult => {
				test.equal(
					actualResult,
					expectedResult,
					`Should be ${expectedResult}`
				);
				test.done();
			})
			// eslint-disable-next-line no-unused-vars
			.catch(error => {
				test.ok(false);
				test.done();
			});
	}
};

exports.promisify1 = {
	setUp: function(done) {
		done();
	},
	test: function(test) {
		test.expect(1);

		const a = 13;
		const expectedResult = 2 * a;

		engine
			.promisify(double)(a)
			.then(actualResult => {
				test.equal(
					actualResult,
					expectedResult,
					`Should be ${expectedResult}`
				);
				test.done();
			})
			// eslint-disable-next-line no-unused-vars
			.catch(error => {
				test.ok(false);
				test.done();
			});
	}
};

exports.promisify2 = {
	setUp: function(done) {
		done();
	},
	test: function(test) {
		test.expect(1);

		const a = 2;
		const b = 3;
		const expectedResult = a + b;

		engine
			.promisify(add)(a, b)
			.then(actualResult => {
				test.equal(
					actualResult,
					expectedResult,
					`Should be ${expectedResult}`
				);
				test.done();
			})
			// eslint-disable-next-line no-unused-vars
			.catch(error => {
				test.ok(false);
				test.done();
			});
	}
};
