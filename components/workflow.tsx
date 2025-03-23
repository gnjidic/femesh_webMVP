"use client";

import Image from "next/image";

export default function Workflow() {
  return (
    <section className="pt-32 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-12">Workflow in 4 Simple Steps:</h2>
      <div className="max-w-5xl w-full flex flex-col space-y-16 relative">
        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src="/22.png" alt="Step 1" width={500} height={500} className="rounded-xl shadow-lg" />
          <div />
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div />
          <Image src="/33.png" alt="Step 2" width={500} height={500} className="rounded-xl shadow-lg" />
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src="/44.png" alt="Step 3" width={500} height={500} className="rounded-xl shadow-lg" />
          <div />
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div />
          <Image src="/55.png" alt="Step 4" width={500} height={500} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}