import { configureStore, ThunkAction, Action, getDefaultMiddleware} from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () => configureStore({
    reducer: {
        quizSlice: quizSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),

})

export const wrapper = createWrapper(store)