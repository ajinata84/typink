import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/ui/layout";
import { Textarea } from "@/components/ui/textarea";
import { Forward } from "lucide-react";

export default function ChapterCreate() {
  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-3xl font-semibold text-center">Create Chapter</h1>
        <Input placeholder="Chapter Title" className="h-14 text-xl " />
        <Input placeholder="Chapter Number" type="number"/>

        <Input placeholder="Thumbnail Url (optional)" className=" " />
        <Textarea className="min-h-48 " placeholder="Content" />
        <Button className="h-14 self-start">Publish</Button>
      </div>
    </Layout>
  );
}
