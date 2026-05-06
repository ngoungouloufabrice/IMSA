export default function Loading() {
  return (
    <main className="bg-[var(--bg-soft)] min-h-screen pb-20 animate-pulse">
      {/* Header / Breadcrumbs Skeleton */}
      <div className="bg-gray-200 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 bg-gray-300 w-3/4 rounded-sm mb-6"></div>
          <div className="flex gap-3">
            <div className="h-10 bg-gray-300 w-24 rounded-sm"></div>
            <div className="h-10 bg-gray-300 w-24 rounded-sm"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-10 shadow-xl border border-[var(--border-light)] h-48">
              <div className="h-6 bg-gray-200 w-1/3 mb-6"></div>
              <div className="h-4 bg-gray-100 w-full mb-2"></div>
              <div className="h-4 bg-gray-100 w-full mb-2"></div>
              <div className="h-4 bg-gray-100 w-2/3"></div>
            </div>
            <div className="bg-white p-8 md:p-10 shadow-xl border border-[var(--border-light)] h-96">
              <div className="h-6 bg-gray-200 w-1/2 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-gray-50 rounded-sm border border-[var(--border-light)]"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="bg-white p-8 shadow-xl border border-[var(--border-light)] h-[400px]">
            <div className="h-6 bg-gray-200 w-2/3 mb-6"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 bg-gray-50 border-b border-[var(--border-light)]/50"></div>
              ))}
            </div>
            <div className="mt-10 h-14 bg-gray-200 w-full rounded-sm"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
