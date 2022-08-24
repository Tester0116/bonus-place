import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface SearchType {
  searchValue: string
}

const initialState: SearchType = {
  searchValue: "",
}

export const searchSlice = createSlice({
    name: 'searchCoupons',
    initialState,
    reducers: {
      searchBy(state, action: PayloadAction<string>){
        state.searchValue = action.payload;
      }
    },
})

export default searchSlice.reducer;
export const {searchBy} = searchSlice.actions;