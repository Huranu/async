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
              <div className="space-y-6">
                <h4 className="font-semibold text-xl text-green-800">Бясалгалын хэсгүүд:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Амьсгалын бясалгал",
                      duration: "10 минут",
                      image: "https://picsum.photos/300/200?random=1",
                      link: "https://www.youtube.com/watch?v=enJyOTvEn4M"
                    },
                    {
                      title: "Биеийн танин мэдэхүйн бясалгал",
                      duration: "15 минут",
                      image: "https://picsum.photos/300/200?random=2",
                      link: "https://www.youtube.com/watch?v=HMOfD3VSbQ4"
                    },
                    {
                      title: "Амрах бясалгал",
                      duration: "20 минут",
                      image: "https://picsum.photos/300/200?random=3",
                      link: "https://www.youtube.com/watch?v=NP310Q7ClBU"
                    },
                    {
                      title: "Яаралтай тусламжийн 7 арга",
                      duration: "12 минут",
                      image: "https://picsum.photos/300/200?random=4",
                      link: "https://www.youtube.com/watch?v=whrN7ujh3Yk4"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-40 object-cover transition-opacity group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white rounded-full p-3">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <h5 className="text-white font-semibold text-lg">{item.title}</h5>
                        <p className="text-green-200 text-sm">{item.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    🎧 Хүссэн бясалгалаа сонгоод эхлүүлээрэй. Нэг удаагийн бясалгал нь таны стрессийг 40% бууруулна гэдгийг судалгаа харуулжээ.
                  </p>
                </div>
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
          <div className="space-y-6">
            <h4 className="font-semibold text-xl text-sky-800">Тархины идэвхжүүлэгч тоглоомууд:</h4>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Санах ойн тоглоом",
                  desc: "Дүрсүүдийг цэгцлэх",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1m-2 1l2-1m-2 1v2.5M20 4l-2-1m2 1l2-1m-4 1v2.5M6 10l-2 1m2-1l-2-1m4 1v2.5M6 4l-2-1m4 1l-2-1m-2 1v2.5" />
                    </svg>
                  ),
                  progress: 65,
                  link: "/games/memory",
                  color: "bg-blue-100"
                },
                {
                  title: "Тооны хурдны тоглолт",
                  desc: "30 секундын сорилт",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  progress: 40,
                  link: "/games/math",
                  color: "bg-green-100"
                },
                {
                  title: "Үгний бэлэн байдал",
                  desc: "Анхаарлын тоглоом",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  progress: 85,
                  link: "/games/words",
                  color: "bg-purple-100"
                }
              ].map((game, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.location.href = game.link}
                >
                  <div className={`${game.color} w-14 h-14 rounded-lg flex items-center justify-center text-3xl mb-3`}>
                    {game.icon}
                  </div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">{game.title}</h5>
                  <p className="text-sm text-gray-600 mb-3">{game.desc}</p>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${game.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{game.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
      
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-800">Өдөр тутмын дасгал!</h5>
                  <p className="text-sm text-blue-700">15 минутын оюуны дасгал нь тархины үйл ажиллагааг 27%-иар нэмэгдүүлнэ</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Хөгжим сонсох",
        desc: "Тайвшруулагч хөгжим, байгалийн дууны сангаас сонголт хийж, тайвнаж амраарай",
        bg: "from-amber-100 to-orange-100",
        label: "Амралт ба хөгжим",
        emoji: "🎵",
        content: (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h4 className="font-semibold text-lg text-orange-800 mb-4">Тунгалаг хөгжим:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Байгалийн дуу шивнээ",
                    duration: "1 цаг",
                    image: "https://i.pinimg.com/474x/a3/bd/99/a3bd99ff636a9cd1c51b07c65f1aae60.jpg",
                    youtubeId: "vNfs7VU_hrQ"
                  },
                  {
                    title: "Тибетын хонхны дуу",
                    duration: "45 мин",
                    image: "https://i.pinimg.com/474x/9e/1b/56/9e1b567a5445db392298cd5affa4239e.jpg",
                    youtubeId: "vNfs7VU_hrQ"
                  },
                  {
                    title: "Яруу найраглал",
                    duration: "30 мин",
                    image: "https://i.pinimg.com/736x/51/fa/0a/51fa0a437b9a657020dc65781c4f0789.jpg",
                    youtubeId: "vNfs7VU_hrQ"
                  },
                  {
                    title: "Цэвэр агаар мэт",
                    duration: "1 цаг",
                    image: "https://i.pinimg.com/474x/ff/01/ed/ff01ed9b21fdae1cad196904b587ecd7.jpg",
                    youtubeId: "vNfs7VU_hrQ"
                  }
                ].map((music, index) => (
                  <div 
                    key={index}
                    className="group relative cursor-pointer rounded-lg overflow-hidden"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${music.youtubeId}`, '_blank')}
                  >
                    <img
                      src={music.image}
                      alt={music.title}
                      className="w-full h-32 object-cover transition-opacity group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <div className="text-white">
                        <h5 className="font-medium">{music.title}</h5>
                        <p className="text-sm opacity-80">{music.duration}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs">
                      ▶️ Тоглох
                    </div>
                  </div>
                ))}
              </div>
      
              <div className="mt-4 text-center text-sm text-orange-600">
                🎧 Чихэвч зүүж, амралтаа эхлүүлээрэй
              </div>
            </div>

    
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