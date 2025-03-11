import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["tests/*.{js,,ts}"] },
    {
        ignores: ["node_modules", "ortoni-report", "eslint.config.mjs"],
    },
    {
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/no-floating-promises": "error"
        }
    },
    {
        ...playwright.configs['flat/recommended'],
        rules: {
            ...playwright.configs['flat/recommended'].rules,
        }
    },
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            ...stylistic.configs['flat/recommended'],
            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            '@stylistic/indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            'semi': [
                'error',
                'always',
                {
                    omitLastInOneLineBlock: true,
                    omitLastInOneLineClassBody: true,
                }
            ]
        }
    }
];