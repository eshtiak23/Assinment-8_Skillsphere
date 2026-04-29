import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="container-main grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black text-sky-400">SkillSphere</h2>
          <p className="mt-3 text-sm text-slate-400">
            Empowering learners worldwide with quality education.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/my-profile">My Profile</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Support</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            <span>Contact Us</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-3 text-sm text-slate-400">
            <p>info@skillsphere.com</p>
            <p>+880 1234 567 890</p>
          </div>
        </div>
      </div>

      <p className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        © 2026 SkillSphere. All rights reserved.
      </p>
    </footer>
  );
}