import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const carouselRef = useRef(null);

  const items = [
    { id: 1, image: 'https://png.pngtree.com/png-vector/20240602/ourmid/pngtree-a-man-riding-motorcycle-png-image_12589939.png', title: 'Breakfast Rides' ,link: "/breakfastrides" },
    { id: 2, image: 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-motorcycle-rider-png-image_6996935.png', title: 'Events', link: "/events" },
    { id: 3, image: 'https://static.vecteezy.com/system/resources/previews/038/265/276/non_2x/ai-generated-sport-motorcycle-rider-in-cartoon-style-on-transparent-background-free-png.png', title: 'Expeditions' ,link:"/expeditions" },
    { id: 4, image: 'https://static.vecteezy.com/system/resources/previews/016/731/482/non_2x/gold-rider-motorcycle-free-png.png', title : "workshops" , link : "/workshops" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 300, // Adjust scroll distance based on card width
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex flex-wrap gap-4 justify-center"  // Adjusts layout for small screens
        ref={carouselRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-none w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5" // Full width for small screens, 50% on medium, 25% on large, 20% on extra large
          >
            <Link to={item.link}>
              <div className="bg-white rounded-2xl border border-black overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center bg-black/80 text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
