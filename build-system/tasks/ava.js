/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const argv = require('minimist')(process.argv.slice(2));
const {execOrDie} = require('../common/exec');

/**
 * Runs ava tests.
 */
async function ava() {
  const testFiles = [
    'build-system/tasks/get-zindex/get-zindex.test.js',
    'build-system/tasks/prepend-global/prepend-global.test.js',
  ];
  execOrDie(
    [
      'npx ava',
      ...testFiles,
      '--color --fail-fast',
      argv.watch ? '--watch' : '',
    ]
      .join(' ')
      .trim()
  );
}

module.exports = {
  ava,
};

ava.description = "Runs ava tests for AMP's tasks";

ava.flags = {
  'watch':
    '  https://github.com/avajs/ava/blob/main/docs/recipes/watch-mode.md',
};
