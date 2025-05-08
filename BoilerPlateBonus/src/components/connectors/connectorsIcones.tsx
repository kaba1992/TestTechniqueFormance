import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import emitter from "../../utils/EventEmitter"

interface ConnectorsIconesProps {
	readonly src: string
	readonly alt: string
	readonly delay: number
}

export default function ConnectorsIcones({
	src,
	alt,
	delay,
}: ConnectorsIconesProps) {
	const imgRef = useRef<HTMLImageElement>(null)

	useGSAP(
		() => {
			emitter.on("startReveal", () => {
				gsap.to(imgRef.current, {
					scale: 1,
					duration: 0.5,
					delay: delay,
					ease: "elastic.inOut, 0.5",
				})
			})

			gsap.set(imgRef.current, {
				scale: 0,
			})
		},
		{ scope: imgRef }
	)

	const { contextSafe } = useGSAP({ scope: imgRef })

	const handleMouseEnter = contextSafe(() => {
		gsap.to(imgRef.current, {
			scale: 1.4,
			duration: 0.3,
			ease: "power2.inOut",
		})
	})

	const handleMouseLeave = contextSafe(() => {
		gsap.to(imgRef.current, {
			scale: 1,
			duration: 0.3,
			ease: "power2.inOut",
		})
	})

	return (
		<img
			className="w-[65px]   rounded p-2"
			src={src}
			alt={alt}
			ref={imgRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		/>
	)
}
