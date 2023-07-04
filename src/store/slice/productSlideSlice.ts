import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITranslateValue {
    translateValue: string;
}

const initialState: ITranslateValue = {
    translateValue: "0px",
};

export const productSlideSlice = createSlice({
    name: "moveSlide",

    initialState,
    reducers: {
        setTranslateValue: (state, action: PayloadAction<string>) => {
            state.translateValue = action.payload;
        },
    },
});

export const { setTranslateValue } = productSlideSlice.actions;
export default productSlideSlice.reducer;
