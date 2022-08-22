import { configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () => configureStore({
    reducer: {
        quizSlice: quizSlice
    }
})

export const wrapper = createWrapper(store)