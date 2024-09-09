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
    infinite: true,               // Enable infinite scrolling
    speed: 500,                   // Transition speed (in ms)
    slidesToShow: 4,              // Number of slides to show at once on large screens
    slidesToScroll: 1,            // Number of slides to scroll at once
    autoplay: true,               // Enable automatic slide change
    autoplaySpeed: 2000,          // Time between automatic slide changes (in ms)
    pauseOnHover: false,          // Don't pause on hover
    arrows: true,                 // Enable arrows
    nextArrow: <NextArrow />,     // Custom next arrow
    prevArrow: <PrevArrow />,     // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,         // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,        // Show 3 slides at a time
          slidesToScroll: 1,      // Scroll 1 slide at a time
        }
      },
      {
        breakpoint: 768,          // For screens smaller than 768px (tablet)
        settings: {
          slidesToShow: 2,        // Show 2 slides at a time
          slidesToScroll: 1,      // Scroll 1 slide at a time
        }
      },
      {
        breakpoint: 480,          // For screens smaller than 480px (mobile)
        settings: {
          slidesToShow: 1,        // Show 1 slide at a time
          slidesToScroll: 1,      // Scroll 1 slide at a time
        }
      }
    ]
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
