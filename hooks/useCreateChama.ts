import { CreateChamaSchema } from "@/app/create/schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BASE_URL = "http://localhost:8080";

export const useCreateChama = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const createChamaMutation = useMutation({
    mutationFn: async (chamaData: CreateChamaSchema) => {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/v1/chamas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chamaData),
      });
      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to create chama");
      }
      return response.json();
    },
    onSuccess: () => {
      setError(null);
      setLoading(false);
    },
    onError: (error) => {
      setError(error.message);
      setLoading(false);
    },
  });

  return {
    createChamaMutation,
    error,
    loading,
  };
};
