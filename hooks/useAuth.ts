import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BASE_URL = "http://localhost:8080";

export interface SignUpData {
  walletAddress: string;
  fullName: string;
  mobileNumber: string;
  profileImage: string;
  country: string;
  idNumber: string;
}

export default function useAuth() {
  const [user, setUser] = useState<SignUpData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signUpMutation = useMutation({
    mutationFn: (userData: SignUpData) => {
      setLoading(true);
      return fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return {
    user,
    error,
    loading,
    signUpMutation,
  };
}
