import React from 'react';
import { Tabs, Tab, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import {
  ChevronRight,
  PencilRulerIcon,
  CogIcon,
  ScissorsLineDashedIcon,
  GlassesIcon,
  FootprintsIcon,
} from 'lucide-react';

// Class
const PracticeByClass: React.FC = () => {
  const classes = [
    { icon: <PencilRulerIcon />, class: "Class I", title: "Introduction to Basic Math Skills" },
    { icon: <CogIcon />, class: "Class II", title: "Strengthen Your Skills in Addition and Subtraction" },
    { icon: <ScissorsLineDashedIcon />, class: "Class III", title: "Dive into Multiplication and Division Challenges" },
    { icon: <GlassesIcon />, class: "Class IV", title: "Advance Your Math Skills with Interactive Exercises" },
    { icon: <FootprintsIcon />, class: "Class V", title: "Prepare for Future Math Concepts with Expert Practice" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((item, index) => (
        <Card isHoverable key={index} className="bg-white shadow-lg flex-row p-0">
          <CardBody className='pr-0'>
            <div className='flex items-center justify-start gap-2 mb-2'>
              {item.icon}
              <h2 className="text-2xl font-bold mt-3">{item.class}</h2>
            </div>
            <p className="text-lg mb-4">{item.title}</p>
          </CardBody>
          <CardFooter className=' pl-0 pr-4 justify-end'>
            <Button color="primary" variant="flat" size="sm" className='flex-row gap-2'>
              View all topics
              <ChevronRight size={16} />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

// Topic
const PracticeByTopic: React.FC = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {topics.map((topic, index) => (
        <Card key={index} className="bg-white shadow-lg">
          <CardBody>
            <div className="flex items-center mb-2">
              <span className="text-3xl font-bold mr-2">{topic.icon}</span>
              <h2 className="text-xl font-bold  mt-3">{topic.title}</h2>
            </div>
            <p className="text-sm">{topic.description}</p>
          </CardBody>
          <CardFooter>
            <Button color="primary" variant="flat" size="sm">
              Practice Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

const Practice: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Find the Perfect Practice for You</h1>
      <p className="text-xl mb-8">Pick Your Class or Concentrate on Specific Topics</p>

      <Tabs aria-label="Practice Options" variant='underlined' className='pt-3'>
        <Tab key="by-class" title="Class">
          <PracticeByClass />
        </Tab>
        <Tab key="by-topic" title="Topic">
          <PracticeByTopic />
        </Tab>
      </Tabs>

      <footer className="mt-12 text-center text-sm text-gray-600">
        © 2024 Maths
      </footer>
    </div>
  );
};

export default Practice;