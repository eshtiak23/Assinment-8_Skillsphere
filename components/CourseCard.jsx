import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-600">
          {course.category}
        </span>

        <h3 className="mt-4 line-clamp-2 text-lg font-bold text-slate-900">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">{course.instructor}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>⭐ {course.rating}</span>
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="mt-5 block rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 py-3 text-center text-sm font-bold text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}