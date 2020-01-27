This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To get it to work

* You need a Fauna database key put into ***/src/_config/config.ts*** which is not includeded.
* Rename [src/_config/config.sample.ts](./src/_config/config.sample.ts) and insert your own key.
* For how to get a FaunaDB key refer to the article this repo is based on:

#### [Let’s Build a Note-Taking App With React and FaunaDB](https://medium.com/better-programming/lets-build-a-note-taking-app-with-react-and-faunadb-a2a1d5e78359) by Indrek Lasn
---
I originally started with Typescript.
When it got too complicated with types I switched to jsx. I have done so in:
* [src/pages/App.jsx](./src/pages/App.jsx)
* [src/components/NodeForm.jsx](./src/components/NoteForm.jsx)
* [src/components/NoteList.jsx](./src/components/NoteList.jsx)

### Todo
* The **toast** in *NodeForm* and *NiteList* do not work.
* Make the whole project complete ***TypeScript***.
* Build a prduktion version and set it online.