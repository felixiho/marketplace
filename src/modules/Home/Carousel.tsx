
import CarouselItem from "./CarouselItem";
import Slider from "react-slick";
import { useState } from "react";


const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const carouselImages = [
        { id: 1, url: "url('/images/hanger.jpg')", heading: "80% off" }
        , { id: 2, url: "url('/images/makeup.jpg')", heading: "MoniePoint" }
    ]

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 4000,
        cssEase: "ease-out",
        beforeChange: (oldIndex: number, newIndex: number) => { 
            setCurrent(newIndex)
        }
    }



    return (
        <Slider {...settings} >
            {
                carouselImages.map(carousel => <CarouselItem current={current + 1} id={carousel.id} key={carousel.id} image={carousel.url} heading={carousel.heading} />)
            }
        </Slider>

    );
}

export default Carousel;