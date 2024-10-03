import {
  Carousel,
  CarouselContent,
  CarouselImg,
} from "@/components/ui/carousel";
import ProfileCarouselItem from "./ProfileCarouselItem";

import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  dinas: string;
};

export default function ProfileCarousel({ dinas }: Props) {
  const [core, setCore] = useState([]);
  const [staff, setStaff] = useState([[]]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get(`/data/profile/${dinas}.json`).then((res) => {
      setCore(res.data.core);
      if (res.data.staff) setStaff(res.data.staff);
      setTitle(res.data.title);
    });
  }, []);

  return (
    <section id="profile-carousel" className="space-y-8">
      {core && (
        <Carousel className="flex flex-col">
          <h1 className="mb-4 self-start text-2xl font-bold uppercase text-primary lg:mb-20 xl:text-4xl">
            bph {title}
          </h1>
          <CarouselContent>
            {core.map((item, key) => (
              <ProfileCarouselItem
                name={item["name"]}
                position={item["position"]}
                gen={item["gen"]}
                instagram={item["instagram"]}
                email={item["email"]}
                dinas={dinas}
                key={item["instagram"] + key}
              />
            ))}
          </CarouselContent>
          <div className="embla__dots no-scrollbar relative mt-8 flex items-center gap-8 self-end overflow-scroll overflow-y-hidden whitespace-nowrap lg:mt-0 lg:w-1/2">
            {core.map((item, key) => (
              <CarouselImg
                key={item["instagram"] + key}
                index={key}
                src={`/img/profile/${dinas}/${item["name"]}.png`}
              />
            ))}
          </div>
        </Carousel>
      )}
      {staff[0].length > 1 && (
        <Carousel className="flex flex-col">
          <h1 className="mb-4 self-start text-2xl font-bold uppercase text-primary lg:mb-20 xl:text-4xl">
            staff {title}
          </h1>
          <CarouselContent>
            {staff[0].map((item, key) => (
              <ProfileCarouselItem
                name={item["name"]}
                position={item["position"]}
                gen={item["gen"]}
                instagram={item["instagram"]}
                email={item["email"]}
                dinas={dinas}
                key={item["instagram"] + key}
              />
            ))}
          </CarouselContent>
          <div className="embla__dots no-scrollbar relative mt-8 flex items-center gap-8 self-end overflow-scroll overflow-y-hidden whitespace-nowrap lg:mt-0 lg:w-1/2">
            {staff[0].map((item, key) => (
              <CarouselImg
                key={item["instagram"] + key}
                index={key}
                src={`/img/profile/${dinas}/${item["name"]}.png`}
              />
            ))}
          </div>
        </Carousel>
      )}
      {staff[1] && (
        <Carousel className="flex flex-col">
          <CarouselContent>
            {staff[1].map((item, key) => (
              <ProfileCarouselItem
                name={item["name"]}
                position={item["position"]}
                gen={item["gen"]}
                instagram={item["instagram"]}
                email={item["email"]}
                dinas={dinas}
                key={item["instagram"] + key}
              />
            ))}
          </CarouselContent>
          <div className="embla__dots no-scrollbar relative mt-8 flex items-center gap-8 self-end overflow-scroll overflow-y-hidden whitespace-nowrap lg:mt-0 lg:w-1/2">
            {staff[1].map((item, key) => (
              <CarouselImg
                key={item["instagram"] + key}
                index={key}
                src={`/img/profile/${dinas}/${item["name"]}.png`}
              />
            ))}
          </div>
        </Carousel>
      )}
    </section>
  );
}
