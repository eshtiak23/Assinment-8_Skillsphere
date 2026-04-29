import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-black text-violet-600">404</h1>
        <p className="mt-4 text-2xl font-bold text-slate-900">Page Not Found</p>
        <p className="mt-2 text-slate-500">The page you are looking for does not exist.</p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}