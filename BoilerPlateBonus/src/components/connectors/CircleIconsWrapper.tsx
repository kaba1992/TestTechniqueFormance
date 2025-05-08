import React, { useRef } from "react"
import ConnectorsIcones from "./connectorsIcones"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import emitter from "../../utils/EventEmitter"

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
	const linesRef = useRef<(HTMLSpanElement | null)[]>([])

	useGSAP(() => {
		gsap.set(centerRef.current, { scale: 0 })
		linesRef.current.forEach((line) => {
			if (line) gsap.set(line, { scaleX: 0 })
		})
		gsap.to(centerRef.current, {
			scale: 1,
			duration: 0.5,
			ease: "elastic.inOut, 0.5",
			onComplete: () => {
				emitter.emit("startReveal")
				gsap.to(containerRef.current, {
					rotation: 360,
					duration: 30,
					ease: "linear",
					repeat: -1,
				})
				// Animate lines
				linesRef.current.forEach((line, i) => {
					if (line) {
						gsap.to(line, {
							scaleX: 1,
							duration: 0.5,
							delay: i * 0.08,
							ease: "power2.out",
						})
					}
				})
			},
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
					const iconSize = 65 // taille réelle de l'icône
					const x = Math.cos(angle - Math.PI / 2) * radius + size / 2
					const y = Math.sin(angle - Math.PI / 2) * radius + size / 2
					const deg = (angle * 180) / Math.PI

					return (
						<>
							<span
								ref={(el) => {
									linesRef.current[i] = el
								}}
								style={{
									position: "absolute",
									left: size / 2,
									top: size / 2,
									width: radius,
									height: 1,
									background: "white",
									transform: `rotate(${deg + 15}deg)`,
									transformOrigin: "0 50%",
									zIndex: -1,
									borderRadius: 2,
									opacity: 0.7,
								}}
							/>
							<div
								style={{
									position: "absolute",
									left: x - iconSize / 2,
									top: y - iconSize / 2,
									width: iconSize,
									height: iconSize,
								}}>
								<ConnectorsIcones {...icon} />
							</div>
						</>
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
