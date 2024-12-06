import React from "react";
import { Link } from "react-router-dom";
const Card = ({ image, title, price }) => {
  return (
    <div className="bg-black text-white  shadow-lg  flex flex-col">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-2xl   ">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />
        {/* Save Button */}
        <button className="absolute top-2 right-2 bg-black/80 text-white text-xs px-3 py-1 rounded-md hover:bg-red-500 transition">
          Save
        </button>
      </div>

      {/* Title Section */}
      <div className="bg-white rounded-b-2xl">
      <div className="p-4 bg-black/80">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
      </div>

      {/* Price Strip */}
     
      <div className="flex justify-between items-center p-4 bg-black/80 border-t">
        <span className="text-lg font-semibold">${price}</span>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
          View
        </button>
      </div>
      </div>
    </div>
  );
};

const CardLayout = () => {
  // Sample card data
  const cards = [
    {
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240106/pngtree-coloful-nature-beautiful-scenery-image_15576031.jpg",
      title: "Rishikesh Adventure Park",
      price: "120",
    },
    {
      image: "https://www.adventurush.com/wp-content/uploads/2022/08/450by310-2.jpg",
      title: "Kumbhalgarh Adventure Park",
      price: "150",
    },
    {
      image: "https://tripxl.com/blog/wp-content/uploads/2024/10/How-To-Reach-1.jpg",
      title: "Pushkar Adventure Park",
      price: "180",
    },
    {
      image: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1712404894/bbj/kh32i6ozp6pbdinkaosr.webp",
      title: "Paintball in Jaipur",
      price: "200",
    },
    {
      image: "https://www.adventurush.com/wp-content/uploads/2023/09/Jeep-safari-2.jpg",
      title: "Off Road Jeep Safari in Jaipur",
      price: "250",
    },
  ];

  return (
    <div className="p-6  min-h-screen">
     
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
    <Link to="/adventure1"><Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
          /></Link>      
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
