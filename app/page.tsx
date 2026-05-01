import Link from "next/link";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <section className="container-main py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100 p-10">
          <p className="mb-4 inline-block rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-violet-500">
            Learn. Apply. Excel.
          </p>

          <h1 className="max-w-2xl text-5xl font-black leading-tight text-slate-900">
            Learn Fast, {" "} <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Grow Faster.
            </span>{" "}
            
          </h1>

          <p className="mt-5 max-w-xl text-slate-600">
           Learn from experts. Build in-demand skills. Grow your career faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-xl bg-sky-500 px-4 py-3 font-semibold text-white"
            >
              Explore Courses 👀
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <section className="container-main py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">
           Trending Now →
          </h2>

          <Link href="/courses" className="text-sm font-bold text-violet-600">
            View All Courses →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}