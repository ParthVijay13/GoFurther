import { configureStore } from "@reduxjs/toolkit";
import { myCounterReducer } from "./slices";
export  const store = configureStore({
    reducer:{
        counter:myCounterReducer
    }
})



