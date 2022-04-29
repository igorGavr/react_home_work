import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: null
}
const getAllAsync = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    }
);

const deleteByIdAsync = createAsyncThunk(
    'deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCarById({id}))
        }catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const updateByIdAsync = createAsyncThunk(
    'updateByIdAsync',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
            dispatch(updateCarById({id, car}))
        }catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);
const createAsync = createAsyncThunk(
    'create',
    async ({car}, {getState ,dispatch,rejectWithValue}) => {
        try {
            const store = getState();
            console.log(store)
            const {data} = await carService.create(car)
            // return data - 3 тут видаляємо
            // 4 викликаємо dispatch та передаємо в нього Екшн create , взятий з reducers
            dispatch(create({car: data}))
        }catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: { // 2 тут прописуємо create
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car}
            state.carForUpdate = false
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(getAllAsync.pending, ((state, action) => {
                state.status = 'loading'
            }))
            .addCase(getAllAsync.fulfilled, (state, action) => {
                state.status = 'completed'
                state.cars = action.payload
                console.log(action.type);
            })
            .addCase(getAllAsync.rejected, ((state, action) => {
                state.status = 'rejected'
            }))

            .addCase(createAsync.fulfilled, (state, action) => {
                console.log('completed');
                console.log(action.type);
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status
                state.formErrors = formErrors
                console.log(action.type);
            })
    })
    // extraReducers: {
    //     [getAllAsync.pending]: (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [getAllAsync.fulfilled]: (state, action) => {
    //         state.status = 'completed'
    //         state.cars = action.payload
    //     },
    //     [getAllAsync.rejected]: (state, action) => {
    //         state.status = 'rejected'
    //     },
    //
    //     [createAsync.fulfilled]:(state, action) => {
    //         // state.cars.push(action.payload) - 1 це видаляємо
    //         console.log('completed')
    //     },
    //     [createAsync.rejected]:(state, action) => {
    //         const {status, formErrors} = action.payload
    //         console.log(action.payload)
    //         state.status = status
    //         state.formErrors = formErrors
    //     }
    // }
});

const {reducer: carReducer, actions:
    {create, deleteCarById, setCarForUpdate, updateCarById}} = carSlice

const carActions = {
    getAllAsync,
    createAsync,
    deleteByIdAsync,
    updateByIdAsync,
    setCarForUpdate
}
export {
    carReducer,
    carActions
}