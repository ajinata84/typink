import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Layout from "@/components/ui/layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Forward } from "lucide-react";
import { getApiURL } from "@/util/constants";

type FormData = {
  title: string;
  synopsis: string;
  imageUrl: string;
  genreId: string;
  language: string;
  copyright: boolean;
};

interface createResponse {
  literatureId: number;
  title: string;
  synopsis: string;
  imageUrl: string;
  genreId: number;
  language: string;
  copyright: number;
  authorId: string;
}

export default function LiteratureCreate() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const token = Cookies.get("token");

    if (!token) {
      toast({
        title: "Authentication Error",
        description: "Please log in to create literature.",
      });
      return;
    }

    try {
      const response = await axios.post<createResponse>(
        `${getApiURL()}/literature/create`,
        {
          title: data.title,
          synopsis: data.synopsis,
          imageUrl: data.imageUrl,
          genreId: Number(data.genreId),
          language: data.language,
          copyright: data.copyright ? 1 : 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast({
        title: "Literature Created",
        description: "Your literature has been successfully created.",
      });
      reset();

      setTimeout(() => {
        navigate(`/read/${response.data.literatureId}`);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error creating the literature. Please try again.",
      });
      console.error("Error creating literature:", error);
    }
  };

  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-3xl font-semibold text-center">
          Create Literature
        </h1>
        <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("title", { required: true })}
            placeholder="Title"
            className="h-14 text-xl mb-4"
          />
          <Input
            {...register("imageUrl", { required: true })}
            placeholder="Thumbnail Url"
            className="mb-4"
          />
          <Textarea
            {...register("synopsis", { required: true })}
            className="min-h-24 mb-4"
            placeholder="Synopsis"
          />
          <Select onValueChange={(value) => setValue("genreId", value)}>
            <SelectTrigger className="w-[180px] self-start mb-4">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genre</SelectLabel>
                <SelectItem value="1">Fantasy</SelectItem>
                <SelectItem value="2">Cyberpunk</SelectItem>
                <SelectItem value="3">Blueberry</SelectItem>
                <SelectItem value="4">Strawberry</SelectItem>
                <SelectItem value="5">Backberry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setValue("language", value)}>
            <SelectTrigger className="w-[180px] self-start mb-4">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="German">German</SelectItem>
                <SelectItem value="Chinese">Chinese</SelectItem>
                <SelectItem value="Indonesian">Indonesian</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2 self-start mb-4">
            <Checkbox id="terms" {...register("copyright")} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Copyright For Creative Commons (CC) Attribution
            </label>
          </div>
          <div className="flex flex-row w-full justify-between h-20">
            <Button type="submit" className="h-10">
              Publish
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
