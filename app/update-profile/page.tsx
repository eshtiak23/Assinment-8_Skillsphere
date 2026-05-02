"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");

  const previewImage =
    imageUrl.trim() || "/assets/eshti_logo.png";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !imageUrl.trim()) {
      toast.error("Name and image URL are required");
      return;
    }

    console.log({
      name,
      imageUrl,
      bio,
    });

    toast.success("Profile updated successfully!");
  };

  return (
    <main className="min-h-screen">
      <section className="container-main py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="rounded-t-[2rem] bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 p-8 text-white">
            <h1 className="text-3xl font-black">Update Profile </h1>
            <p className="mt-2 text-white/80">
              Manage your profile information and appearance.
            </p>
          </div>

          <div className="p-8">
            <div className="mb-10 flex flex-col items-center gap-4">
              <img
                src={previewImage}
                alt="Profile preview"
                className="h-28 w-28 rounded-3xl border-4 border-violet-200 object-cover shadow-lg"
              />

              <div className="text-center">
                <p className="font-bold text-slate-900">
                  {name.trim() || "Abul User"}
                </p>
                <p className="text-sm text-slate-500">
                  Current Profile Preview
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value="abul@skillsphere.com"
                  disabled
                  className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="imageUrl"
                  className="text-sm font-bold text-slate-700"
                >
                  Profile Image URL
                </label>
                <input
                  id="imageUrl"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Paste image link"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="text-sm font-bold text-slate-700"
                >
                  Short Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Write something about yourself..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 py-3 font-bold text-white shadow-lg"
                >
                  Save Changes
                </button>

                <Link
                  href="/my-profile"
                  className="flex-1 rounded-xl border border-slate-200 py-3 text-center font-bold text-slate-700"
                >
                  Cancel
                </Link>
              </div>
            </form>

            <div className="mt-10 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
              💡 Tip: Use a square image 1:1 ratio for best profile appearance.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}