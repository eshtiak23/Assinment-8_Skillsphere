import Link from "next/link";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const learningTips = [
    {
      title: "Study Techniques",
      text: "Use focused sessions and revise regularly to retain knowledge.",
    },
    {
      title: "Time Management",
      text: "Break learning into small tasks and stay consistent daily.",
    },
    {
      title: "Practice Projects",
      text: "Build real-world projects to master your skills faster.",
    },
  ];

 const instructors = [
  {
    name: "Eshtiak Ahmed",
    role: "Web Development Instructor",
    rating: 4.9,
    image: "/assets/eshti_logo.png",
  },
  {
    name: "Mikasa Ackerman",
    role: "UI/UX Design Mentor",
    rating: 4.7,
    image: "/assets/Mikasa.webp",
  },
  {
    name: "Monkey D. Luffy",
    role: "Marketing Expert",
    rating: 4.6,
    image: "/assets/Lufi.jpg",
  },
  {
    name: "Naruto Uzumaki",
    role: "Graphic Designer",
    rating: 4.8,
    image: "/assets/naruto.jfif",
  },
];

  return (
    <main className="min-h-screen">

      {/* HERO SECTION  */}

      <section className="container-main py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100 p-6 sm:p-10">
          <p className="mb-4 inline-block rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-violet-500">
            Learn. Apply. Excel.
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Learn Fast,{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-slate-600">
            Learn from experts. Build in-demand skills. Grow your career faster.
          </p>

          {/* Buttons Section */}

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-xl bg-sky-500 px-4 py-3 font-semibold text-white transition hover:bg-sky-600"
            >
              Explore Courses 👀
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/*  TRENDING COURSES Section  */}
      <section className="container-main py-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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

      {/*  LEARNING TIPS Section  */}

      <section className="container-main py-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 via-violet-50 to-pink-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-slate-900">
            Learning Tips 
          </h2>

          <p className="mt-2 text-slate-500">
            Designed to Make You Better, Faster.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {learningTips.map((tip, index) => {
              const styles = [
                "from-sky-100 to-blue-100 border-sky-200",
                "from-violet-100 to-purple-100 border-violet-200",
                "from-pink-100 to-rose-100 border-pink-200",
              ];

              return (
                <div
                  key={tip.title}
                  className={`rounded-2xl border bg-gradient-to-br p-5 shadow-sm ${styles[index]}`}
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/70 font-black text-slate-900">
                    {index + 1}
                  </div>

                  <h3 className="font-black text-slate-900">{tip.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {tip.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* TOP INSTRUCTORS Section */}
      
<section className="container-main py-10">
  <div className="mb-6">
    <h2 className="text-2xl font-black text-slate-900">Top Instructors</h2>

    <p className="mt-2 text-slate-500">
      Learn from skilled mentors with practical experience.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {instructors.map((instructor) => (
      <div
        key={instructor.name}
        className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-sky-400 via-violet-500 to-pink-500 p-1">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="h-full w-full rounded-full border-4 border-white object-cover"
          />
        </div>

        <h3 className="mt-5 font-black text-slate-900">
          {instructor.name}
        </h3>

        <p className="mt-1 text-sm text-slate-500">{instructor.role}</p>

        <p className="mt-4 rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-600">
          Rating {instructor.rating}
        </p>
      </div>
    ))}
  </div>
</section>
   
    </main>
  );
}