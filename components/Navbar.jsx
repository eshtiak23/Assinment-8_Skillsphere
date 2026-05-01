"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-500 via-violet-500 to-pink-500 text-white">
            S
          </span>
          <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            SkillSphere
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="hover:text-violet-600">
            Home
          </Link>
          <Link href="/courses" className="hover:text-violet-600">
            Courses
          </Link>
          <Link href="/my-profile" className="hover:text-violet-600">
            My Profile
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-xl border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-600 hover:bg-violet-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-200"
          >
            Register
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/login"
            className="rounded-xl border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-600 hover:bg-violet-50"
          >
            Login
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-slate-200 p-2"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-slate-800"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-slate-800"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-slate-800"></span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-600">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/courses" onClick={() => setOpen(false)}>
              Courses
            </Link>

            <Link href="/my-profile" onClick={() => setOpen(false)}>
              My Profile
            </Link>

            <div className="pt-3">
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 text-center text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}