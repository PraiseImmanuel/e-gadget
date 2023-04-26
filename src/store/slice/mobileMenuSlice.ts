import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
    isMenuClosed: boolean;
}

const initialState: ToggleState = {
    isMenuClosed: true,
};

export const mobileMenuSlice = createSlice({
    name: "toggleMobileMenu",

    initialState,
    reducers: {
        openMenu: (state) => {
            state.isMenuClosed = false;
        },
        closeMenu: (state) => {
            state.isMenuClosed = true;
        },
    },
});

export const { openMenu, closeMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
