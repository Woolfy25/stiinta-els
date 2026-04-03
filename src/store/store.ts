import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import menuReducer from "./slices/menuSlice";
import contactReducer from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    menu: menuReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
