module.exports = {
  extends: ["react-app", "@madebywild/eslint-config-typescript"],
  plugins: ["jsx-a11y", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/self-closing-comp": "error",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "react/no-unknown-property": "warn",
  },
};
