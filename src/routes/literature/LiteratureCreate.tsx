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

export default function LiteratureCreate() {
  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-3xl font-semibold text-center">
          Create Literature
        </h1>
        <Input placeholder="Title" className="h-14 text-xl " />
        <Input placeholder="Thumbnail Url" className=" " />
        <Textarea className="min-h-24 " placeholder="Synopsis" />
        <Select>
          <SelectTrigger className="w-[180px] self-start">
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genre</SelectLabel>
              <SelectItem value="apple">Fantasy</SelectItem>
              <SelectItem value="banana">Cyberpunk</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Strawberry</SelectItem>
              <SelectItem value="pineapple">Backberry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2 self-start">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Copyright For Creative Commons (CC) Attribution
          </label>
        </div>
        <div className="flex flex-row w-full justify-between h-20">
          <Button className="h-14">Publish</Button>
        </div>
      </div>
    </Layout>
  );
}
