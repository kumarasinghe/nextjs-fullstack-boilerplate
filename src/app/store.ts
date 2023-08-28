import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
});

// infer types from the store
export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
