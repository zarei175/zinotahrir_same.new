import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CountdownBanner from "@/components/CountdownBanner";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const bestSellingProducts = [
  {
    id: 1,
    name: "خودکار آبی ۰/۷ دکتر پنتر کد DP105",
    image: "https://ext.same-assets.com/3895683912/2382328451.jpeg",
    quantity: "تعداد در بسته = ۵۰ عدد",
  },
  {
    id: 2,
    name: "گواش پارس سفید کد ۱۵*کارتن ۲۴بسته‌ای*",
    image: "https://ext.same-assets.com/3895683912/342953404.jpeg",
    quantity: "تعداد در جعبه = ۶ عدد",
    badge: "فقط فروش نقدی",
  },
  {
    id: 3,
    name: "روان نویس فشاری ساراساکلیپ آبی ۰/۷ زبرا (۵ع...)",
    image: "https://ext.same-assets.com/3895683912/3453304934.jpeg",
    quantity: "تعداد در بسته = ۱۰ عدد",
  },
  {
    id: 4,
    name: "تراش مخزن دار تک سوراخ طرح حباب دونو کد ۵...",
    image: "https://ext.same-assets.com/3895683912/3758485188.jpeg",
    quantity: "تعداد در بسته = ۲۴ عدد",
  },
  {
    id: 5,
    name: "پوشه زیپ دار ۵ فانتزی",
    image: "https://ext.same-assets.com/3895683912/2471837540.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 6,
    name: "برچسب اسم دانش آموز طرح کرومی لانگو",
    image: "https://ext.same-assets.com/3895683912/2933682267.jpeg",
    quantity: "تعداد در بسته = ۱۰ ست",
  },
];

const newestProducts = [
  {
    id: 7,
    name: "دفتریادداشت ۱۰۰ برگ فانتزی ۱۰*اسخت سری راند...",
    image: "https://ext.same-assets.com/3895683912/101850864.jpeg",
    quantity: "تعداد در بسته = ۶ جلد",
  },
  {
    id: 8,
    name: "پوشه زیپ دار ۴ فانتزی",
    image: "https://ext.same-assets.com/3895683912/4291064798.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 9,
    name: "پاکن برقی استورم*کارتن ۱۲بسته‌ای*کد HL-384",
    image: "https://ext.same-assets.com/3895683912/775317910.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 10,
    name: "ماژیک اکریلیک ۸ رنگ وای پلاس کد...",
    image: "https://ext.same-assets.com/3895683912/1497574251.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 11,
    name: "خودکار پنتر ۰/۷ آبی کد SP-101",
    image: "https://ext.same-assets.com/3895683912/640048468.jpeg",
    quantity: "تعداد در بسته = ۵۰ عدد",
  },
  {
    id: 12,
    name: "مداد رنگی ۱۲ رنگ جعبه فلزی",
    image: "https://ext.same-assets.com/3895683912/2095690605.jpeg",
    quantity: "تعداد در بسته = ۶ عدد",
  },
];

const mostViewedProducts = [
  {
    id: 13,
    name: "روان نویس ۰/۵ آبی پنتر",
    image: "https://ext.same-assets.com/3895683912/1001033183.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 14,
    name: "دفتر ۶۰ برگ سیمی طرح فانتزی",
    image: "https://ext.same-assets.com/3895683912/4054991286.jpeg",
    quantity: "تعداد در بسته = ۱۰ جلد",
  },
  {
    id: 15,
    name: "پاک کن سفید کنکو",
    image: "https://ext.same-assets.com/3895683912/1852685308.jpeg",
    quantity: "تعداد در بسته = ۳۰ عدد",
  },
  {
    id: 16,
    name: "مداد مشکی HB فابر کاستل",
    image: "https://ext.same-assets.com/3895683912/280992417.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 17,
    name: "چسب مایع ۵۰ میل پارس",
    image: "https://ext.same-assets.com/3895683912/1081314321.jpeg",
    quantity: "تعداد در بسته = ۱۲ عدد",
  },
  {
    id: 18,
    name: "خط کش ۳۰ سانتی شفاف",
    image: "https://ext.same-assets.com/3895683912/552411480.jpeg",
    quantity: "تعداد در بسته = ۲۴ عدد",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Banner */}
        <HeroBanner />

        {/* Countdown Banner */}
        <CountdownBanner />

        {/* Categories */}
        <Categories />

        {/* Best Selling Products */}
        <ProductSection
          title="پرفروش‌ترین محصولات فروشگاه"
          titleColor="secondary"
          products={bestSellingProducts}
        />

        {/* Banner Images */}
        <section className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://ext.same-assets.com/3895683912/3597046801.jpeg"
                alt="بنر"
                className="w-full h-auto"
              />
            </a>
            <a href="#" className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://ext.same-assets.com/3895683912/4236383055.jpeg"
                alt="بنر"
                className="w-full h-auto"
              />
            </a>
            <a href="#" className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://ext.same-assets.com/3895683912/3189318603.jpeg"
                alt="بنر"
                className="w-full h-auto"
              />
            </a>
          </div>
        </section>

        {/* Newest Products */}
        <ProductSection
          title="جدیدترین محصولات فروشگاه"
          titleColor="secondary"
          products={newestProducts}
        />

        {/* Most Viewed Products */}
        <ProductSection
          title="پربازدیدترین محصولات فروشگاه"
          titleColor="secondary"
          products={mostViewedProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
