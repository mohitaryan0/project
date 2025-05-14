'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";


const challengesData = [
  {
    title: "By Invite Only",
    description: "Secure and private access"
  },
  {
    title: "Flexible Access",
    description: "Custom pricing options"
  },
  {
    title: "Shared Goals",
    description: "Collective milestones and friendly competition"
  }
];

export default function Challenges() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mt-22 font-bold mb-8 text-center">Create a Group Challenge</h1>
        
        <div className="space-y-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-green-500 text-white">
            <CardHeader className="mb-4">
              <CardTitle className="text-white">Group Challenges Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                Group Challenges are exclusive fitness journeys designed for private groups. Whether it&apos;s your family, friends, colleagues, or a special community, these challenges bring you closer while keeping you on your toes—literally!
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challengesData.map((challenge, index) => (
              <div
              key={index}
              onMouseEnter={() => setHoveredCard(challenge.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`p-6 text-white transition-all duration-300 ${
                  hoveredCard
                    ? hoveredCard === challenge.title
                      ? "bg-gradient-to-br from-blue-500 to-green-500 filter blur-0 scale-105"
                      : "bg-gradient-to-br from-blue-400 to-green-400 filter blur-sm grayscale"
                    : "bg-gradient-to-br from-blue-400 to-green-400 filter blur-0"
                }`}
              >
                <CardHeader className="mb-4">
                  <CardTitle className="text-white font-bold text-xl">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-lg">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            ))}
          </div>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-green-500 text-white">
            <CardHeader className="mb-4">
              <CardTitle className="text-white">Create Your Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-white">
              <div>
                <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Group Name (max 20 chars)*
                </label>
                <input
                  type="text"
                  id="groupName"
                  placeholder="Brigade Opus Walking Challenge"
                  maxLength={20}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Group Challenge Description*
                </label>
                <input
                  type="text"
                  id="description"
                  placeholder="Short description of the challenge"
                  maxLength={140}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="steps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Steps/Day #*
                </label>
                <input
                  type="number"
                  id="steps"
                  defaultValue={5000}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Date*
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  End Date*
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Special Code*
                </label>
                <input
                  type="text"
                  id="code"
                  placeholder="Happy2025"
                  maxLength={10}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md">
                Create Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
