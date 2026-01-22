import PrimaryBtn from "@/components/ui/primary-btn";
import { login } from "@/lib/api/auth-api";
import { TextField } from "@mui/material";
import { useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import "@/index.css";
import { Helmet } from "react-helmet-async";

export default function Admin(): ReactNode {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: () => login(username, password),
    onSuccess: (data) => {
      localStorage.setItem("adminToken", data.data.token);
      toast.success("Login successful");
      navigate("/");
    },
    onError: () => {
      toast.error("Login failed");
    },
  });

  return (
    <>
      <Helmet>
        <title>Azmain Zahin Raaz - Admin</title>
      </Helmet>

      <main className="w-full h-full flex justify-center items-center min-h-[calc(100vh-4.75rem)]">
        <div className="w-full max-w-100 p-4 h-full flex flex-col gap-10 bg-secondary-bg-color rounded-md">
          <h1 className="text-3xl font-semibold pb-3 border-b border-dark-gray text-white">
            Admin Login
          </h1>
          <div className="w-full flex flex-col gap-5 z-99">
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-dark-gray rounded-md"
              label="Username"
              variant="outlined"
            />
            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-dark-gray rounded-md"
              label="Password"
              variant="outlined"
            />
            <PrimaryBtn onClick={() => loginMutation.mutate()}>
              {loginMutation.isLoading ? "Logging in..." : "Login"}
            </PrimaryBtn>
          </div>
        </div>
      </main>
    </>
  );
}
