import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-600 shadow-sm">
          {course.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-2 text-xl font-black text-slate-900">
          {course.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          {course.instructor}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-500">
          <span className="font-bold text-yellow-500">★ {course.rating}</span>
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="mt-6 block rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 py-3 text-center font-bold text-white transition hover:from-sky-600 hover:to-violet-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}