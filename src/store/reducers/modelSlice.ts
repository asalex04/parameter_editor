import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IModel, IParam, IParamValue} from '../../types';

interface IState {
    model: IModel
    params: IParam[]
}

const initialState: IState = {
    params: [],

    model: {
        paramValues: [
            {} as IParamValue
        ]
    }
}

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        setParamValues(state, action: PayloadAction<IParamValue[]>) {
            state.model.paramValues = action.payload
        },
        setParams(state, action: PayloadAction<IParam[]>) {
            state.params = action.payload
        }
    }
})

export const {setParamValues, setParams} = modelSlice.actions
export default modelSlice.reducer
