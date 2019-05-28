
import React, { Component } from "react"
import Select from 'react-select';
import { Card, Row, Col, CardBody, FormGroup, Form } from "reactstrap"

const employeeNames = [
    { label: "John Rahul", value: 1 },
    { label: "David Warner", value: 2 },
    { label: "Marina Augustine", value: 3 },
    { label: "Narayan Garner", value: 4 },
    { label: "Megan Smith", value: 5 },
    { label: "Anita Gros", value: 6 },
];

class App extends Component {
    render() {
        return (
            <div style={{ margin: "20px" }}>
                <center>
                    <Row >
                        <Col style={{ fontWeight: 'bold', fontSize: '15px' }}>
                            <Card >
                                <CardBody>
                                    <Form className="form-horizontal" autoComplete="off">
                                        <Row >
                                            <Col  >
                                                <h1 style={{ fontSize: "20px", color: "black" }}>MultiSelect Task</h1>
                                                <FormGroup style={{ color: "black" }}>
                                                    <Select options={employeeNames} placeholder="Please select...."
                                                        isMulti />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </center>
            </div>
        )
    }
}
export default App;