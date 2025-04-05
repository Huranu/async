"use client";

import { useState } from "react";

export default function ResetStressPage() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const cards = [
    {
      title: "Бясалгалууд",
      desc: "Олон төрлийн тайвшруулах бясалгал, унтах үлгэр, яаралтай тусламжийн хэсгүүдийг агуулсан.",
      bg: "from-green-200 to-lime-100",
      label: "Бясалгал",
      emoji: "🌿",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Бясалгалын хэсгүүд:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Амьсгалын бясалгал (10 минут)</li>
            <li>Биеийн танин мэдэхүйн бясалгал (15 минут)</li>
            <li>Унтрах бясалгал (20 минут)</li>
            <li>Яаралтай тусламжийн 7 хэвийн арга</li>
          </ul>
        </div>
      )
    },
    {
      title: "Оюуны дасгал",
      desc: "Санах ой, анхаарал, сэтгэх хурдыг хөгжүүлэх гурван төрлийн тоглоомтой.",
      bg: "from-pink-100 to-sky-200",
      label: "Оюуны тоглоом",
      emoji: "🧠",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Оюуны тоглоомууд:</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <h5 className="font-medium mb-1">Санах ойн тоглоом</h5>
              <p className="text-sm">Картуудыг дарж дүрсийг сана</p>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <h5 className="font-medium mb-1">Хурдны тоолол</h5>
              <p className="text-sm">Тоонуудыг хурдан нэмэх</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Талархлын дадал",
      desc: "Өдөр бүр жижиг сайн зүйлсэд талархах дадал хэвшүүл.",
      bg: "from-yellow-100 to-orange-100",
      label: "Талархал",
      emoji: "🙏",
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Өнөөдрийн талархал:</h4>
          <textarea 
            className="w-full h-32 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-200"
            placeholder="Өнөөдөр би юунд талархлаа илэрхийлэх вэ?..."
          />
          <button className="bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg transition-colors">
            Хадгалах
          </button>
        </div>
      )
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  const closeModal = () => {
    setSelectedCardIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      {selectedCardIndex !== null && (
        <div 
          className="fixed inset-0 bg-white[200] bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className={`bg-gradient-to-br ${cards[selectedCardIndex].bg} rounded-2xl p-6 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
            >
              ✕
            </button>
            <div className="text-4xl mb-3">{cards[selectedCardIndex].emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {cards[selectedCardIndex].title}
            </h3>
            {cards[selectedCardIndex].content}
          </div>
        </div>
      )}

      <div className={`${selectedCardIndex !== null ? 'blur-sm' : ''} transition-all duration-300`}>
        <header className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-950">mindbooster</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#">Хэрхэн ажилладаг вэ</a>
            <a href="#">Бидний тухай</a>
            <a href="#">Нөөц</a>
          </nav>
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
                onClick={() => handleCardClick(index)}
                className={`bg-gradient-to-br ${card.bg} rounded-2xl p-6 cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-xl hover:rotate-1 hover:animate-shake max-w-[370px] h-[300px] mx-auto`}
              >
                <div className="text-4xl mb-3">{card.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

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