module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    // Below is a fix for flaw in Storybook: https://stackoverflow.com/questions/69657102/storybook-addon-storyshots-for-angular-12
    'jest-preset-angular/build/setup-jest': 'jest-preset-angular/setup-jest',
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer': 'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/AngularSnapshotSerializer': 'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/HTMLCommentSerializer': 'jest-preset-angular/build/serializers/html-comment'
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  globalSetup: 'jest-preset-angular/global-setup',
  testMatch: [
    '<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/!(*.d).ts'
  ],
  coverageDirectory: 'target/coverage',
  coverageReporters: [
    'clover',
    'html'
  ]
};
