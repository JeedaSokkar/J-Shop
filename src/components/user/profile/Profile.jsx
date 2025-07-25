import React from 'react'
import CustomSidebar from '../sidebar/CustomSidebar'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

export default function Profile() {
  
  return (
    <>
    <Container fluid >
      <Row>
        <Col md={3} className='p-0'> <CustomSidebar/></Col>
        <Col> <Outlet/></Col>

      </Row>
        </Container>

 </>
  )
}
