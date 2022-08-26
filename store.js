import { configureStore, ThunkAction, Action, getDefaultMiddleware} from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";
import { createWrapper } from "next-redux-wrapper";
import vocabSlice from "./slices/vocabSlice";

const store = () => configureStore({
    reducer: {
        quizSlice: quizSlice,
        vocabSlice: vocabSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),

})

export const wrapper = createWrapper(store)