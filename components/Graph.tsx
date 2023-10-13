import dayjs from "dayjs";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { cn } from "@/lib/utils"

export default function Graph() {
  function getDateInRecentMonth(
    year = dayjs().year(),
    month = dayjs().month()
  ) {
    const startDate = dayjs().year(year).month(month).date(1);

    const endDate = startDate.endOf("month");

    const dateArray = [];

    for (let i = startDate.date(); i <= endDate.date(); i++) {
      dateArray.push(startDate.date(i).format("YYYY-MM-DD"));
    }
    return dateArray;
  }

  const hour = 0

  const getColor = (value:number)  =>{

    if(value === 0){
return "bg-gray-100"
    } else if(value > 5){
return "bg-green-100"
    }else if(value < 10){
return "bg-green-300"
    }else{
return "bg-green-500"
    }
  }; 

  return (

  
    <div className="border border-dashed flex flex-wrap gap-2 p-5 justify-center rounded-md">
      {getDateInRecentMonth().map((value, index) => {
        return (
          <HoverCard key={index}>
          <HoverCardTrigger><div className={cn("h-5 w-5  rounded-full cursor-pointer", getColor(hour || 0))} >
            
            </div>
            </HoverCardTrigger>
          <HoverCardContent>
       {hour || 0} hours on {value}
          </HoverCardContent>
        </HoverCard>
        
          
        );
      })}
    </div>
  );
}
