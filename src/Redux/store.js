import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducers } from "./github/github.slice";

export const store = configureStore({
    reducer: {
        [gitHubApi.reducerPath]: gitHubApi.reducer,
        gitHub: githubReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gitHubApi.middleware),
    devTools: true,
});

setupListeners(store.dispatch);
