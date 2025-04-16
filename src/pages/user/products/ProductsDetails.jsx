import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/loading/Loading';
import Container from 'react-bootstrap/Container';
import styleDetailes from './productDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { Card, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function ProductsDetails() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const Details = async () => {
    try {
      const { data } = await axios.get(`https://ecommerce-node4.onrender.com/products/${productId}`);
      setProductDetails(data);
    }
    catch (error) {
      return <div className="alert alert-primary mt-3" role="alert">{error}</div>
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    Details();
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return (
    <section className='ProductDetails'>

      <Container>
        <div className={`${styleDetailes.title} rounded-4 shadow p-3 mb-5 bg-body-tertiary d-flex justify-content-center align-items-center mt-5 mb-3`}>
          <h3>{productDetails.product.name}</h3>
        </div>
        <Row>
          <Col>
            <Carousel className="w-75 mx-auto my-4 ">
              {/* صورة mainImage */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={productDetails.product.mainImage.secure_url}
                  alt="Main product"
                />
              </Carousel.Item>

              {/* صور subImages */}
              {productDetails.product.subImages?.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={img.secure_url}
                    alt={`Sub Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}

            </Carousel>
            <div className=' d-flex justify-content-center align-items-center'>
              <Button className={`${styleDetailes.button} w-50 mt-3 `} size="lg">
                Add to cart
              </Button>
            </div>

            <div className='comment'>
              {productDetails.product.reviews.length > 0 ? (
                <div className="mt-4">
                  <h5 className="mb-3">Reviews({productDetails.product.reviews.length})</h5>
                  {productDetails.product.reviews.map((review) => (
                    <div key={review._id} className="mb-3 p-3 border rounded">
                      <div className="d-flex justify-content-between">
                        <strong>{review.createdBy.userName}</strong>
                        <small className="text-muted">{new Date(review.createdAt).toLocaleDateString()}</small>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">No review</p>
              )}
            </div>
          </Col>
          <Col>
            <Card className="shadow border-0 mb-4 p-3" style={{ maxWidth: '600px' }}>
              <Card.Body>
                <Card.Title className="mb-3 text-center fw-semibold fs-4">
                  {productDetails.product.name}
                </Card.Title>

                <ListGroup variant="flush">
                  <ListGroup.Item className="fw-light">
                    <span className="fw-bold">Description: </span>
                    {productDetails.product.description}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="fw-bold">Price: </span>
                    {productDetails.product.discount > 1 ? (
                      <>

                        <span className="text-muted text-decoration-line-through me-2">
                          ${productDetails.product.price}
                        </span>
                        <span className="text-success fw-semibold">
                          ${productDetails.product.finalPrice}
                        </span>
                        <span className="text-danger ms-2 fw-bold">
                          (-{productDetails.product.discount}%)
                        </span>
                      </>
                    ) : (
                      <span className="fw-semibold">
                        ${productDetails.product.price}
                      </span>
                    )}

                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="fw-bold">Rating: </span>
                    {productDetails.product.avgRating || 'N/A'}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  )
}
