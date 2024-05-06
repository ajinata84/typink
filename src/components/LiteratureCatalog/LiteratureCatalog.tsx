import LiteratureCard from "../LiteratureCard/LiteratureCard";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Catalog() {
  const catalogData = [
    {
      bgImg:
        "https://images.unsplash.com/photo-1714383524948-ebc87c14c0f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgTitle: "something",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad dolorem nesciunt nisi aliquid veniam consequatur fugit, adipisci corrupti eaque.",
      author: "ajinata",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1714836986273-9a62b37f55fa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgTitle: "something 2",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad dolorem nesciunt nisi aliquid veniam consequatur fugit, adipisci corrupti eaque.",
      author: "ajinata",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1714480931464-1537f724428b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgTitle: "something 3 ",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad dolorem nesciunt nisi aliquid veniam consequatur fugit, adipisci corrupti eaque.",
      author: "ajinata",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1714480931464-1537f724428b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgTitle: "something 3 ",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad dolorem nesciunt nisi aliquid veniam consequatur fugit, adipisci corrupti eaque.",
      author: "ajinata",
    },
    {
      bgImg:
        "https://images.unsplash.com/photo-1714480931464-1537f724428b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgTitle: "something 3 ",
      synopsis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad dolorem nesciunt nisi aliquid veniam consequatur fugit, adipisci corrupti eaque.",
      author: "ajinata",
    },
  ];

  return (
    <div className="mt-6 max-w-[821.075px]">
      <div>
        <h1 className="font-bold text-4xl">Fantasy</h1>
        <h6 className="mb-3">Embark Yourself on a mesmerizing journey</h6>
        <hr />
      </div>
      <div className=" mt-6">
        <Carousel
          className="w-full flex flex-col"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {catalogData.map((v, i) => (
              <CarouselItem className="basis-1/3">
                <LiteratureCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex flex-row gap-4 my-4 self-center">
            <CarouselPrevious
              className="carousel-btn"
              variant={"link"}
              style={{
                all: "initial",
                color: "black",
                cursor: "pointer",
              }}
            />
            1 of 10
            <CarouselNext
              className="carousel-btn"
              variant={"link"}
              style={{
                all: "initial",
                color: "black",
                cursor: "pointer",
              }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
