import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ParamEditor from "./components/ParamEditor";
import {useAppSelector} from "./hooks/redux";


const App = () => {
    const {params, model} = useAppSelector(state => state.model)
    return (
        <div>
            <ParamEditor params={params} model={model} />
        </div>
    );
}

export default App;
