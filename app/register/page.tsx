"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !photoUrl.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const user = {
      name,
      email,
      photoUrl,
    };

    localStorage.setItem("skillsphere-user", JSON.stringify(user));

    toast.success("Registration successful. Please login.");

    setTimeout(() => {
      router.push("/login");
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
        <h1 className="text-3xl font-black text-slate-900">Register</h1>
        <p className="mt-2 text-slate-500">Create your SkillSphere account.</p>

        <form onSubmit={handleRegister} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
          />

          <input
            type="url"
            placeholder="Photo URL"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
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
            className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 py-3 font-bold text-white"
          >
            Register
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
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-violet-600">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}