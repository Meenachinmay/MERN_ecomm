import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            {/* <Link to={`/products/${product.image}`}>
                <Card.Img src={product.image} variant='top' />
            </Link> */}
            <Card.Img src={product.image} variant='top' />
            <Card.Body>
                <Link to={`/products/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div style={{ display: 'flex' }}>
                        <Rating 
                            value={product.rating}
                            text={`${product.numReviews}`}
                        />
                        <span className="pl-1" style={{ fontSize: '15px', fontWeight: 'bold'}}>reviews</span>
                    </div>
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;