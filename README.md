# Taski

## Run Taski locally

First, install dependencies locally:

```bash
npm install
```

Then run the server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Unit Test

Cypress was used for the unit test. To run the unit test use the test command 

```bash
npm run cypress:open
```
It will then open a prompt, follow the prompt
- Choose component testing
- Choose a browser and click on the button "Start Component Testing in (browser selected e.g chrome)"
- Select any of the components to run test in the browser.