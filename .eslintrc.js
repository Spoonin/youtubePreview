module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:react-hooks/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
        ecmaVersion: 2015,
        sourceType: "module",
    },
    plugins: ["react", "prettier", "@typescript-eslint", "react-hooks"],
    settings: {
        react: {
            version: "latest",
        },
        "import/resolver": {
            node: {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx",
                    ".scss",
                    ".d.ts",
                    ".svg",
                ],
                moduleDirectory: ["node_modules", "src"],
            },
        },
    },
    overrides: [
        {
            files: ["**/*.tsx"],
            rules: {
                "react/prop-types": "off",
            },
        },
        {
            files: ["**/*.tsx", "**/*.ts"],
            rules: {
                "no-case-declarations": "off",
                "no-console": ["error", { allow: ["warn", "error"] }],

                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-non-null-assertion": "off",

                "react/display-name": "off",
                "react-hooks/exhaustive-deps": "off",
            },
        },
    ],
}
