## DEMO

[DEMO](https://gamanza.vercel.app/)

## Run in dev mode

* Create `.env` file in the root folder of the project. You can use `.env.example` as a template. Fill in your credentials.
* Run `yarn dev`


## Stack

React, Redux + redux-saga, TypeScript

### Redux-saga

We discussed you are using redux-saga, so I used it too. Redux-saga is a good library for handling side effects.

It's worth noting it's deprecated as of now. There are some other options like `redux-thunk` to use if we are talking about a new project.

## Application state

Since we want advanced natigation with history, all states regarding page, page size and filters are stored in url. Meenwhile, the data to display the movie list and dropdowns is stored in redux store.
According to the documentation, they do not recommend to sync redux store with url, so I did not do that.

Fetching data for single movie is implemented in a custom hook. This data is not to be used in other parts of the application so no reason we store or handle it via redux.

## Pagination

I used Material UI `TablePagination` component as it show in the requirements. API is provide as with backend pagination without exactly number of items available.
So I skipped the requirement to "show the number of pages", some additional clarifications are required to implement it.
