import React, {Component} from 'react'
import {Col, Row, Container, Form, FormControl, ListGroup} from 'react-bootstrap'

import {HeaderLogo, PriceStyle} from './Home.style'

class Home extends Component {
    state = {
        query: '',
        results: [],
        loading: false,
        message: ''
    };
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if(!query){
            this.setState({ loading: false, message: ''  } );
        }else{
            this.setState({ query, loading: true, message: ''  }, ()=>{
                this.fetchSearchResult(this.state.query)
            })
        }
    }

    fetchSearchResult = (query) => {
        let url = process.env.REACT_APP_STOCK_SEARCH+`?name=${query}`
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    loading: false,
                    results: result
                });
            }
        )
    }

    renderSearchResult = () => {
        const {results} = this.state
            return(
                <ListGroup >
                    {
                        results.map( details => {
                            return(
                                <ListGroup.Item key={details.id}>
                                    <div className={"d-flex flex-row align-items-center"}>
                                        <div className={"d-flex flex-column"}>
                                            <div>
                                                <span className={"mr-3"}>{details.No}</span><strong>{details.Name}</strong>
                                            </div>
                                            <small>
                                                <span className={"mr-3"}>Capacity: {details.Capacity}</span>
                                                <span className={"mr-3"}>Available: {details.Quantity}</span>
                                            </small>
                                        </div>
                                        <div className={"d-flex ml-auto"}>
                                            <div className={"ml-auto"}>
                                                <PriceStyle>₹ {details.Price}</PriceStyle>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            )
    }

    render(){
        // const { query, loading, message, currentPageNo, totalPages } = this.state;

        return(
            <Container fluid>
                <Row>
                    <Col className="mx-auto">
                        <HeaderLogo className={"text-center"}>Rayhan</HeaderLogo>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className={"mx-auto mt-5"}>
                        <Form>
                            <FormControl placeholder="Enter Product Name" aria-label="Enter Product Name" aria-describedby="basic-addon2"
                            onChange={this.handleOnInputChange}
                            />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className={"mx-auto mt-3"}>
                        {/* <ListItems data={""}/> */}
                        {this.renderSearchResult()}
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default Home