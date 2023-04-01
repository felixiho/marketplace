
import CarouselItem from "./CarouselItem";
import Slider from "react-slick";


const Carousel = () => { 

    const carouselImages = [
        { id: 1, url: "url('/images/hanger.jpg')", heading: "80% off" }
        ,{ id: 2, url: "url('/images/makeup.jpg')", heading: "MoniePoint" }
    ]

    const settings = { 
        infinite: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <Slider {...settings}>
            {
                carouselImages.map(carousel => <CarouselItem key={carousel.id} image={carousel.url} heading={carousel.heading} />)
            }
        </Slider>

    );
}

export default Carousel;