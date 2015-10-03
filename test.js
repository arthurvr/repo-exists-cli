import {execFile} from 'child_process';
import path from 'path';
import test from 'ava';

test(t => {
	t.plan(2);

	execFile(path.join(__dirname, 'cli.js'), ['--help'], (error, stdout) => {
		t.error(error);
		t.regexTest(/GitHub repo exists/, stdout);
	});
});
