const { join } = require('path');
const ngc = require('@angular/compiler-cli/src/main').main;
const camelCase = require('camelcase');

const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const sourcemaps = require('rollup-plugin-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const components = require('../src/libs/components/build.config.json');
const pro = require('../src/libs/pro/build.config.json');
const momentDateAdapter = require('../src/libs/moment-adapter/build.config.json');

const config = {
  input: {
    external: id =>
      /^(@angular)/.test(id) ||
      /^(@ng-tangram)/.test(id) ||
      /^(rxjs)/.test(id) ||
      /^(marked)/.test(id) ||
      /^(moment)/.test(id) ||
      /^(codemirror)/.test(id) ||
      /^(prismjs)/.test(id),
    plugins: [
      commonjs({
        include: [
          'node_modules/blueimp-load-image/**'
        ]
      }),
      sourcemaps(),
      nodeResolve({ jsnext: true, module: true })
    ],
    // external : ['marked', 'codemirror', 'prismjs']
  },
  output: {
    globals: {
      '@angular/animations': 'ng.animations',
      '@angular/core': 'ng.core',
      '@angular/forms': 'ng.forms',
      '@angular/common': 'ng.common',
      '@angular/common/http': 'ng.common.http',
      '@angular/http': 'ng.http',
      '@angular/cdk': 'ng.cdk',
      '@angular/cdk/a11y': 'ng.cdk.a11y',
      '@angular/cdk/bidi': 'ng.cdk.bidi',
      '@angular/cdk/coercion': 'ng.cdk.coercion',
      '@angular/cdk/platform': 'ng.cdk.platform',
      '@angular/cdk/observers': 'ng.cdk.observers',
      '@angular/cdk/overlay': 'ng.cdk.overlay',
      '@angular/cdk/collections': 'ng.cdk.collections',
      '@angular/cdk/portal': 'ng.cdk.portal',
      '@angular/cdk/keycodes': 'ng.cdk.keycodes',
      '@angular/cdk/table': 'ng.cdk.table',
      '@angular/cdk/tree': 'ng.cdk.tree',
      'marked': 'marked',
      'prismjs': 'Prism',
      'codemirror': 'CodeMirror',
      'moment': 'moment',
      'rxjs': 'Rx',
      'rxjs/operators': 'Rx.operators',
      ...components.globals,
      ...pro.globals,
      ...momentDateAdapter.globals
    },
    sourcemap: true
  }
};

module.exports = {};

/** build libs */
module.exports.rollup = async function (name, fullName, es5Entry, es2015Entry, distFolder) {

  const inputBaseConfig = {
    ...config.input
  };
  const outputBaseConfig = {
    name: fullName,
    ...config.output
  };

  // UMD bundle.
  const umdConfig = {
    input: {
      ...inputBaseConfig,
      input: es5Entry
    },
    output: {
      ...outputBaseConfig,
      file: join(distFolder, `bundles`, `${name}.umd.js`),
      format: 'umd'
    }
  };

  // Minified UMD bundle.
  const minifiedUmdConfig = {
    input: {
      ...inputBaseConfig,
      input: es5Entry,
      plugins: inputBaseConfig.plugins.concat([uglify({})])
    },
    output: {
      ...outputBaseConfig,
      file: join(distFolder, `bundles`, `${name}.umd.min.js`),
      format: 'umd'
    }
  };

  // ESM+ES5 flat module bundle.
  const esm5Config = {
    input: {
      ...inputBaseConfig,
      input: es5Entry,
    },
    output: {
      ...outputBaseConfig,
      file: join(distFolder, `esm5`, `${name}.js`),
      format: 'es'
    }
  };

  // ESM+ES2015 flat module bundle.
  const esm2015Config = {
    input: {
      ...inputBaseConfig,
      input: es2015Entry
    },
    output: {
      ...outputBaseConfig,
      file: join(distFolder, `esm2015`, `${name}.js`),
      format: 'es'
    }
  };

  return [umdConfig, minifiedUmdConfig, esm5Config, esm2015Config].map(async cfg => {
    const bundle = await rollup.rollup(cfg.input).catch(e => console.log(e));
    // const { code, map } = await bundle.generate(cfg.output);
    await bundle.write(cfg.output).catch(e => console.log(e));
  });
};

/** build es2015 */
module.exports.esm2015 = async function (tsConfig) {
  const exitCode = await ngc(['-p', tsConfig]);
  exitCode === 0 ? Promise.resolve() : Promise.reject();
}

/** build es5 */
module.exports.esm5 = async function (tsConfig, outDir) {
  const exitCode = await ngc(['-p', tsConfig, '--target', 'es5', '-d', 'false', '--outDir', outDir]);
  exitCode === 0 ? Promise.resolve() : Promise.reject();
}
