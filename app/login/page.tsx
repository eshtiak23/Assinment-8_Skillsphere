import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-black text-slate-900">Login</h1>
        <p className="mt-2 text-slate-500">Welcome back to SkillSphere.</p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
          />

          <button className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 py-3 font-bold text-white">
            Login
          </button>
        </form>

        <button className="mt-4 w-full rounded-xl border border-slate-200 py-3 font-bold text-slate-700">
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