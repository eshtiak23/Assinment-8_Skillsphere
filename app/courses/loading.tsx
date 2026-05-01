export default function LoadingCourses() {
  return (
    <div className="container-main py-16">
      <div className="mb-6">
        <div className="h-6 w-40 animate-pulse rounded bg-slate-200"></div>
        <div className="mt-3 h-4 w-64 animate-pulse rounded bg-slate-200"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="h-40 w-full animate-pulse rounded-xl bg-slate-200"></div>

            <div className="mt-4 space-y-3">
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200"></div>
              <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200"></div>
              <div className="h-4 w-full animate-pulse rounded bg-slate-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}