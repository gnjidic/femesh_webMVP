"use client";

import Image from "next/image";

export default function Workflow() {
  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-12">How It Works</h2>
      <div className="max-w-5xl w-full flex flex-col space-y-16 relative">
        {/* Step 1 */}
        <div className="grid grid-cols-2 gap-8 items-center">
          <Image src="/fea.png" alt="Step 1" width={1000} height={1000} className="rounded-xl shadow-lg" />
          <div />
        </div>

        {/* Arrow 1 */}
        <div className="flex justify-center -mt-6">
            <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">
                <line x1="10" y1="25" x2="90" y2="25" stroke="white" strokeWidth="10" strokeLinecap="round" />
                <polygon points="75,10 100,25 75,40" fill="white" />
            </svg>
        </div>


        {/* Step 2 */}
        <div className="grid grid-cols-2 gap-8 items-center">
          <div />
          <Image src="/fea.png" alt="Step 2" width={1000} height={1000} className="rounded-xl shadow-lg" />
        </div>

        {/* Arrow 2 */}
        <div className="flex justify-center -mt-6">
            <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" transform="rotate(135)">
                <line x1="10" y1="25" x2="90" y2="25" stroke="white" strokeWidth="10" strokeLinecap="round" />
                <polygon points="75,10 100,25 75,40" fill="white" />
            </svg>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-2 gap-8 items-center">
          <Image src="/fea.png" alt="Step 3" width={1000} height={1000} className="rounded-xl shadow-lg" />
          <div />
        </div>

        {/* Arrow 3 */}
        <div className="flex justify-center -mt-6">
            <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)">
                <line x1="10" y1="25" x2="90" y2="25" stroke="white" strokeWidth="10" strokeLinecap="round" />
                <polygon points="75,10 100,25 75,40" fill="white" />
            </svg>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-2 gap-8 items-center">
          <div />
          <Image src="/fea.png" alt="Step 4" width={1000} height={1000} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
