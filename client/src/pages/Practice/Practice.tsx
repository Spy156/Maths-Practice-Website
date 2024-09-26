import React from 'react';
import { motion } from "framer-motion";
import { Tabs, Tab, Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  PencilRuler,
  Cog,
  ScissorsLineDashed,
  Glasses,
  Footprints,
} from 'lucide-react';

interface ClassItem {
  icon: React.ReactNode;
  class: string;
  title: string;
  path: string;
}

interface TopicItem {
  icon: string;
  title: string;
  description: string;
  path: string;
}

// Class
const PracticeByClass: React.FC = () => {
  const navigate = useNavigate();

  const classes: ClassItem[] = [
    { icon: <PencilRuler className="w-6 h-6" />, class: "Class I", title: "Introduction to Basic Math Skills", path: "/Class/ClassOne" },
    { icon: <Cog className="w-6 h-6" />, class: "Class II", title: "Strengthen Your Skills in Addition and Subtraction", path: "/Class/ClassTwo" },
    { icon: <ScissorsLineDashed className="w-6 h-6" />, class: "Class III", title: "Dive into Multiplication and Division Challenges", path: "/Class/ClassThree" },
    { icon: <Glasses className="w-6 h-6" />, class: "Class IV", title: "Advance Your Math Skills with Interactive Exercises", path: "/Class/ClassFour" },
    { icon: <Footprints className="w-6 h-6" />, class: "Class V", title: "Prepare for Future Math Concepts with Expert Practice", path: "/Class/ClassFive" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {classes.map((item, index) => (
        <Card key={index} isHoverable className="bg-white shadow-lg">
          <CardBody className="p-4">
            <div className='flex items-center gap-2 mb-2'>
              {item.icon}
              <h2 className="text-2xl font-bold pt-2">{item.class}</h2>
            </div>
            <p className="text-lg mb-4">{item.title}</p>
          </CardBody>
          <CardFooter className="justify-end px-4 py-1 pb-2">
            <Button
              color="primary"
              variant="flat"
              size="sm"
              onPress={() => handleNavigation(item.path)}
              className="flex items-center gap-2"
            >
              View all topics
              <ChevronRight size={16} />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  );
};

// Topic
const PracticeByTopic: React.FC = () => {
  const navigate = useNavigate();

  const topics: TopicItem[] = [
    { icon: "+", title: "Addition", description: "Build a Strong Foundation – Add with Confidence!", path: "/Topic/Addition" },
    { icon: "-", title: "Subtraction", description: "Master the Art of Taking Away!", path: "/Topic/Subtraction" },
    { icon: "×", title: "Multiplication", description: "Multiply Your Math Skills – One Step at a Time!", path: "/Topic/Multiplication" },
    { icon: "÷", title: "Division", description: "Divide and Conquer – Break Down Big Problems!", path: "/Topic/Divison" },
    { icon: "²√", title: "Square Roots", description: "Uncover the Secrets of Square Roots!", path: "/Topic/SquareRoots" },
    { icon: "³√", title: "Cube Roots", description: "Go Deeper – Explore Cube Roots with Ease!", path: "/Topic/CubeRoots" },
    { icon: "²", title: "Squaring", description: "Learn How to Square Numbers Like a Pro!", path: "/Topic/Squaring" },
    { icon: "³", title: "Cubing", description: "Take Math to the Next Level – Master Cubing!", path: "/Topic/Cubing" },
  ];

  const handlePractice = (path: string) => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {topics.map((topic, index) => (
        <Card key={index} isHoverable className="bg-white shadow-lg">
          <CardBody>
            <div className="flex items-center mb-2">
              <span className="text-3xl font-bold mr-2">{topic.icon}</span>
              <h2 className="text-xl font-bold mt-3">{topic.title}</h2>
            </div>
            <p className="text-sm">{topic.description}</p>
          </CardBody>
          <CardFooter>
            <Button
              color="primary"
              variant="flat"
              size="sm"
              onPress={() => handlePractice(topic.path)}
            >
              Practice Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  );
};

const Practice: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
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
    </motion.div>
  );
};

export default Practice;