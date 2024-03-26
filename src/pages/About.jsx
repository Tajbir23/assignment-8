// AboutUsSection.js

import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <img src="https://static.toiimg.com/photo/105046079.cms" alt="Team" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">Welcome to Our World</h2>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                            At Awesome Co., we're not just a team – we're a family. We believe in pushing the boundaries of creativity, innovation, and collaboration to deliver exceptional results for our clients. Our journey began with a shared passion for creating meaningful experiences and making a positive impact in the digital world.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                            Our diverse team brings together individuals from various backgrounds, each contributing a unique perspective and skill set to the table. From designers to developers, strategists to storytellers, we thrive on diversity and inclusion, fostering an environment where everyone's voice is heard and valued.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                            Beyond our professional endeavors, we're united by our core values of integrity, empathy, and excellence. We strive to create a workplace culture that promotes growth, learning, and wellbeing, ensuring that every member of our team feels inspired and empowered to reach their full potential.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                            Our commitment to our clients goes beyond business – it's personal. We're dedicated to building long-lasting partnerships based on trust, transparency, and mutual success. Whether you're a startup, a small business, or a global enterprise, we're here to help you thrive in the digital age.
                        </p>
            
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
