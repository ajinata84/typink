import LiteratureCard from "@/components/LiteratureCard/LiteratureCard";
import Layout from "@/components/ui/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { getApiURL } from "@/util/constants";
import { Literature, Transaction } from "@/util/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function Transactions() {
  const [myTransactions, setMyTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = Cookies.get("uid");
  const token = Cookies.get("token");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Transaction[]>(
          `${getApiURL()}/donations/transactions/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMyTransactions(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <h1 className="text-5xl font-semibold">My Transactions</h1>
      {loading && (
        <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <Skeleton key={idx} className="h-[350px] w-full rounded" />
            ))}
        </div>
      )}
      <div className="space-y-4 pt-10">
        {myTransactions.map((item) => (
          <div className=" border-black w-full border-2 rounded-lg p-4 space-y-4 flex flex-row justify-between items-center">
            <div className="space-y-4">
              <h1 className="text-3xl">{item.transactionType}</h1>
              <h2 className="text-lg">Rp. {item.value.toLocaleString()}</h2>
            </div>
            <span>{new Date(item.created_at).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
