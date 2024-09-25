import React from 'react';
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import Bg from '../assets/mathsbg.jpeg';

const topics = [
  { icon: "+", title: "Addition", description: "Build a Strong Foundation – Add with Confidence!" },
  { icon: "-", title: "Subtraction", description: "Master the Art of Taking Away!" },
  { icon: "×", title: "Multiplication", description: "Multiply Your Math Skills – One Step at a Time!" },
  { icon: "÷", title: "Division", description: "Divide and Conquer – Break Down Big Problems!" },
  { icon: "²√", title: "Square Roots", description: "Uncover the Secrets of Square Roots!" },
  { icon: "³√", title: "Cube Roots", description: "Go Deeper – Explore Cube Roots with Ease!" },
  { icon: "²", title: "Squaring", description: "Learn How to Square Numbers Like a Pro!" },
  { icon: "³", title: "Cubing", description: "Take Math to the Next Level – Master Cubing!" },
];

const Home: React.FC = () => {

  const divStyle: React.CSSProperties = {
    backgroundImage: `url(${Bg})`, // Adjust the path accordingly
    backgroundSize: 'cover', // Scale the image to cover the div
    backgroundPosition: 'center', // Center the image
    height: '400px', // Set a height for the div
    width: '100%', // Full width of the parent
    position: 'relative', // Set position to relative to allow absolute positioning of overlay
    overflow: 'hidden' // Prevents any overflow
  };

  return (
    <div className=" mx-auto gap-20 max-h-full max-w-full">
      <div className="text-center mb-6 p-8" style={divStyle}>
        <h1 className="text-4xl font-bold mb-4 text-white text-left">Master Maths with Fun & Ease!</h1>
        <p className="text-xl mb-6 text-white text-left">
          Interactive practice exercises designed for students in grades 1 to 5.<br />
          Learn at your own pace and build strong math skills.
        </p>
        <Button color="primary" variant="shadow" size="lg" className='flex justify-start'>Start Practicing</Button>
      </div>

      <div className='p-8'>
        <h2 className="text-3xl font-bold mb-6">Featured Topics</h2>
        <h3 className="text-2xl mb-6">Start Building Your Math Foundation!</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <Card isHoverable key={index} className="h-full p-1">
              <CardBody>
                <div className='flex flex-row gap-2 items-center'>
                  <div className="text-4xl font-bold pb-3 bg-transparent">{topic.icon}</div>
                  <p className="text-xl font-semibold mb-2">{topic.title}</p>
                </div>
                <p>{topic.description}</p>
              </CardBody>
              <CardFooter className='pt-0'>
                <Button color="primary" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-sm">© 2024 Maths</p>
      </footer>
    </div>
  );
};

export default Home;