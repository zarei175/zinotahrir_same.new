"use client";

import { Phone, Instagram, Send, ChevronDown } from "lucide-react";

const brands = [
  { name: "Luxor", image: "https://ext.same-assets.com/3895683912/3448918814.jpeg" },
  { name: "Mikro", image: "https://ext.same-assets.com/3895683912/1347397869.jpeg" },
  { name: "Woke", image: "https://ext.same-assets.com/3895683912/3557283353.jpeg" },
  { name: "Euroopen", image: "https://ext.same-assets.com/3895683912/926467526.jpeg" },
  { name: "Unitall", image: "https://ext.same-assets.com/3895683912/3852109682.jpeg" },
  { name: "Lyra", image: "https://ext.same-assets.com/3895683912/265024755.jpeg" },
  { name: "Monami", image: "https://ext.same-assets.com/3895683912/513302372.jpeg" },
  { name: "Wanda", image: "https://ext.same-assets.com/3895683912/3263292519.jpeg" },
];

const quickLinks1 = [
  { name: "خرید جامدادی", href: "#" },
  { name: "خرید سررسید", href: "#" },
  { name: "خرید تراش", href: "#" },
];

const quickLinks2 = [
  { name: "خرید دفتر", href: "#" },
  { name: "خرید روان نویس", href: "#" },
  { name: "خرید روبیک", href: "#" },
];

const quickAccess1 = [
  { name: "تور مجازی زینو", href: "#" },
  { name: "داستان زینو", href: "#" },
];

const quickAccess2 = [
  { name: "سوالات متداول", href: "#" },
  { name: "کاتالوگ و لیست قیمت", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white mt-8">
      {/* Stats Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p className="text-lg mb-2">بیش از</p>
            <h3 className="text-5xl md:text-6xl font-bold mb-2 fa-num">۲۰,۰۰۰</h3>
            <p className="text-xl">محصول</p>
            <p className="mt-4 text-white/80">
              همکاری با بیش از ۷۰ برند مطرح و فعال در کشور
            </p>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href="#"
              className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-xl p-2 flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                شماره‌های ارتباطی
              </h4>
              <div className="space-y-2">
                <a
                  href="tel:02633270931"
                  className="block text-gray-600 hover:text-primary transition-colors fa-num"
                >
                  ۰۲۶۳۳۲۷۰۹۳۱
                </a>
                <a
                  href="tel:02633400567"
                  className="block text-gray-600 hover:text-primary transition-colors fa-num"
                >
                  ۰۲۶۳۳۴۰۰۵۶۷
                </a>
                <a
                  href="tel:09163304360"
                  className="block text-gray-600 hover:text-primary transition-colors fa-num"
                >
                  ۰۹۱۶۳۳۰۴۳۶۰
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">لینک مفید</h4>
              <ul className="space-y-2">
                {quickLinks1.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span className="text-secondary">-</span>
                      {link.name}
                    </a>
                  </li>
                ))}
                {quickLinks2.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span className="text-secondary">-</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Access */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">دسترسی سریع</h4>
              <ul className="space-y-2">
                {quickAccess1.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span className="text-secondary">-</span>
                      {link.name}
                    </a>
                  </li>
                ))}
                {quickAccess2.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span className="text-secondary">-</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Media */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                زینو در رسانه‌ها
                <ChevronDown className="h-4 w-4" />
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Send className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>زینو آکادمی</p>
                <p>زینو تحریر</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <img
                src="https://ext.same-assets.com/3895683912/2333069447.png"
                alt="زینو"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm leading-7">
                رفع دغدغه تامین کالا با سبد کامل کالایی و بی نیاز کردن فروشگاه از مواجهه با طرف حساب بیشتر
                برای فروشگاه‌های همکار با زینو مهمترین رسالت زینو است لذا فروشگاه باید به جای اینکه بخشی از
                وقت و انرژی خود را صرف تامین کالا و تسویه با طرف حساب‌های متعدد کند؛ تمام انرژی خود را صرف
                فروش و توسعه فروش نماید. زینو با فروشگاه‌های همکار به مثابه شرکایی می‌نگرد که آنها در خط
                مقدم فروش هستن و زینو به عنوان پشتیبان به آنها خدمات رسانی می‌نماید.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mt-4 text-sm font-medium"
              >
                اطلاعات بیشتر
                <span>←</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            تمامی حقوق این سایت متعلق به زینو می‌باشد
          </p>
        </div>
      </div>
    </footer>
  );
}
