'use client';
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { SendMoney } from "@/app/components/SendMoney";


export default function Home() {
  return (
    <div>
      <Hero />
      <SendMoney />

      <Footer />
    </div>
  );
}
