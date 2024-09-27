import React from 'react';
import { motion } from "framer-motion";
import { Card, CardBody, Progress, Chip } from "@nextui-org/react";
import { PlusSquare, MinusSquare, Grid, Clock, Coins } from "lucide-react";

const topics = [
  { 
    icon: <PlusSquare className="w-6 h-6" />,
    title: "Advanced Addition",
    progress: 10,
    completed: true,
    details: [
      "Adding two-digit numbers",
      "Introduction to carrying over in addition"
    ]
  },
  {
    icon: <MinusSquare className="w-6 h-6" />,
    title: "Advanced Subtraction",
    progress: 10,
    completed: true,
    details: [
      "Subtracting two-digit numbers",
      "Introduction to borrowing in subtraction"
    ]
  },
  {
    icon: <Grid className="w-6 h-6" />,
    title: "Place Value",
    progress: 10,
    completed: true,
    details: [
      "Understanding tens and ones",
      "Breaking down numbers by place value"
    ]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Introduction to Time",
    progress: 10,
    completed: true,
    details: [
      "Reading clocks (hours and half-hours)",
      "Basic understanding of time (AM/PM)"
    ]
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Money & Counting Coins",
    progress: 0,
    completed: false,
    details: [
      "Identifying different coins and notes",
      "Simple addition and subtraction with money"
    ]
  }
];

const ClassIIMathsProgress: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-4"
    >
      <h1 className="text-2xl font-bold mb-4">Class II Maths</h1>
      <h2 className="text-xl mb-6">Strengthen Your Skills in Addition and Subtraction</h2>
      
      {topics.map((topic, index) => (
        <Card key={index} className="mb-4">
          <CardBody>
            <div className="flex items-center mb-2">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                {topic.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{topic.title}</h3>
                <div className="flex items-center">
                  <Progress 
                    value={topic.progress} 
                    className="max-w-md" 
                    color="primary"
                  />
                  <span className="ml-2">{topic.progress}% Completed</span>
                </div>
              </div>
              <Chip color={topic.completed ? "success" : "warning"} variant="flat">
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

export default ClassIIMathsProgress;