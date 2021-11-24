import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface ColorsState {
    primaryColor: string,
    secondaryColor: string,
    textColor: string,
    setSecondaryColor: () => void,
    setPrimaryColor: () => void,
    setTextColor: () => void,
}

const initialState: ColorsState = {
    primaryColor: 'white',
    secondaryColor: 'lightblue',
    textColor: 'black',
    setSecondaryColor: () => {},
    setPrimaryColor: () => {},
    setTextColor: () => {},
} as ColorsState;


export const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        setPrimaryColor: (state, { payload }: PayloadAction<string>) => {
            state.primaryColor = payload;
        },
        setSecondaryColor: (state, { payload }: PayloadAction<string>) => {
            state.secondaryColor = payload;
        },
        setTextColor: (state, { payload }: PayloadAction<string>) => {
            state.textColor = payload;
        },
    },
});

export const { setPrimaryColor, setSecondaryColor, setTextColor } = colorsSlice.actions;

// can export just like this as simple accessor
export const primaryColor = (state: RootState) => state.colors.primaryColor;

export default colorsSlice.reducer;
