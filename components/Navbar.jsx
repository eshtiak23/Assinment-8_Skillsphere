"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("skillsphere-auth");
    const savedUser = localStorage.getItem("skillsphere-user");

    if (authStatus === "true" && savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }

    setOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("skillsphere-auth");
    localStorage.removeItem("skillsphere-user");
    localStorage.removeItem("skillsphere-redirect");

    setIsLoggedIn(false);
    setUser(null);
    setOpen(false);

    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="h-10 w-10 overflow-hidden rounded-xl">
            <img
              src="/assets/logo.png"
              alt="SkillSphere Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            Skill
            <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 bg-clip-text text-transparent">
              Sphere
            </span>
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

        {/* Desktop Auth Area */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <img
                src={user?.photoUrl || "/assets/logo.png"}
                alt={user?.name || "User"}
                className="h-10 w-10 rounded-full border border-violet-200 object-cover"
              />

              <button
                onClick={handleLogout}
                className="rounded-xl border border-pink-200 px-4 py-2 text-sm font-semibold text-pink-600 hover:bg-pink-50"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-xl border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-600 hover:bg-violet-50"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Auth + Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {isLoggedIn ? (
            <img
              src={user?.photoUrl || "/assets/logo.png"}
              alt={user?.name || "User"}
              className="h-10 w-10 rounded-full border border-violet-200 object-cover"
            />
          ) : (
            <Link
              href="/login"
              className="rounded-xl border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-600 hover:bg-violet-50"
            >
              Login
            </Link>
          )}

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

            {isLoggedIn && (
              <div className="pt-3">
                <button
                  onClick={handleLogout}
                  className="block w-full rounded-xl border border-pink-200 px-4 py-2 text-center font-semibold text-pink-600 hover:bg-pink-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}