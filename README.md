TDD i frontend
==============

Angular
-------

Projektet [angular-tdd](./angular-tdd) är skapat enligt följande:
1. Skapa projektet: `npx @angular/cli@latest new angular-tdd`
2. Ersätt Karma med Jest med hjälp av [Jest Angular Schematic](https://github.com/briebug/jest-schematic): `ng add @briebug/jest-schematic` (se  för mer info)
3. Lägg till [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/) med `npm install --save-dev @testing-library/angular`
   1. Lägg till Jest DOM `npm install --save-dev @testing-library/jest-dom`
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
4. Lägg till [Storybook](https://storybook.js.org/docs/angular/get-started/install): `npx storybook init`   

React
-----
Projektet [react-tdd](./react-tdd) är skapat enligt följande:
1. Skapa projektet: `npx create-react-app@latest react-tdd --template typescript`

