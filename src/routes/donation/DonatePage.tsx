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
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";
import { getApiURL } from "@/util/constants";
import { useEffect, useState } from "react";

const donationSchema = z.object({
  amount: z.coerce.number().min(1, "Amount must be at least 1"),
  message: z.string().optional(),
  paymentMethod: z.string().nonempty("Please select a payment method"),
});

type authorData = {
  userId: string;
  username: string;
};

type DonationFormValues = z.infer<typeof donationSchema>;

export default function DonatePage() {
  const { authorId } = useParams();
  const [authorData, setAuthorData] = useState<authorData | null>(null);
  const [loading, setLoading] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: 0,
      message: "",
      paymentMethod: "",
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<authorData>(
          `${getApiURL()}/user/id/${authorId}`
        );
        setAuthorData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const onSubmit = async (data: DonationFormValues) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        toast({
          title: "Authentication Error",
          description: "You need to be logged in to make a donation.",
        });
        return;
      }

      const response = await axios.post(
        `${getApiURL()}/donations/donate`,
        {
          receiverId: authorId,
          amount: data.amount,
          message: data.message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast({
        title: "Donation Successful",
        description: "Thank you for your donation!",
      });
      reset();
    } catch (error) {
      toast({
        title: "Donation Error",
        description: "Failed to process the donation. Please try again.",
      });
    }
  };

  return (
    <Layout rightBar={false} leftBar={false}>
      <div className="w-[500px] rounded-lg border-2 m-auto p-16 space-y-9">
        <h1 className="text-3xl font-semibold text-center">
          Support {loading ? "..." : authorData?.username}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Nominal"
                type="number"
                className="h-14"
              />
            )}
          />
          {errors.amount && (
            <p className="text-red-600">{errors.amount.message}</p>
          )}

          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Message" className="h-14" />
            )}
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}

          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="self-start mb-4">
                  <SelectValue placeholder="Select Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Payment Methods</SelectLabel>
                    <SelectItem value="Gopay">Gopay</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.paymentMethod && (
            <p className="text-red-600">{errors.paymentMethod.message}</p>
          )}

          <Button type="submit">Donate</Button>
        </form>
      </div>
    </Layout>
  );
}
