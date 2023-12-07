import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image1 from '../../Assets/menu/burger-11.jpg';
import Image2 from '../../Assets/menu/burger-12.jpg';
import Image3 from '../../Assets/menu/burger-13.jpg';
import Image4 from '../../Assets/menu/burger-14.jpg';
import Image5 from '../../Assets/menu/burger-15.jpg';
import Image6 from '../../Assets/menu/burger-16.jpg';
import Image7 from '../../Assets/menu/burger-17.jpg';
import Image8 from '../../Assets/menu/burger-18.jpg';
import Cards from '../../Components/Layouts/Cards';
import { Link } from 'react-router-dom';

// Mock Data Cards
const mockData = [
    {
        id: "0001",
        image: Image1,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,
    },
    {
        id: "0002",
        image: Image2,
        title: "Ultimate Bacon",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 4.5,
        price: 99.32,
    },
    {
        id: "0003",
        image: Image3,
        title: "Black Sheep",
        paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
        rating: 4,
        price: 69.15,
    },
    {
        id: "0004",
        image: Image4,
        title: "Vegan Burger",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 3.5,
        price: 99.25,
    },
    {
        id: "0005",
        image: Image5,
        title: "Double Burger",
        paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
        rating: 4.0,
        price: 59.25,
    },
    {
        id: "0006",
        image: Image6,
        title: "Turkey Burger",
        paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 3.5,
        price: 79.18,
    },
    {
        id: "0007",
        image: Image7,
        title: "Smokey House",
        paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 2.8,
        price: 99.19,
    },
    {
        id: "0008",
        image: Image8,
        title: "Classic Burger",
        paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
        rating: 3.0,
        price: 89.12,
    },
    // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (rating > 0.5) {
            stars.push(<i key={i} class="bi bi-star-fill"></i>);
            rating--;
        } else if (rating > 0 && rating < 1) {
            stars.push(<i key={"half"} class="bi bi-star-half"></i>);
            rating--;
        } else {
            stars.push(<i key={`empty&{i}`} class="bi bi-star"></i>);
        }
    }
    return stars;
}

const Section3 = () => {
    return (
        <>
            <section className='menu-section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
                            <h2>OUR CRAZY BURGER</h2>
                            <p className='para'>laoreet purus ipsum tempor enim ipsum porta justo integer ultrice aligula lectus aenean magna and pulvinar purus</p>
                        </Col>
                    </Row>
                    <Row>
                        {mockData.map((cardData, index) => (
                            <Cards
                                key={index}
                                image={cardData.image}
                                rating={cardData.rating}
                                title={cardData.title}
                                paragraph={cardData.paragraph}
                                price={cardData.price}
                                renderRatingIcons={renderRatingIcons}
                            />
                        ))}
                    </Row>

                    <Row className='pt-5'>
                        <Col sm={6} lg={5}>
                            <div className='ads-box ads-img1 mb-5 mb-md-0 text-end'>
                                <h4 className='mb-0'>GET YOUR FREE</h4>
                                <h5>CHEEZE FRIES</h5>
                                <Link to='/' className='btn btn-red px-4 rounded-0'>Learn More</Link>
                            </div>
                        </Col>
                        <Col sm={6} lg={7}>
                            <div className='ads-box ads-img2 text-end'>
                                <h4 className='mb-0'>GET YOUR FREE</h4>
                                <h5>CHEEZE FRIES</h5>
                                <Link to='/' className='btn btn-red px-4 rounded-0'>Learn More</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section3