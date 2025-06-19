"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { login } from "@/features/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLogged, setStayLogged] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm">Email</label>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm">Password</label>
        <Input
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={stayLogged}
          onChange={(e) => setStayLogged(e.target.checked)}
        />
        <span>Stay logged in</span>
      </label>
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Logging in..." : "Log In"}
      </Button>
      <a href="#" className="block text-center text-sm text-[#872175]">
        Forgot Password
      </a>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
