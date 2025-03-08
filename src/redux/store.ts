import { configureStore } from "@reduxjs/toolkit";
import amigoSecretoReducer from "./amigoSecretoSlice";
import errorReducer from "./errorSlice";
import resultadoReducer from "./resultadoSlice";



export const store = configureStore({
    reducer: {
        amigoSecreto:amigoSecretoReducer,
        error: errorReducer,
        resultado: resultadoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;