import { Button } from "@/components/ui/button";
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
import { useParams } from "react-router-dom";

export default function DonatePage() {
  const { authorId } = useParams();

  return (
    <Layout rightBar={false} leftBar={false}>
      <div className=" h-[500px] w-[500px] rounded-lg border-2 m-auto p-16 space-y-9">
        <h1 className="text-3xl font-semibold text-center">Support Aji</h1>
        <Input placeholder="Nominal" type="number" className="h-14" />
        <Input placeholder="Message" className="h-14" />
        <Select onValueChange={(value) => console.log(value)}>
          <SelectTrigger className=" self-start mb-4">
            <SelectValue placeholder="Select Payment Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Payment Methods</SelectLabel>
              <SelectItem value="1">Gopay</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>Send</Button>
      </div>
    </Layout>
  );
}
