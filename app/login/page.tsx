"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter email and password");
      return;
    }

    const savedUser = localStorage.getItem("skillsphere-user");

    if (!savedUser) {
      toast.error("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.email !== email) {
      toast.error("Email does not match registered account");
      return;
    }

    localStorage.setItem("skillsphere-auth", "true");

    toast.success("Login successful");

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleGoogleLogin = () => {
    const googleUser = {
      name: "Google User",
      email: "gugliuser@skillsphere.com",
      photoUrl: "/assets/eshti_logo.png",
    };

    localStorage.setItem("skillsphere-user", JSON.stringify(googleUser));
    localStorage.setItem("skillsphere-auth", "true");

    toast.success("Google login successful");

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <main className="min-h-screen grid place-items-center px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-black text-slate-900">Login</h1>
        <p className="mt-2 text-slate-500">Welcome back to SkillSphere.</p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 py-3 font-bold text-white"
          >
            Login
          </button>
        </form>

        <button
  type="button"
  onClick={handleGoogleLogin}
  className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3 font-bold text-slate-700 transition hover:border-violet-300 hover:bg-slate-50"
>
  <img
    src="/assets/g.webp"
    alt="Google"
    className="h-7 w-7 object-contain"
  />
  Continue with Google
</button>

        <p className="mt-5 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-violet-600">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}