import courses from "@/data/courses.json";
import { isLoggedIn } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";

type CourseDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetails({ params }: CourseDetailsProps) {
  if (!isLoggedIn()) {
    redirect("/login");
  }

  const { id } = await params;
  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="container-main py-14">
        {/* Course Header */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <img
            src={course.image}
            alt={course.title}
            className="h-64 w-full object-cover sm:h-80"
          />

          <div className="bg-gradient-to-br from-sky-500 via-violet-500 to-pink-500 p-6 text-white sm:p-10">
            <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
              {course.category}
            </span>

            <h1 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
              {course.title}
            </h1>

            <p className="mt-3 text-white/80">
              Instructor: {course.instructor}
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <span className="rounded-full bg-white/20 px-4 py-2">
                Rating {course.rating}
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2">
                {course.duration}
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2">
                {course.level}
              </span>
            </div>

            <button className="mt-7 rounded-xl bg-white px-6 py-3 font-bold text-violet-600 shadow-lg">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">
            Course Curriculum
          </h2>

          <ul className="mt-6 space-y-4 text-slate-600">
            <li className="rounded-xl bg-slate-50 p-4">
              ✔ Introduction to the Course
            </li>
            <li className="rounded-xl bg-slate-50 p-4">✔ Basic Concepts</li>
            <li className="rounded-xl bg-slate-50 p-4">✔ Practical Lessons</li>
            <li className="rounded-xl bg-slate-50 p-4">✔ Advanced Topics</li>
            <li className="rounded-xl bg-slate-50 p-4">✔ Final Project</li>
          </ul>
        </div>
      </section>
    </main>
  );
}