"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("skillsphere-auth");

    if (isAuth !== "true") {
      localStorage.setItem("skillsphere-redirect", window.location.pathname);
      router.push("/login");
      return;
    }

    setAllowed(true);
  }, [router]);

  if (!allowed) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>
          <p className="mt-4 text-sm font-semibold text-slate-500">
            Checking access...
          </p>
        </div>
      </div>
    );
  }

  return children;
}