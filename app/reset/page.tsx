"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const cards = [
    {
      title: "Сэтгэл хөдлөл бүртгэгч",
      desc: "Тогтмол хугацаанд өөрийн мэдрэмж, сэтгэл хөдлөлийг тэмдэглэж хэвшээрэй.",
      bg: "from-purple-200 to-blue-200",
      label: "Сэтгэл хөдлөл",
      emoji: "🧘‍♀️",
    },
    {
      title: "Бясалгалууд",
      desc: "Олон төрлийн тайвшруулах бясалгал, унтах үлгэр, яаралтай тусламжийн сессүүдийг агуулсан.",
      bg: "from-green-200 to-lime-100",
      label: "Бясалгал",
      emoji: "🌿",
    },
    {
      title: "Оюуны дасгал",
      desc: "Санах ой, анхаарал, сэтгэх хурдыг хөгжүүлэх гурван төрлийн тоглоомтой.",
      bg: "from-pink-100 to-sky-200",
      label: "Оюуны тоглоом",
      emoji: "🧠",
    },
    {
      title: "Талархлын дадал",
      desc: "Өдөр бүр жижиг сайн зүйлсэд талархах дадал хэвшүүл.",
      bg: "from-yellow-100 to-orange-100",
      label: "Талархал",
      emoji: "🙏",
    },
    {
      title: "Зорилгоо төлөвлөх",
      desc: "Зорилго тавих нь мэдлэг олж авах, цагаа зөв хуваарилахад тусална.",
      bg: "from-cyan-100 to-pink-200",
      label: "Зорилго",
      emoji: "📋",
    },
  ];

  const handleCardClick = (title: string) => {
    alert(`Та "${title}" карт дээр дарлаа!`);
    // or redirect: router.push("/some-page")
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-950">keepapp</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#">Хэрхэн ажилладаг вэ</a>
          <a href="#">Бидний тухай</a>
          <a href="#">Нөөц</a>
        </nav>
        <Button variant="outline" className="rounded-full px-6 py-1 text-sm">
          Бүртгүүлэх
        </Button>
      </header>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Explore your journey 🧭</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-full mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.title)}
              className={`bg-gradient-to-br ${card.bg} rounded-2xl p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl hover:rotate-1 hover:animate-shake`}
            >
              <div className="text-4xl mb-3">{card.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
          100% { transform: translateX(10px); }
        }

        .hover\:animate-shake:hover {
          animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
