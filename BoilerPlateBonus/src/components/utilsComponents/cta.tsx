import React from "react"

interface CtaProps {
	readonly title: string
	readonly src: string
	readonly alt: string
	readonly width: number
}

export default function Cta({ title, src, alt, width }: CtaProps) {
	return (
		<div className="grid grid-cols-[30px_1fr] gap-1 place-items-center text-lg text-[#8F9BA8] px-2 h-[34px]  rounded-[8px] w-fit mb-2 border-2 border-[#31363F] hover:border-[#515761] transition-all duration-300 cursor-pointer">
			<img src={src} style={{ width: `${width}px` }} className={`h-auto  rounded hover:`} alt={alt} />
			<h3>{title}</h3>
		</div>
	)
}
