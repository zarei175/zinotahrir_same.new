"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 51,
    hours: 19,
    minutes: 17,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString("fa-IR");
  };

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="bg-gradient-to-l from-[#8B1538] to-[#C41E3A] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Right Side - Text */}
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  فوری
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">
                آخرین فرصت سفارش در سال ۱۴۰۴
              </h2>
              <p className="text-white/80 text-sm mt-1 flex items-center gap-2">
                <span>⚠️</span>
                <span>۸ اسفند ۱۴۰۴ آخرین مهلت ثبت سفارش</span>
              </p>
            </div>
          </div>

          {/* Center - Countdown */}
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="bg-white text-[#8B1538] rounded-xl px-4 py-2 min-w-[60px]">
                <span className="text-2xl font-bold fa-num">
                  {formatNumber(timeLeft.seconds)}
                </span>
              </div>
              <span className="text-xs text-white/80 mt-1 block">ثانیه</span>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="text-center">
              <div className="bg-white text-[#8B1538] rounded-xl px-4 py-2 min-w-[60px]">
                <span className="text-2xl font-bold fa-num">
                  {formatNumber(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-xs text-white/80 mt-1 block">دقیقه</span>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="text-center">
              <div className="bg-white text-[#8B1538] rounded-xl px-4 py-2 min-w-[60px]">
                <span className="text-2xl font-bold fa-num">
                  {formatNumber(timeLeft.hours)}
                </span>
              </div>
              <span className="text-xs text-white/80 mt-1 block">ساعت</span>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="text-center">
              <div className="bg-white/20 border-2 border-white/30 rounded-xl px-4 py-2 min-w-[60px]">
                <span className="text-2xl font-bold fa-num">
                  {formatNumber(timeLeft.days)}
                </span>
              </div>
              <span className="text-xs text-white/80 mt-1 block">روز</span>
            </div>
          </div>

          {/* Left Side - Button */}
          <Button
            variant="outline"
            className="bg-white text-[#8B1538] hover:bg-white/90 border-0 rounded-xl px-6 py-6 font-medium"
          >
            همین الان سفارش بده
            <ArrowLeft className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
