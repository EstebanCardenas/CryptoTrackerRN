module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    "semi": ["error", "always"],
    "eol-last": ["error", "always"],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
  },
};
