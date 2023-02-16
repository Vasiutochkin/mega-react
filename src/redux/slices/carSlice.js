import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car},thunkAPI)=>{
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }

)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.cars = action.payload
        }),

});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAll,
    create
};

export {
    carReducer,
    carActions
}
