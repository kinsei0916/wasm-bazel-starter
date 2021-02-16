#!/usr/bin/env node

const shell = require('shelljs');

function exec(command, opt, ignoreCode) {
  const res = shell.exec(command, opt);
  if (!ignoreCode && res.code !== 0) {
    shell.echo('command', command, 'returned code', res.code);
    process.exit(1);
  }
  return res;
}

const CC_FILEPATH = 'src/cc';

const result = shell.find('src/cc').filter(
  fileName => fileName.endsWith('.cc') || fileName.endsWith('.h'));

const cwd = process.cwd() + '/' + CC_FILEPATH;
const filenameArgument = result.join(' ');

exec(`cpplint --root ${cwd} ${filenameArgument}`);
