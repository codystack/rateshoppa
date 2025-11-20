"use client";

export default function Cta() {
  return (
    <section
      className="
        relative w-full max-w-7xl mx-auto py-30 mt-20 mb-20 lg:rounded-3xl overflow-hidden
        p-10 flex flex-col md:flex-row items-center
        bg-[url('/cta-bg.jpg')]
        bg-cover bg-top bg-no-repeat
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex-1 space-y-6 max-w-xl pl-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl uppercase font-black text-white mb-0">
         Compare the best exchange rates
        </h1>

        <p className="text-white text-lg">
          We’re building the best way to move and manage the world’s money. Min fees. Max ease. Full speed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://app.rateshoppa.com/signup"
              className="px-12 py-3 bg-[#B6EA25] text-[#084040] rounded hover:bg-[#96c80e] hover:text-[#084040] transition"
            >
              Get started
            </a>
        </div>
      </div>
    </section>
  );
}