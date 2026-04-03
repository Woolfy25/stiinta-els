import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
  isOpenMenu: boolean;
};

const initialState: MenuState = {
  isOpenMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpenMenu = true;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
