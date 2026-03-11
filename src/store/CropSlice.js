import { createSlice } from "@reduxjs/toolkit";
 
 
const CropSlice = createSlice({
  name: "crop",
  initialState: {
    data: true,
  

  },
  reducers: {
    addItem: (state) => {
      state.data = !state.data;
    },
    
  },
});

export const { addItem, } = CropSlice.actions;
export default CropSlice.reducer;
 
 