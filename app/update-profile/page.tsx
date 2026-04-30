import Link from "next/link";

export default function UpdateProfilePage() {
  return (
    <main className="min-h-screen">
      <section className="container-main py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          {/* Header */}
          <div className="rounded-t-[2rem] bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 p-8 text-white">
            <h1 className="text-3xl font-black">Profile Settings</h1>
            <p className="mt-2 text-white/80">
              Update your personal information and profile appearance
            </p>
          </div>

          <div className="p-8">
            {/* Preview */}
            <div className="mb-10 flex flex-col items-center gap-4">
              <img
                src="https://i.ibb.co.com/4pDNDk1/avatar.png"
                alt="Preview"
                className="h-28 w-28 rounded-3xl border-4 border-violet-200 object-cover shadow-lg"
              />
              <p className="text-sm text-slate-500">
                Current profile preview
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
                />
              </div>

              {/* Email (disabled just for display) */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value="demo@skillsphere.com"
                  disabled
                  className="mt-2 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  placeholder="Paste image link"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Short Bio
                </label>
                <textarea
                  rows={3}
                  placeholder="Write something about yourself..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 py-3 font-bold text-white shadow-lg">
                  Save Changes
                </button>

                <Link
                  href="/my-profile"
                  className="flex-1 rounded-xl border border-slate-200 py-3 text-center font-bold text-slate-700"
                >
                  Cancel
                </Link>
              </div>
            </form>

            {/* Extra Info */}
            <div className="mt-10 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
               Tip: Use a square image (1:1 ratio) for best profile appearance.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}