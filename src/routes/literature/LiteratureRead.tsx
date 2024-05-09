import LiteratureSocials from "@/components/LiteratureSocials/LiteratureSocials";
import { Button } from "@/components/ui/button";
import Layout from "@/components/ui/layout";
import { Grid2X2, Layers2 } from "lucide-react";
import { useState } from "react";

import { useParams } from "react-router-dom";

export default function LiteratureRead() {
  // const { category, id } = useParams();
  const [currSec, setCurrSec] = useState(1);

  const chapterData = [
    {
      title:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, adipisci.",
      date: "20 jun 2023",
    },
    {
      title: "asw2",
      date: "21 jun 2023",
    },
    {
      title: "asw3",
      date: "22 jun 2023",
    },
  ];

  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-row my-10">
        <img
          className="w-80 h-[450px] object-cover rounded-sm"
          src="https://images.unsplash.com/photo-1573932925621-4a07d654bf77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="w-full p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold break-words w-[440px] block">
              Lorem, ipsum dolor.
            </span>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row gap-2">
                <Grid2X2 />
                Fantasy
              </div>
              <div className="flex flex-row gap-2">
                <Layers2 />
                Chapter 20
              </div>
            </div>
            <span>Author: ajinata</span>
            <div></div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant={"default"}
              className="w-36 rounded-xl bg-[#04D192] hover:bg-[#00855C]"
            >
              Read
            </Button>
            <Button
              variant={"default"}
              className="w-36 rounded-xl bg-[#04D192] hover:bg-[#00855C]"
            >
              Add To Library
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Button
            className={`w-44 h-12 text-2xl rounded-none font-bold ${
              currSec == 1 && "border-b-2 border-black"
            }`}
            variant={"ghost"}
            onClick={() => setCurrSec(1)}
          >
            Info
          </Button>
          <Button
            className={`w-44 h-12 text-2xl rounded-none font-bold ${
              currSec == 2 && "border-b-2 border-black"
            }`}
            variant={"ghost"}
            onClick={() => setCurrSec(2)}
          >
            Chapters
          </Button>
        </div>
        <hr className="mb-4" />
        {currSec == 1 && (
          <>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, placeat ratione. Illum accusantium accusamus
              minima nisi reprehenderit ipsum praesentium, aliquam eveniet
              voluptatibus, cum eum voluptatum error! Deleniti, voluptas
              corporis animi magni quos amet cupiditate dolorem non quisquam ab
              officiis atque voluptates fugit nobis sit ipsam voluptatibus
              quidem eligendi dicta possimus. Maxime sapiente omnis repellat
              quasi est, repellendus alias illo totam laudantium unde corporis.
              Quisquam laudantium corrupti facilis porro perspiciatis.
              Voluptate, odit expedita! Dolorum voluptate culpa nobis, quas
              dolorem nemo aut obcaecati deleniti tempore aperiam, atque ad
              praesentium quasi, nisi esse.
            </p>
            <LiteratureSocials />
          </>
        )}
        {currSec == 2 && (
          <>
            {chapterData.map((v, i) => (
              <div className="hover:bg-secondary cursor-pointer my-2">
                <div className="flex flex-row w-full justify-between  h-10 items-center p-3 py-8">
                  <span className="w-[20%]">Chapter {i + 1}</span>
                  <span className="w-full">{v.title}</span>
                  <span className="w-[20%]">{v.date}</span>
                </div>
                <hr />
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}
