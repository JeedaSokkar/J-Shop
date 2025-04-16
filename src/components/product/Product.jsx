import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styleProd from "./product.module.css";
import { Link } from 'react-router-dom';
//عشان بدي استخدمو عند عرض اي منتجات
export default function Product({ item }) {
  return (
    
      <Card
        className={`${styleProd.card} shadow p-3 w-100 mb-5  d-flex flex-column`}
        style={{ height: "680px" }}
      >
        <Card.Img
          className={`${styleProd.image} d-flex flex-column justify-content-between `}
          style={{ objectFit: "cover" }}
          variant="top"
          src={item.mainImage.secure_url}
          alt={item.name}

        />
        <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
          <Card.Title className={`${styleProd.title} mb-4`}>{item.name}</Card.Title>
          <Link to={`/product/${item._id}`}>
          <div className={`${styleProd.Details} `}>
            <Button className={`${styleProd.button} `}>See Details</Button>
          </div>
          </Link>
        </Card.Body>
      </Card>
 
  );
}
