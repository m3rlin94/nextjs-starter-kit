import { Metadata } from "next";

export const metadata: Metadata = {
title: "FAQ - NextJS Starter Kit",
description: "Find answers to common questions about the calculator",
};

export default function Faq() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        FAQ
      </div>
    );
}
  