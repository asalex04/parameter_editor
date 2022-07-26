import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modelReducer from "./reducers/modelSlice";


export const store = configureStore({
    reducer: {
        model: modelReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
