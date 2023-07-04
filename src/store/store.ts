import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { mobileMenuSlice } from "./slice/mobileMenuSlice";
import { productSlideSlice } from "./slice/productSlideSlice";

export const store = configureStore({
    reducer: {
        toggleMobileMenu: mobileMenuSlice.reducer,
        moveSlide: productSlideSlice.reducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
