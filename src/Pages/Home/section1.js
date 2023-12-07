import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../Assets/hero/hero-2.png"
import { Link } from 'react-router-dom'
import "../../Styles/HomeStyle.css"

const Section1 = () => {
    return (
        <section className='hero-section'>
            <Container>
                <Row>
                    <Col lg={7} className='mb-5 mb-lg-0'>
                        <div className='position-relative'>
                            <img src={Burger} className='img-fluid' alt='Hero' />
                            <div className='price-badge'>
                                <div className='badge-text'>
                                    <h4 className='h4-xs'>ONLY</h4>
                                    <h4 className='h3-lg'>$6.99</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='hero-text text-center'>
                            <h1 className='text-white'>New Burger</h1>
                            <h2 className='text-white'>With Onion</h2>
                            <p className='text-white pt-2 pb-4'>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                viverra tortor in iaculis pretium at magna mauris ipsum primis
                                rhoncus feugiat</p>
                            <Link to="/" className="btn order-now">
                                Order Now
                            </Link >
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Section1