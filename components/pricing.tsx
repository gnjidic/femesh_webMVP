"use client";

import { useState } from "react";

const pricingPlans = {
  monthly: [
    { title: "Basic", price: "$", features: ["Basic Feature", "Basic Feature", "Basic Feature"] },
    { title: "Pro", price: "$", features: ["Advanced Feature", "Advanced Feature", "Advanced Feature"], highlight: true },
    { title: "Advanced", price: "$", features: ["Pro Feature", "Pro Feature", "Pro Feature"] },
  ],
  annually: [
    { title: "Basic", price: "$", features: ["Basic Feature", "Basic Feature", "Basic Feature"] },
    { title: "Pro", price: "$", features: ["Advanced Feature", "Advanced Feature", "Advanced Feature"], highlight: true },
    { title: "Advanced", price: "$", features: ["Pro Feature", "Pro Feature", "Pro Feature"] },
  ],
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white mb-6">Pricing Plans</h2>

      {/* Custom Toggle Switch */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-400">Monthly</span>
        <div
          className={`relative w-14 h-8 flex items-center bg-gray-700 rounded-full p-1 cursor-pointer transition ${billingCycle === "annually" ? "bg-[#003840]" : ""}`}
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${billingCycle === "annually" ? "translate-x-6" : ""}`}
          ></div>
        </div>
        <span className="text-gray-400">Annually <span className="text-[#cfffff]">(Save 20%)</span></span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {pricingPlans[billingCycle].map((plan) => (
          <div
            key={plan.title}
            className={`relative bg-gray-900 p-8 rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105
              ${plan.highlight ? "border-2 border-[#cfffff] scale-105" : "border border-gray-700"}`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cfffff] text-gray-900 px-4 py-1 text-xs font-semibold rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
            <p className="text-4xl font-bold text-white mt-2">{plan.price}<span className="text-lg">/{billingCycle === "monthly" ? "mo" : "yr"}</span></p>
            <ul className="mt-4 text-gray-400 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-[#cfffff] text-gray-900 py-2 rounded-lg font-semibold hover:bg-[#cfffff] transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
