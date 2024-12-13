import React, { useState, useEffect } from "react";
import image from "../Assets/Images/2.png"
import helmet from "../Assets/Icons/helmet.png"
import tyre from "../Assets/Icons/tyre.png"
import workshop from "../Assets/Icons/team.png"
import speedometer from "../Assets/Icons/speedometer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingEvent = () => {

    
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: false,    // Animation triggers every time the element enters the viewport
        offset: 200,    // Offset distance in pixels (increase this for higher delay)
    });
      

    // Set the countdown target date
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const [timeLeft, setTimeLeft] = useState({
        DAYS: 0,
        HOUR: 0,
        MINUTES: 0,
        SECONDS: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    MINUTES: Math.floor((difference / (1000 * 60)) % 60),
                    SECONDS: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const events = [
        { icon: helmet, number: '185', title: 'MEMBERS' },
        { icon: tyre, number: '468', title: 'CLUB RIDERS' },
        { icon: workshop, number: '1,561', title: 'REPAIRS IN WORKSHOPS' },
        { icon: speedometer, number: '219,561', title: 'TOTAL KMS BY THE CLUB' },
    ];

    return (
        <>
            <div className="w-full bg-black text-white flex flex-col lg:flex-row items-center content-center lg:items-start lg:justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 max-h-[60vh]">
                {/* Left Section */}
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-3xl font-bold" data-aos="fade-up">UPCOMING EVENT</h1>
                    <p className="text-sm lg:text-sm text-yellow-400" data-aos="fade-down">HIMALAYAS, DEC-17-18-2019</p>
                </div>

                {/* Countdown Timer */}
                <div className="flex justify-center space-x-4 p-4 rounded-md" data-aos="fade-right">
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <div key={label} className=" bg-gray-950 rounded-lg p-2">
                            <div className="flex flex-col items-center bg-black/90 px-2 py-2">
                                <span className="text-2xl lg:text-4xl font-bold">{value}</span>
                                <span className="text-sm lg:text-base w-full text-yellow-400">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Section */}
                <div className="bg-white p-6 lg:p-10 w-full lg:w-auto rounded-md">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 " data-aos="fade-left">
                        <iframe
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/FKVLsoKGV6w?si=sPNwE87BxMJQYsjI&autoplay=1&controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <div className="pl-4 lg:pl-10" data-aos="fade-left">
                            <h1 className="text-2xl font-bold text-black">WATCH US IN ACTION</h1>
                            <p className="text-lg text-yellow-400 font-bold">MORE PHOTOS & VIDEOS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto bg-black/95 bg-cover bg-center bg-opacity-15 flex items-center justify-center py-12 mt-28 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-black/80 text-white"
                        >
                            <div className="text-4xl mb-4" data-aos="fade-down">
                                <img src={event.icon} alt="" className="w-12" />
                            </div>
                            <div className="text-4xl font-bold mb-4 text-yellow-500" >{event.number}</div>
                            <div className="w-full h-1 bg-yellow-400 mb-4"></div>
                            <div className="text-md font-medium" data-aos="fade-up">{event.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UpcomingEvent;
