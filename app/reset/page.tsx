"use client";

// import { Button } from "@/components/ui/button";

export default function Home() {
  const cards = [

    {
      title: "Бясалгалууд",
      desc: "Олон төрлийн тайвшруулах бясалгал, унтах үлгэр, яаралтай тусламжийн хэсгүүдийг агуулсан.",
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
  
  ];

  const handleCardClick = (title: string) => {
    alert(`Та "${title}" карт дээр дарлаа!`);
    // or redirect: router.push("/some-page")
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-950">mindbooster</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#">Хэрхэн ажилладаг вэ</a>
          <a href="#">Бидний тухай</a>
          <a href="#">Нөөц</a>
        </nav>
        {/* <Button variant="outline" className="rounded-full px-6 py-1 text-sm">
          Бүртгүүлэх
        </Button> */}
      </header>
      <section className="px-6 py-10">
  <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
    Стресс бол зүгээр л дохио — одоо тайвшир🧭
  </h2>
  <h5 className="text-base font-medium text-center mb-8 text-gray-900">
    Таны тархи амрах эрхтэй. Одоо тайвширч, эрч хүчээ сэргээнэ үү.
  </h5>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto p-8">
    {cards.map((card, index) => (
      <div
        key={index}
        onClick={() => handleCardClick(card.title)}
        className={`bg-gradient-to-br ${card.bg} rounded-2xl p-6 cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-xl hover:rotate-1 hover:animate-shake max-w-[370px] h-[300px] mx-auto`}
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
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(10px);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(10px);
          }
        }

        .hover\:animate-shake:hover {
          animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
