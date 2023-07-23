import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./albumsSlice";

const store = configureStore({
    reducer:{
        albums: albumsSlice
    },
});

export default store;