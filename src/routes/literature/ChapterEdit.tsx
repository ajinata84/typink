import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/ui/layout";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { getApiURL } from "@/util/constants";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Chapter } from "@/util/interfaces";

const chapterSchema = z.object({
  title: z.string().min(1, "Title is required"),
  number: z.number().min(1, "Chapter number is required"),
  thumbnailUrl: z.string().url().optional(),
  content: z.string().min(1, "Content is required"),
});

type ChapterFormValues = z.infer<typeof chapterSchema>;

export default function ChapterEdit() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [lId, setLid] = useState(0);


  const formMethods = useForm<ChapterFormValues>({
    resolver: zodResolver(chapterSchema),
    defaultValues: {
      title: "",
      number: undefined,
      thumbnailUrl: "",
      content: "",
    },
  });

  const { reset, handleSubmit, control } = formMethods;

  const fetchChapterData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Chapter>(
        `${getApiURL()}/chapter/id/${chapterId}`
      );
      reset({
        title: response.data.chapterTitle,
        number: response.data.chapterNumber,
        thumbnailUrl: response.data.imageUrl,
        content: response.data.content,
      });
      setLid(response.data.literatureId)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load chapter data.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chapterId) {
      fetchChapterData();
    }
  }, [chapterId]);

  const onSubmit: SubmitHandler<ChapterFormValues> = async (data) => {
    try {
      setLoading(true);
      const token = Cookies.get("token");
      await axios.put(
        `${getApiURL()}/chapter/edit`,
        {
          chapterId,
          chapterTitle: data.title,
          chapterNumber: data.number,
          imageUrl: data.thumbnailUrl,
          content: data.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast({
        title: "Success",
        description: "Chapter updated successfully.",
      });

      setTimeout(() => {
        navigate(`/read/${lId}/${chapterId}`);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update chapter.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-3xl font-semibold text-center">
          {chapterId ? "Edit Chapter" : "Create Chapter"}
        </h1>
        <Form {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chapter Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Chapter Title"
                      {...field}
                      className="h-14 text-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chapter Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Chapter Number"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="thumbnailUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail URL (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Thumbnail URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Content"
                      {...field}
                      className="min-h-48"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className=" self-start  h-10 w-20"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-border animate-spin inline-block  border-4 rounded-full border-t-transparent border-white"></div>
              ) : (
                "Publish"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </Layout>
  );
}
