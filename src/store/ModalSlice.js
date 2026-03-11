import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  children: null,
  successBtnText: "Confirm",
  cancelBtnText: "Cancel",
  onConfirm: null,
  onCancel: null,
  width: "w-[400px]",
  customClassName: "",
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title || "";
      state.children = action.payload.children || null;
      state.successBtnText = action.payload.successBtnText || "Confirm";
      state.cancelBtnText = action.payload.cancelBtnText || "Cancel";
      state.onConfirm = action.payload.onConfirm || null;
      state.onCancel = action.payload.onCancel || null;
      state.width = action.payload.width || "w-[400px]";
      state.customClassName = action.payload.customClassName || "";
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.children = null;
      state.onConfirm = null;
      state.onCancel = null;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
