import next from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...next,
  prettier,
  {
    rules: {
      // eslint-plugin-react-hooks v7 promotes these to errors; keep them as
      // warnings to match the lint behavior prior to the Next.js 16 upgrade.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/static-components": "warn",
    },
  },
];

export default eslintConfig;
