'use strict';
var execFile = require('child_process').execFile;
var path = require('path');
var test = require('ava');

test(function (t) {
	t.plan(2);

	execFile(path.join(__dirname, 'cli.js'), ['--help'], function (error, stdout) {
		t.assert(!error, error);
		t.assert(/GitHub repo exists/.test(stdout));
	});
});
