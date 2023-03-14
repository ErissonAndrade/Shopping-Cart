import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import carouselImages from '../data/carouselImages';
import carousel from './styles/carousel.module.css';

const ProductsCarousel = () => {
    return (
        <Carousel className={carousel.main} interval={2000}>
            {
                carouselImages.map((item, i) =>
                    <Item
                        sx={{
                            position: 'relative',
                        }}
                        key={i}
                        title={item.title}
                        image={item.image}
                    />
                )
            }
        </Carousel>
    );
};

const Item = ({ image }) => {
    return (
        <Paper
            className={carousel.main}
            elevation={0}
        >
            {image}
        </Paper>
    );
};

export default ProductsCarousel;