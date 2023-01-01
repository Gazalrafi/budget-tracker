import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { theme: "light" };
const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setTheme(state, action)
    {
        state.theme === "dark"? state.theme = 'light': state.theme = action.payload 
    }
  }
});

export const themeAction = themeSlice.actions;
export default themeSlice.reducer;
