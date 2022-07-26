export interface IParam {
    id: number
    name: string
}

export interface IParamValue {
    paramId: number
    value: string
}

export interface IColor {
    paramId: number
    value: string
}

export interface IModel {
    paramValues: IParamValue[]
    // colors: IColor[]
}

export interface IProps {
    params: IParam[]
    model: IModel
}
