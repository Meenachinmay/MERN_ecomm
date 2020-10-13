import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }

        fetchProduct()
    }, []);

    return (
        <>
        <Link to='/' className="btn btn-dark my-3">Go back</Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: ${product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col> 
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? `In Stock (${product.countInStock})` : "Out of stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            { product.countInStock === 0 ? 
                                <Button className="btn-block btn-danger" type="button">
                                    Notify me
                                </Button> :
                                <Button className="btn-block" type="button">
                                    Add to card
                                </Button> 
                            }
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ProductScreen;