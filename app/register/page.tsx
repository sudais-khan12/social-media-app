"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
      });

      if (response.status === 200) {
        router.push("/login");
      }

      console.log(response);

      setError("");
    } catch (error) {
      console.error(error);
    }
  };
  return <div>{/* write the register form */}</div>;
};
export default Register;
