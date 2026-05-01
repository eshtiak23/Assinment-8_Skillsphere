"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import courses from "@/data/courses.json";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearch("");
  };

  return (
    <main className="min-h-screen">
      <section className="container-main py-14">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-violet-600">
              Home / Courses
            </p>

            <h1 className="mt-4 text-4xl font-black text-slate-800">
              All Courses
            </h1>

            <p className="mt-3 max-w-xl text-slate-500">
              Explore our wide range of courses and find the right one for you.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSearch((prev) => !prev)}
            className="flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 font-bold text-white shadow-lg"
          >
            {showSearch ? <X size={16} /> : <Search size={16} />}
            {showSearch ? " " : ""}
          </button>
        </div>

        {showSearch && (
          <div className="mt-8 flex gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <Search className="mt-3 text-slate-400" size={20} />

            <input
              type="text"
              placeholder="Search courses by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              className="w-full bg-transparent px-2 py-3 outline-none"
            />

            {search && (
              <button
                type="button"
                onClick={handleCloseSearch}
                className="rounded-xl bg-slate-100 px-4 font-bold text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-full rounded-2xl bg-white p-8 text-center font-semibold text-slate-500">
              No courses found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}