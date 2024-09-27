import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, CardBody, Progress, Chip } from "@nextui-org/react";
import { BookOpen, Plus, Minus, LayoutDashboardIcon, ArrowLeftRight } from "lucide-react";

const topics = [
  { 
    icon: <BookOpen className="w-6 h-6" />,
    title: "Counting & Numbers",
    progress: 10,
    completed: true,
    details: [
      "Understanding numbers up to 10",
      "Learning number sequences and basic counting"
    ]
  },
  {
    icon: <Plus className="w-6 h-6" />,
    title: "Basic Addition",
    progress: 10,
    completed: true,
    details: [
      "Simple addition problems with single digit",
      "Using objects or visual aids to add numbers"
    ]
  },
  {
    icon: <Minus className="w-6 h-6" />,
    title: "Basic Subtraction",
    progress: 10,
    completed: true,
    details: [
      "Introduction to subtraction using objects",
      "Single-digit subtraction exercises"
    ]
  },
  {
    icon: <LayoutDashboardIcon className="w-6 h-6" />,
    title: "Shapes & Patterns",
    progress: 10,
    completed: true,
    details: [
      "Identifying basic shapes (circle, square, triangle)",
      "Recognizing patterns and sequences"
    ]
  },
  {
    icon: <ArrowLeftRight className="w-6 h-6" />,
    title: "Comparing Numbers",
    progress: 0,
    completed: false,
    details: [
      "Greater than, less than, and equal to concepts",
      "Simple comparison problems"
    ]
  }
];

const ClassOne: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-4"
    >
      <h1 className="text-2xl font-bold mb-4">Class I Maths</h1>
      <h2 className="text-xl mb-6">Introduction to Basic Math Skills</h2>
      
      {topics.map((topic, index) => (
        <Card 
          key={index} 
          className="mb-4 w-full" 
          isPressable 
          onPress={() => navigate(`/Class/ClassOne/CountingAndNumbers`)}
        >
          <CardBody>
            <div className="flex items-center mb-2">
              <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                {topic.icon}
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-lg font-semibold truncate">{topic.title}</h3>
                <div className="flex items-center">
                  <Progress 
                    value={topic.progress} 
                    className="max-w-md flex-grow" 
                    color="primary"
                  />
                  <span className="ml-2 whitespace-nowrap">{topic.progress}% Completed</span>
                </div>
              </div>
              <Chip color={topic.completed ? "success" : "warning"} variant="flat" className="ml-2">
                {topic.completed ? "Completed" : "Not Started"}
              </Chip>
            </div>
            <ul className="list-disc pl-12">
              {topic.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        © 2024 Maths
      </footer>
    </motion.div>
  );
};

export default ClassOne;