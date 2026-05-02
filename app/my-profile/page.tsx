"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  photoUrl: string;
  bio?: string;
};

export default function MyProfilePage() {
  const [user, setUser] = useState<User>({
    name: "Abul User",
    email: "abul@skillsphere.com",
    photoUrl: "/assets/logo.png",
    bio: "Student at SkillSphere",
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("skillsphere-user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <main className="min-h-screen">
      <section className="container-main py-16">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="h-40 bg-gradient-to-br from-sky-400 via-violet-500 to-pink-500"></div>

          <div className="px-8 pb-8">
            <div className="-mt-16 flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-5">
                <img
                  src={user.photoUrl || "/assets/logo.png"}
                  alt={user.name}
                  className="h-32 w-32 rounded-3xl border-4 border-white bg-white object-cover shadow-lg"
                />

                <div className="pb-2">
                  <h1 className="text-3xl font-black text-slate-900">
                    {user.name}
                  </h1>
                  <p className="mt-1 text-slate-500">{user.email}</p>
                  {user.bio && (
                    <p className="mt-2 max-w-md text-sm text-slate-500">
                      {user.bio}
                    </p>
                  )}
                </div>
              </div>

              <Link
                href="/update-profile"
                className="rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-bold text-white shadow-lg shadow-sky-200"
              >
                Update Profile
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-sky-50 p-5">
                <p className="text-sm font-bold text-sky-600">Enrolled</p>
                <h2 className="mt-2 text-3xl font-black text-slate-900">4</h2>
                <p className="mt-1 text-sm text-slate-500">Active courses</p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-5">
                <p className="text-sm font-bold text-violet-600">Progress</p>
                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  68%
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Average learning
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 p-5">
                <p className="text-sm font-bold text-pink-600">
                  Certificates
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-900">2</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Completed tracks
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-xl font-black text-slate-900">
                  Current Learning
                </h2>

                <div className="mt-5 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm font-bold">
                      <span>Complete Web Development Bootcamp</span>
                      <span>75%</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-slate-100">
                      <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold">
                      <span>UI/UX Design Fundamentals</span>
                      <span>52%</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-slate-100">
                      <div className="h-3 w-[52%] rounded-full bg-gradient-to-r from-violet-500 to-pink-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-xl font-black text-slate-900">
                  Account Details
                </h2>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-bold text-slate-500">Role</span>
                    <span className="font-bold text-slate-900">Student</span>
                  </div>

                  <div className="flex justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-bold text-slate-500">Status</span>
                    <span className="font-bold text-green-600">Active</span>
                  </div>

                  <div className="flex justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-bold text-slate-500">
                      Member Since
                    </span>
                    <span className="font-bold text-slate-900">2026</span>
                  </div>

                  <div className="flex justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-bold text-slate-500">Email</span>
                    <span className="font-bold text-slate-900">
                      {user.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}