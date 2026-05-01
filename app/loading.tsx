export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>

        <h2 className="text-lg font-bold text-slate-900">
          Loading SkillSphere...
        </h2>

        <p className="text-sm text-slate-500">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}