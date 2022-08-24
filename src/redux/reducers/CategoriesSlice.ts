import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory} from "../../models/category";


interface CategoriesState {
    categoriesList: ICategory[]
}

const initialState: CategoriesState = {
    categoriesList: [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
})

export default categoriesSlice.reducer;