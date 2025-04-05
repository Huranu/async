import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface ChartData {
    name: string;
    value: number;
}

interface ChartCardProps {
    name: string;
    data: ChartData[];
    color: string;
    bg: string;
}

export default function ChartCard({ name, data, color, bg }: ChartCardProps) {
    return (
        <Card className={`w-[400px] p-4 rounded-2xl bg-gradient-to-br ${bg} shadow-xl`}>
            <CardContent className="flex flex-col gap-4">
                <div className="text-sm text-gray-500 font-medium">{name}</div>
                <div className="flex items-center gap-5 justify-between">
                    <div className="text-3xl font-semibold text-gray-800">56.12%</div>
                    <div className="text-sm text-green-500 font-semibold flex items-center gap-1">
                        <ArrowUpRight className="w-4 h-4" />
                        +12% <span className="text-gray-400 font-normal">Энэ долоо хоногт</span>
                    </div>
                </div>
                <div className="w-full h-40">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis hide dataKey="name" />
                            <YAxis hide domain={[0, 50]} />
                            <Tooltip cursor={false} />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke={color}
                                strokeWidth={3}
                                dot={{ r: 3, fill: color }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
