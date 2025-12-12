module.exports = {
  preset: "jest-expo",
  setupFiles: [
    "<rootDir>/jestSetup.js",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo|expo-modules-core|react-native-reanimated)",
  ],

  moduleNameMapper: {
    "react-native-reanimated": "<rootDir>/app/__mocks__/react-native-reanimated.js",
  },
};
