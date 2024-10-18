import React from 'react';
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
interface ProgressCardProps {
  title: string;
  count: number;
  percentage: number; 
  color?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, count, percentage, color }) => {
  return (
    <Card className="w-[260px] h-[140px] rounded-lg shadow-lg bg-white p-10 ">
        <CardTitle className={color?`text-xl font-bold text-${color} `:`text-xl font-bold text-black`}>{title}</CardTitle>
      <CardContent >
        <div className="flex justify-between items-start">
        <div className="flex flex-col items-center justify-center">
          <span className={color?`text-2xl font-bold text-${color} `:`text-2xl font-bold text-black`}>{count}</span>
        </div>
        <div className="w-[49px] h-[49px] mr-4">
            <CircularProgressbar  value={percentage}
             text={`${percentage}%`}
             strokeWidth={5} 
             styles={{
                path: {
                  // Customize path color
                  stroke: color? color:`#000000`, // Green color
                  strokeWidth: 5,
                },
                text: {
                  // Customize text color
                  fill: color? color:`#000000`, // Green color
                  fontSize: '16px',
                  fontWeight: 'bold',
                },
                trail: {
                  // Customize trail color
                  stroke: `#d6d6d6`, // Light gray color
                  strokeWidth: 5,
                },
              }}
             />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;