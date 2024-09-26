// Plugins
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier';
import pluginJs from '@eslint/js';
// Configs
import eslintConfigXO from 'eslint-config-xo';
import eslintConfigXOTypescript from 'eslint-config-xo-typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
// Node
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
	pluginJs.configs.recommended,
	...eslintConfigXO, // XO para JS
	...eslintConfigXOTypescript, // XO con TypeScript
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			parserOptions: {
				project: path.resolve(__dirname, './tsconfig.json'),
				tsconfigRootDir: __dirname,
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
			globals: globals.browser,
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
			prettier: eslintPluginPrettierRecommended,
		},
		rules: {
			// Personaliza las reglas de XO y TypeScript si lo necesitas aquí
			'new-cap': 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'max-len': ['error', { code: 120 }],
			'@stylistic/object-curly-spacing': ['error', 'always'],
		},
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
			prettier: eslintPluginPrettierRecommended,
		},
		rules: {
			...eslintConfigXO.rules,
			...eslintPluginUnicorn.configs['flat/all'].rules,
			...eslintConfigPrettier.rules,
			'max-len': ['error', { code: 120 }],
		},
	},
	eslintConfigPrettier,
	{ ignores: ['**/build/**', '**/dist/**', 'node_modules/**', '*.mjs', '*.cjs'] },
];
