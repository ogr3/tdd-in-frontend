TDD i frontend
==============

Angular
-------

Projektet [angular-tdd](./angular-tdd) är skapat enligt följande:
1. Skapa projektet: `npx @angular/cli@latest new angular-tdd`
2. Ersätt Karma med Jest med hjälp av [Jest Angular Schematic](https://github.com/briebug/jest-schematic): `ng add @briebug/jest-schematic` (se  för mer info)
3. Lägg till [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/) med `npm install -D @testing-library/angular`
   1. Lägg till Jest DOM `npm install -D @testing-library/jest-dom`
   2. Lägg till i `setup-jest.ts`:
    ```typescript
    import '@testing-library/jest-dom';
    ```
   3. Lägg till i `tsconfig.spec.json` (to make IDE happy):
    ```json
    {
      "compilerOptions": {
        "types": [
          "jest",
          "testing-library__jest-dom"
        ]
      },
      "include": [
        "src/**/*.spec.ts",
        "src/**/*.d.ts",
        "./jest-setup.ts"
      ]
    }
    ``` 
4. Lägg till [Storybook](https://storybook.js.org/docs/angular/get-started/install): `npx storybook init`.   
   Ta bort exemplena i `src/stories`.
5. Lägg till Storyshots för att möjliggöra snapshot-testning av Storybook stories.
   Läs mer på [Storyshots addon](https://storybook.js.org/addons/msw-storybook-addon).
   ```shell
   $ npm install -D @storybook/addon-storyshots
   ```
   och lägg till `src/storyshot.spec.ts`:
   ```typescript
   import initStoryshots from '@storybook/addon-storyshots';
   initStoryshots();
   ```
   Ändra `jest.config.js` till följande: 
   ```javascript
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
   ```
6. Lägg till för Mock Service Worker för att kunna mocka HTTP-anrop till backend i stories.
   Läs mer på [Mock Service Worker addon](https://storybook.js.org/addons/msw-storybook-addon).
   ```shell
   $ npm install -D msw-storybook-addon msw
   $ npx msw init .storybook/public/
   ```
   Lägg till följande i objektet i `.storybook/main.js`
   ```javascript
   staticDirs: [
     './public'
   ]
   ``` 



React
-----
Projektet [react-tdd](./react-tdd) är skapat enligt följande:
1. Skapa projektet: `npx create-react-app@latest react-tdd --template typescript`

