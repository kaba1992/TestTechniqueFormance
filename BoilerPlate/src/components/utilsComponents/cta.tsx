import React from "react"

interface CtaProps {
	readonly title: string
	readonly src: string
	readonly alt: string
}

export default function Cta({ title, src, alt }: CtaProps) {
	return (
		<div className="flex items-center text-lg text-[#8F9BA8] px-2  rounded-[8px] w-fit mb-2 border-2 border-[#31363F] hover:border-[#515761] transition-all duration-300 cursor-pointer">
      <img src={src} className="w-8 h-8 p-2 rounded hover:" alt={alt} />
			<span>{title}</span>
		</div>
	)
}
