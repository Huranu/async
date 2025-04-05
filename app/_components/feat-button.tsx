import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeatButtonProps {
    title: string;
    desc: string;
    url: string;
    icon: any;
}

export default function FeatButton({ title, desc, url, icon }: FeatButtonProps) {
    const router = useRouter();
    const handleCardClick = (url: string) => {
        router.push(`/${url}`)
    }
    return (
        <div
            onClick={() => handleCardClick(url)}
            className={`bg-white rounded-2xl p-6 cursor-pointer transform transition duration-300 shadow-xl hover:bg-gray-100 hover:scale-105 hover:shadow-3xl`}
        >
            <Image src={icon} height={80} width={80} alt={title} className='mb-3' />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-700">{desc}</p>
        </div>
    )
}
