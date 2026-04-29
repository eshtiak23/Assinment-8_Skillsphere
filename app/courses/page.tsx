import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <section className="container-main py-14">
        <p className="text-sm font-semibold text-violet-600">Home / Courses</p>

        <h1 className="mt-4 text-4xl font-black text-slate-900">
          All Courses
        </h1>

        <p className="mt-3 max-w-xl text-slate-500">
          Explore our wide range of courses and find the right one for you.
        </p>

        <input
          type="text"
          placeholder="Search courses by title..."
          className="mt-8 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-violet-400"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}