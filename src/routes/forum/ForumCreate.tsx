import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/ui/layout";
import { Textarea } from "@/components/ui/textarea";
import { Forward } from "lucide-react";

export default function ForumCreate() {
  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-3xl font-semibold text-center">
          Create Discussion
        </h1>
        <Input placeholder="Title" className="h-14 text-xl " />
        <Textarea className="min-h-48 " placeholder="Content" />
        <div className="flex flex-row w-full justify-between h-24">
          <div className="flex flex-row gap-4 self-start text-center items-center">
            <Input placeholder="Tag" className="w-[30%]" />
            <span className="text-gray-500">
              eg. Question or you can leave it blank
            </span>
          </div>
          <Button className="h-14 w-14">
            <Forward />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
