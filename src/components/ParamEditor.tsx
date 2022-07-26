import React, {FC, useState} from 'react';
import {Container, Row, Button, Form, Col} from 'react-bootstrap'
import {IParamValue, IProps} from "../types";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setParamValues} from '../store/reducers/modelSlice'

const ParamEditor: FC<IProps> = () => {
    const [paramValue, setParamValue] = useState({} as IParamValue)
    const {params, model} = useAppSelector(state => state.model)
    const dispatch = useAppDispatch()

    // return (
    //     <form>
    //         <div style={{marginTop: 20}}>
    //             {params.map(el => (
    //                 <div key={el.id} style={{display: "flex", justifyContent: "center", marginBottom: 10}}>
    //                     <div style={{marginRight: 10, display: "flex", alignItems: "start"}}>{el.name}</div>
    //                     <input
    //                         value={(model.paramValues.find(item => item.paramId === el.id) || model.paramValues[0]).value}
    //                         onChange={e => setParamValue({paramId: el.id, value: e.target.value})}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //         <button onClick={() => dispatch(setParamValues(paramValue))}>Get model</button>
    //     </form>
    // );
    return (
        <Container>
            <Row className='mt-3'>
                <Form>
                    {params.map(el => (
                        <Row className='mt-4' key={el.id}>
                            <Col md={4}>
                                <Form.Label>{el.name}</Form.Label>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={(model.paramValues.find(item => item.paramId === el.id) || model.paramValues[0]).value}
                                    //                         onChange={e => setParamValue({paramId: el.id, value: e.target.value})}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    // onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
                <Container className="d-flex justify-content-evenly mt-5 mb-3 ">
                    <Button variant='outline-success' >Добавить</Button>
                </Container>
            </Row>
        </Container>
    );
};

export default ParamEditor;

