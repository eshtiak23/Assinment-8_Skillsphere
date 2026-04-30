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
        <div className="rounded-3xl bg-gradient-to-br from-sky-500 via-violet-500 to-pink-500 p-10 text-white">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
            {course.category}
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-black">
            {course.title}
          </h1>

          <p className="mt-3 text-white/80">Instructor: {course.instructor}</p>

          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <span>⭐ {course.rating}</span>
            <span>⏱ {course.duration}</span>
            <span>🎯 {course.level}</span>
          </div>

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-bold text-violet-600">
            Enroll Now
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">
            Course Curriculum
          </h2>

          <ul className="mt-6 space-y-3 text-slate-600">
            <li>✔ Introduction to the Course</li>
            <li>✔ Basic Concepts</li>
            <li>✔ Practical Lessons</li>
            <li>✔ Advanced Topics</li>
            <li>✔ Final Project</li>
          </ul>
        </div>
      </section>
    </main>
  );
}