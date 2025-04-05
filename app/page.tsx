'use client';
import ChartCard from "./_components/chart-card";
import { Button } from "@/components/ui/button";
import QuizList from "./_components/quiz-list";
import FeatButton from "./_components/feat-button";
import Exam from "./_assets/exam-time.png"
import Chill from "./_assets/chill-out.png"

const memoryData = [
  { name: "Mon", value: 35 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 20 },
  { name: "Thu", value: 30 },
  { name: "Fri", value: 40 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 40 },
];
const stressData = [
  { name: "Mon", value: 40 },
  { name: "Tue", value: 20 },
  { name: "Wed", value: 25 },
  { name: "Thu", value: 61 },
  { name: "Fri", value: 53 },
  { name: "Sat", value: 30 },
  { name: "Sun", value: 40 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-950">mindbooster</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#">Хэрхэн ажилладаг вэ</a>
          <a href="#">Бидний тухай</a>
          <a href="#">Нөөц</a>
        </nav>
      </header>

      <section className="px-6 py-10">
        <div className="flex flex-row justify-center gap-5">
          <div className="grid grid-cols-2 gap-4">
            <ChartCard name="Таны ой тогтоолтын оноо" data={memoryData} bg="from-pink-100 to-sky-200" color="#FF6DC6" />
            <ChartCard name="Таны стрессийн түвшин" data={stressData} bg="from-cyan-100 to-pink-200" color="#D48E43" />
            <FeatButton title="Мэдлэгээ бататгая" desc="Тухайн агуулгыг оруулан шалгалт өгөөрэй." url="reset" icon={Exam} />
            <FeatButton title="Стрессээс ангижир" desc="Таны стрессийг тайлах орчин." url="quiz" icon={Chill} />
          </div>
          <div className="border-l-2 pl-5 border-gray-200">
            <QuizList />
          </div>
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
