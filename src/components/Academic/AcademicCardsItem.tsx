import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  img: string;
}

export default function AcademicCardsItem({
  title,
  category,
  date,
  description,
  img,
}: CardProps) {
  return (
    <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-7 md:w-11/12 md:flex-row">
      <img src={img} alt={title} className="mb-4 w-full md:mb-0 md:w-1/4" />
      <div className="pl-0 pt-3 md:pl-14">
        <p className="inline-block rounded bg-primary px-2 py-1 text-white">
          {category}
        </p>
        <h1 className="pb-6 pt-7 text-2xl font-bold text-primary">{title}</h1>
        <div className="flex items-center">
          <Clock className="text-primary" />
          <p className="pl-2 text-primary">{date}</p>
        </div>
        <p className="pb-5 pt-2">{description}</p>
        <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
          Learn more
        </Button>
      </div>
    </div>
  );
}