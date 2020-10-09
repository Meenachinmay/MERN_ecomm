import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product.image}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

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