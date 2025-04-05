"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type QuizResult = {
    topic: string;
    date: string;
    score: string;
    avatar?: string;
};

const quizResults: QuizResult[] = [
    { topic: "Програм хангамж гэж юу вэ?", date: "2024-07-26", score: "92%" },
    { topic: "Програм хангамжийн хөгжүүлэлтийн үе шат", date: "2024-07-20", score: "85%" },
    { topic: "Нээлттэй эхийн програм хангамжийн давуу тал", date: "2024-07-15", score: "78%" },
    { topic: "Програм хангамжийн чанарын шалгуур үзүүлэлтүүд", date: "2024-07-10", score: "88%" },
    { topic: "Үүлэн тооцоолол (Cloud Computing) ба програм хангамж", date: "2024-07-05", score: "90%" },
    { topic: "Хөндлөн платформ (Cross-platform) програм хангамж", date: "2024-06-30", score: "82%" },
    { topic: "Програм хангамжийн тестлэлт ба автоматжуулалт", date: "2024-06-25", score: "95%" },
    { topic: "Agile аргачлал ба программ хангамжийн хөгжүүлэлт", date: "2024-06-20", score: "69%" },
    { topic: "Програм хангамжийн лиценз ба эрхийн асуудал", date: "2024-06-15", score: "40%" },
];

export default function QuizList() {
    return (
        <Card className="bg-gradient-to-br from-pink-100 to-sky-200 text-black w-full max-w-md rounded-2xl h-[500px]">
            <CardContent className="p-6 flex flex-col h-full">
                <h2 className="text-lg font-semibold mb-1">Өмнөх шалгалтууд</h2>
                <p className="text-sm text-gray-400 mb-4">
                    Та нийт <span className="font-medium">{quizResults.length}</span> удаа шалгалт өгсөн байна.
                </p>
                <div className="space-y-4 overflow-y-auto overflow-x-hidden pr-2" style={{ maxHeight: "350px" }}>
                    {quizResults.map((quiz, index) => {
                        const scoreNumber = parseInt(quiz.score);
                        let scoreColor = "text-red-500"; // Default red for low scores

                        if (scoreNumber >= 85) {
                            scoreColor = "text-green-500"; // Green for high scores
                        } else if (scoreNumber >= 50) {
                            scoreColor = "text-orange-500"; // Orange for medium scores
                        }

                        return (
                            <div key={index} className="flex items-center p-2 justify-between cursor-pointer hover:bg-gray-100 rounded-lg transition duration-200 ease-in-out">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={quiz.avatar || ""} alt={quiz.topic} />
                                        <AvatarFallback className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">{quiz.topic[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium line-clamp-1">{quiz.topic}</p>
                                        <p className="text-xs text-gray-400">{quiz.date}</p>
                                    </div>
                                </div>
                                <div className={`text-sm font-semibold ${scoreColor}`}>{quiz.score}</div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
