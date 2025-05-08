import React, { useRef } from "react"
import ConnectorsIcones from "./connectorsIcones"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type Icon = { src: string; alt: string; delay: number }
type Props = {
	icons: Icon[]
	radius?: number
	size?: number
	center?: React.ReactNode
}

const CircleIconsWrapper = ({
	icons,
	radius = 120,
	size = 300,
	center,
}: Props) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const centerRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		gsap.to(containerRef.current, {
			rotation: 360,
			duration: 30,
			ease: "linear",
			repeat: -1,
		})
	})
	const { contextSafe } = useGSAP({ scope: containerRef })

	const handleMouseEnter = contextSafe(() => {
		gsap.to(containerRef.current, {
			scale: 0,
			duration: 0.5,
			ease: "power2.inOut",
		})
		gsap.to(centerRef.current, {
			scale: 2,
			duration: 0.5,
			ease: "power2.inOut",
		})
		gsap.to(centerRef.current, {
			rotation: 360,
			duration: 20,
			ease: "linear",
			repeat: -1,
		})

	})

	const handleMouseLeave = contextSafe(() => {
		gsap.to(containerRef.current, {
			scale: 1,
			duration: 0.5,
			ease: "power2.inOut",
		})
		gsap.to(centerRef.current, {
			scale: 1,
			duration: 0.5,
			ease: "power2.inOut",
		})
	// stop rota
	})

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				position: "relative",
				width: size,
				height: size,
				margin: "0 auto",
			}}>
			<div ref={containerRef} className="absolute w-full h-full" tabIndex={0}>
				{icons.map((icon, i) => {
					const angle = (i / icons.length) * 2 * Math.PI
					const x = Math.cos(angle - Math.PI / 2) * radius + size / 2 - 22 // 22 = icon size/2
					const y = Math.sin(angle - Math.PI / 2) * radius + size / 2 - 22
					return (
						<div
							key={icon.alt + i}
							style={{
								position: "absolute",
								left: x,
								top: y,
							}}>
							<ConnectorsIcones {...icon} />
						</div>
					)
				})}
			</div>
			<div
				ref={centerRef}
				style={{
					position: "absolute",
					left: size / 2 - 30,
					top: size / 2 - 30,
					width: 60,
					height: 60,
					background: "#101114",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",

					zIndex: 2,
				}}>
				{center}
			</div>
		</div>
	)
}

export default CircleIconsWrapper
