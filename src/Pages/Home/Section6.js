import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../Assets/blog/review-author-1.jpg'
import User2 from '../../Assets/blog/review-author-2.jpg'
import User3 from '../../Assets/blog/review-author-3.jpg'
import User4 from '../../Assets/blog/review-author-4.jpg'

const Section6 = () => {
    return (
        <section className='blog-section'>
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user-img'>
                                    <img src={User1} className='img-fluid ' alt='User-1' />
                                </div>
                                <p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                <div className='item-rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-half'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user-img'>
                                    <img src={User2} className='img-fluid ' alt='User-2' />
                                </div>
                                <p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                <div className='item-rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user-img'>
                                    <img src={User3} className='img-fluid ' alt='User-3' />
                                </div>
                                <p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                <div className='item-rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-half'></i>
                                    <i className='bi bi-star'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user-img'>
                                    <img src={User4} className='img-fluid ' alt='User-4' />
                                </div>
                                <p>" Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                <div className='item-rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section6