import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Featured() {
  const featuredData = [
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
  ];

  return (
    <>
      <div>
        <h1 className="font-bold text-4xl">Featured</h1>
        <h6 className="mb-3">Today's Top Picks</h6>
        <hr />
      </div>
      <Carousel
        className="w-full "
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {featuredData.map((v, i) => (
            <CarouselItem>
              <div
                className="rounded h-[500px] mt-4"
                style={{
                  backgroundImage: `url(${v.bgImg})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="h-full w-full backdrop-blur-lg rounded flex flex-row bg-black/60 overflow-hidden    ">
                  <img
                    src={v.bgImg}
                    alt=""
                    className="object-cover w-[40%] h-full"
                  />
                  <div className="w-full h-full pt-16 px-10 flex flex-col justify-between">
                    <div>
                      <h1 className="text-white text-4xl capitalize font-semibold mb-4">
                        {v.bgTitle}
                      </h1>
                      <p className="text-white text-sm">{v.synopsis}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center text-white">
                      <span>{v.author}</span>
                      <div className="flex flex-row gap-4 my-4">
                        <CarouselPrevious
                          className="carousel-btn"
                          variant={"link"}
                          style={{
                            all: "initial",
                            color: "white",
                            cursor: "pointer",
                          }}
                        />
                        1 of 10
                        <CarouselNext
                          className="carousel-btn"
                          variant={"link"}
                          style={{
                            all: "initial",
                            color: "white",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
