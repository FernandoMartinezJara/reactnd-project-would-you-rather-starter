# Would You Rather Project

his is the final project for Udacity's React/Redux course. The goal of this project is to demostrate all the knowledge acquired in this course. this project was developed with Rsuite library for UI.

The topics covered in this project are:

- Redux: 
    Actions, 
    Action Creators,
    Dispatch, 
    Middleware thunk,
    Reducers, 
    Connect component to state,
    map state to props
- React-Router
    Redirect,
    Route,
    Switch
-Localstorage
    getItem
    setItem

## GitHub Repo

User | Link
------------ | -------------
FernandoMartinezJara | <https://github.com/FernandoMartinezJara/reactnd-project-would-you-rather-starter>

## Install and Start

To get started developing right away:

- clone github repo mentioned above
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Application`s Files

```bash
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
│   ├── assets # Helpful user images for your app.
└── src
    ├── actions # actions and actions creators for redux
    │   ├── authedUser.js
    │   ├── question.js
    │   └── questionFilter.js
    │   └── shared.js
    │   └── users.js
    ├── components # Components for aplication
    │   ├── app.js
    │   ├── App.js
    │   └── Dashboard.js
    │   └── Leader.js
    │   └── LeaderBoard.js
    │   └── Login.js
    │   └── Logout.js
    │   └── NavMenu.js
    │   └── NewQuestion.js
    │   └── NotFoundPage.js
    │   └── PrivateRoute.js
    │   └── Question.js
    │   └── Questions.js
    │   └── Results.js
    │   └── Routes.js
    ├── icons # icons for application
    │   ├── logo.svg
    │   ├── notFound.png
    ├── middleware # middleware, thunk for redux
    │   ├── index.js
    ├── reducers # reducers, for redux
    │   ├── authedUser.js
    │   ├── index.js
    │   ├── question.js
    │   ├── questionFilter.js
    │   ├── users.js
    ├── utils # data component, api access data
    │   ├── _DATA.js
    │   ├── api.js
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── .gitignore.js # git ignore file
    ├── CONTRIBUTING.md
    ├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
    └── README.md
```
