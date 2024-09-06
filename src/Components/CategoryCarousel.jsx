import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="nextArrow" onClick={onClick} style={arrowStyles}>
      <button className="bg-gray-500 text-white rounded-full p-2 text-sm">{'>'}</button>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prevArrow" onClick={onClick} style={arrowStyles}>
      <button className="bg-gray-500 text-white rounded-full p-2 text-sm">{'<'}</button>
    </div>
  );
};

const arrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  cursor: 'pointer',
};

const CategoryCarousel = () => {
  const categories = [
    'Frontend Developer',
    'Backend Developer',
    'Data Science',
    'Frontend Designer',
    'Graphic Designer',
    'Software Engineer',
    'AI/ML Developer',
    'Python Developer',
  ];

  const settings = {
    dots: true,               // Show dots
    infinite: true,            // Enable infinite scrolling
    speed: 500,                // Transition speed (in ms)
    slidesToShow: 4,           // Number of slides to show at once
    slidesToScroll: 1,         // Number of slides to scroll at once
    autoplay: true,            // Enable automatic slide change
    autoplaySpeed: 2000,       // Time between automatic slide changes (in ms)
    pauseOnHover: false,       // Don't pause on hover
    arrows: true,              // Enable arrows
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', position: 'relative' }}>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-item flex justify-center items-center">
            <button>
              <div className="border border-gray-300 p-3 rounded-3xl mt-3 text-white bg-[#3f1883]">
                {category}
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
