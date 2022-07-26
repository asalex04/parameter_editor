import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IModel, IParam, IParamValue} from '../../types';

interface IState {
    model: IModel
    params: IParam[]
}

const initialState: IState = {
    params: [
        {
            'id': 1,
            'name': 'Назначение'
        },
        {
            'id': 2,
            'name': 'Длина'
        }
    ],

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
        getModel(state, action: PayloadAction<IModel>) {
            state.model = action.payload
        },
        setParamValues(state, action: PayloadAction<IParamValue>) {
            state.model.paramValues = [...state.model.paramValues, action.payload]
        }
    }
})

export const {getModel, setParamValues} = modelSlice.actions
export default modelSlice.reducer
