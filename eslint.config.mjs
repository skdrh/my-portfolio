import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * eslint-config-next 16 ships native flat configs, so they are spread straight
 * in. Wrapping them in FlatCompat — the pattern from the eslintrc era — makes
 * ESLint try to JSON.stringify a plugin object that references itself, and it
 * dies with "Converting circular structure to JSON".
 */
const config = [
    ...coreWebVitals,
    ...nextTypescript,
    {ignores: [".next/**", "node_modules/**", "next-env.d.ts"]},
];

export default config;
