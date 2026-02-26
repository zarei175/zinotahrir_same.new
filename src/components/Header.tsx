"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  ChevronDown,
  MapPin,
  Phone,
  Bookmark,
} from "lucide-react";

const categories = [
  { name: "خودکار", icon: "✏️" },
  { name: "دفتر", icon: "📓" },
  { name: "روبیک", icon: "🎲" },
  { name: "فانتزی", icon: "🎀" },
  { name: "مداد رنگی", icon: "🖍️" },
  { name: "تراش", icon: "✂️" },
  { name: "بازی فکری", icon: "🧩" },
  { name: "تلسکوپ", icon: "🔭" },
];

const navLinks = [
  { name: "گروه کالاها", icon: Menu },
  { name: "نشان‌های تجاری", icon: Bookmark },
  { name: "کاتالوگ و لیست قیمت", icon: null },
  { name: "آکادمی", icon: null },
  { name: "از زبان شما", icon: null },
  { name: "داستان ما", icon: null },
  { name: "تور مجازی زینو", icon: null },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/3895683912/2903917159.png"
                alt="زینو تحریر"
                className="h-10 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:block">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="نام کالا، کد کالا، برند و یا دسته مورد نظر خود را به فارسی جستجو کنید ..."
                  className="w-full pr-12 pl-4 py-6 rounded-xl border-2 border-gray-200 focus:border-primary bg-gray-50 text-sm"
                />
                <Button
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 rounded-lg h-9 w-9"
                >
                  <Search className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="py-4">
                    <div className="mb-6">
                      <img
                        src="https://ext.same-assets.com/3895683912/2903917159.png"
                        alt="زینو تحریر"
                        className="h-8 w-auto"
                      />
                    </div>
                    <nav className="space-y-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href="#"
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{link.name}</span>
                        </a>
                      ))}
                    </nav>
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-bold mb-3 text-gray-800">دسته‌بندی‌ها</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((cat) => (
                          <a
                            key={cat.name}
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
                          >
                            <span>{cat.icon}</span>
                            <span>{cat.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Bookmark */}
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bookmark className="h-5 w-5 text-gray-600" />
              </Button>

              {/* Login/Register */}
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 rounded-xl border-2"
              >
                <User className="h-5 w-5" />
                <span>ورود</span>
                <span className="text-gray-400">|</span>
                <span>ثبت نام</span>
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="relative"
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -left-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ۰
                </span>
              </Button>

              {/* Location */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex bg-secondary/10 text-secondary rounded-full"
              >
                <MapPin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:block border-b border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-6 py-2">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                <Menu className="h-5 w-5" />
                <span>گروه کالاها</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Nav Links */}
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>نشان‌های تجاری</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>کاتالوگ و لیست قیمت</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>آکادمی</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>از زبان شما</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>داستان ما</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>تور مجازی زینو</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="hidden md:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-secondary transition-colors">
                سوالات متداول
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium"
              >
                <span>جشنواره‌های فروش</span>
                <span className="text-lg">🎁</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-3 bg-white border-b">
        <div className="relative">
          <Input
            type="text"
            placeholder="جستجو کنید ..."
            className="w-full pr-12 pl-4 py-5 rounded-xl border-2 border-gray-200 focus:border-primary bg-gray-50"
          />
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 rounded-lg h-8 w-8"
          >
            <Search className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}
