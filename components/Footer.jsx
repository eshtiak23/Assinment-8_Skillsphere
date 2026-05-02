import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      image: "/assets/social/f.png",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      image: "/assets/social/i.png",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      image: "/assets/social/t.png",
    },
  ];

  return (
    <footer className="mt-20 overflow-hidden bg-slate-950 text-white">
      <div className="relative">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>

        <div className="container-main relative grid gap-10 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-5 lg:items-start">
          {/* Brand */}
          <div className="pt-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="SkillSphere Logo"
                className="h-8 w-8 rounded-2xl border border-white/10 object-cover"
              />

              <h2 className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-1xl font-black text-transparent">
                SkillSphere
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Empowering learners worldwide with quality education, practical
              courses, and career-focused skill development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-4 lg:pt-3">
            <h3 className="text-xl font-black">Quick Links</h3>

            <div className="mt-7 flex flex-col gap-4 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-sky-400">
                Home
              </Link>

              <Link href="/courses" className="transition hover:text-sky-400">
                Courses
              </Link>

              <Link
                href="/my-profile"
                className="transition hover:text-sky-400"
              >
                My Profile
              </Link>

              <Link href="/login" className="transition hover:text-sky-400">
                Login
              </Link>

              <Link href="/register" className="transition hover:text-sky-400">
                Register
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="pt-4 lg:pt-3">
            <h3 className="text-xl font-black">Support</h3>

            <div className="mt-7 flex flex-col gap-4 text-sm text-slate-400">
              <span className="transition hover:text-sky-400">Contact Us</span>

              <span className="transition hover:text-sky-400">
                Terms & Conditions
              </span>

              <span className="transition hover:text-sky-400">
                Privacy Policy
              </span>

              <span className="transition hover:text-sky-400">Help Center</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 lg:pt-3">
            <h3 className="text-xl font-black">Social Links</h3>

            <p className="mt-7 text-sm leading-6 text-slate-400">
              Follow SkillSphere for updates, learning tips, and new course
              releases.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500"
                >
                  <img
                    src={social.image}
                    alt={social.name}
                    className="h-8 w-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="pt-4 lg:pt-3">
            <h3 className="text-xl font-black">Contact</h3>

            <div className="mt-7 space-y-5 text-sm text-slate-400">
              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-sky-400" />
                <span>info@skillsphere.com</span>
              </p>

              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-pink-400" />
                <span>+880 1234 567 890</span>
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-violet-400" />
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 px-5 py-6 text-center text-sm text-slate-500">
          © 2026 SkillSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}