import Link from "next/link";

export default function Navbar() {
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
          <Link href="/" className="hover:text-violet-600">Home</Link>
          <Link href="/courses" className="hover:text-violet-600">Courses</Link>
          <Link href="/my-profile" className="hover:text-violet-600">My Profile</Link>
        </div>

        <div className="flex items-center gap-3">
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
      </nav>
    </header>
  );
}