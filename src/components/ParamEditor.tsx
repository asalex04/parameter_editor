import React, {FC, useState} from 'react';
import {Container, Row, Button, Form, Col, InputGroup} from 'react-bootstrap'
import {IParam, IProps} from "../types";
import {useAppDispatch} from "../hooks/redux";
import {setParams, setParamValues} from '../store/reducers/modelSlice'
import _ from "lodash";

const ParamEditor: FC<IProps> = ({params, model}) => {
    const [paramValue, setParamValue] = useState(model.paramValues)
    const [param, setParam] = useState<IParam[]>(params)
    const [name, setName] = useState('')
    const dispatch = useAppDispatch()

    const changeValue = (value: string, id: number) => {
        setParamValue(paramValue.map(i => i.paramId === id ? {...i, 'value': value} : i))
    }

    const addParam = (value: string) => {
        const id = +_.uniqueId()
        setParam([...param, {id: id, 'name': value}])
        setParamValue([...paramValue, {'paramId': id, 'value': ''}])
        setName('')
    }

    const removeParam = (id: number) => {
        setParam(param.filter(i => i.id !== id))
    }

    const safeForm = () => {
        dispatch(setParamValues(paramValue))
        dispatch(setParams(param))
    }

    return (
        <Container>
            <Row className='mt-3'>
                <Form>
                    {param.map(el => (
                        <Row className='mt-4' key={el.id}>
                            <Col md={4}>
                                <Form.Label>{el.name}</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={(model.paramValues.find(item => item.paramId === el.id) || model.paramValues[0]).value}
                                    onChange={e => changeValue(e.target.value, el.id,)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeParam(el.id)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
                <Container className="d-flex justify-content-evenly mt-5 mb-3 ">
                    <InputGroup className="m-2">
                        <Form.Control
                            placeholder="Введите название параметра"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button variant='outline-success' onClick={() => addParam(name)}>Добавить параметр</Button>
                    </InputGroup>
                    <Button variant='outline-primary' onClick={safeForm}>Сохранить форму</Button>
                </Container>
            </Row>
        </Container>
    );
};

export default ParamEditor;

