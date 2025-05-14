import Image from "next/image"
import { Clock } from "lucide-react"

interface BlogCardProps {
  title: string
  description: string
  date: string
  image?: string
  className?: string
}

function BlogCard({ title, description, date, image, className }: BlogCardProps) {
  return (
    <div 
      className={`
        bg-[#1c1c1c] 
        rounded-2xl 
        overflow-hidden 
        w-full
        max-w-md 
        mx-auto 
        transform
        ${className || ''}
      `}
    >
      <div className="relative w-full h-[200px] md:h-[300px]">
        <Image
          src={image}
          alt={title}
          fill
          className="relative z-10 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white uppercase mb-2">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
          <Clock className="h-4 w-4" />
          {date}
        </div>
      </div>
    </div>
  )
}

export { BlogCard }