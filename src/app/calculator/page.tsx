import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator - NextJS Starter Kit",
  description: "Calculate anything",
};

export default function Calculator() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Calculator
    </div>
  );
}
