import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./slices/getInfo.slice";
import isLoading from "./slices/isLoading.slice";
import products from "./slices/products.slice";

export default configureStore({
    reducer: {
        infoSlice,
        isLoading,
        products
    }
})
