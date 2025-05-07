import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import ConnectorsIcones from "../components/connectors/connectorsIcones"
import { connectorsData } from "../constants/connectorsData"
import Cta from "../components/utilsComponents/cta"
import { typingEffect } from "../customHooks/typingEffect"
import ReactTypingEffect from "react-typing-effect"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const LandingPage = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		console.log(containerRef.current)
	}, [])
	useEffect(() => {
		if (containerRef.current) {
			typingEffect({
				selector: ".text-to-type",
				container: containerRef.current,
				delay: 0.1,
			})
		}
	}, [containerRef.current])
	return (
		<div
			id="wrapper"
			className="w-full grid place-items-center min-h-[594px]  bg-[#101114]  mt-[65px]">
			<div className="w-full px-2 max-w-[1400px] sm:px-4">
				<div
					id="top-block"
					className="grid grid-cols-1 md:grid-cols-2 w-full  bg-[#101114]  p-8 rounded-xl">
					<div className="grid grid-cols-1 gap-2">
						<Cta title="Formance CLI" src="/icons/arrowRight.png" alt="fctl" />
						<h1 className="mb-2 text-3xl font-bold text-white md:text-4xl PPNeueMachina-regular">
							Programmatic payments
							<br /> at your fingertips
						</h1>
						<p className="text-[#8F9BA8] text-base Inter-regular mb-4 w-full">
							Use your terminal for payments operations, quick
							<br /> debugging and workflows scripts automations.
						</p>
					</div>

					<div
						className="grid gap-1  p-4 rounded-lg text-white border-2 border-[#31363F] Roboto-regular text-2xl  min-h-[244px] "
						ref={containerRef}>
						<span>
							<span
								className="text-to-type text-[#158FFF]"
								data-text="fctl"></span>
							<span className="text-to-type" data-text=" add "></span>
							<span
								className="text-to-type text-[#5D6779]"
								data-text="connectors/paypal"></span>
							<br />
							<span
								className="text-to-type text-[#158FFF]"
								data-text="fctl"></span>
							<span className="text-to-type" data-text=" payments list"></span>
							<br />
							<span
								className="text-to-type text-[#158FFF]"
								data-text="fctl"></span>
							<span
								className="text-to-type"
								data-text=" payments search "></span>
							<span
								className="text-to-type text-[#5D6779]"
								data-text="tx_15221 --json"></span>
						</span>
						<span>
							<span
								className="text-to-type text-[#158FFF]"
								data-text="fctl"></span>
							<span className="text-to-type" data-text=" alerts list"></span>
							<br />
							<span
								className="text-to-type text-[#158FFF]"
								data-text="fctl"></span>
							<span className="text-to-type" data-text=" alerts "></span>
							<span
								className="text-to-type text-[#5D6779]"
								data-text="--assert-ok"></span>
						</span>
					</div>
				</div>
				<div id="bottom-block" className="w-full gap-12 ">
					<div className="grid grid-cols-1 md:grid-cols-2  gap-6 bg-[#101114] p-6 rounded-xl w-full">
						<div className="grid w-full  grid-cols-2 gap-[30px] sm:grid-cols-3 md:grid-cols-4 md:max-w-lg border-2 p-4 rounded-lg border-[#31363F]">
							{connectorsData.map((connector, index) => (
								<ConnectorsIcones
									src={connector.src}
									alt={connector.alt}
									delay={index * 0.1}
									key={connector.alt + index}
								/>
							))}
						</div>
						<div className="flex flex-col items-center justify-start">
							<div className="grid max-w-lg gap-2">
								<Cta
									title="Connectors Store"
									src="/icons/store.png"
									alt="fctl"
								/>
								<div>
									<h2 className="mb-2 text-4xl font-bold text-white PPNeueMachina-regular">
										Growing and open rails connectivity
									</h2>
									<p className="text-[#8F9BA8] text-base Inter-regular">
										Keep you existing partners rails and add more to address new
										use cases. Our connector SDK is open source, making our
										library every expanding
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
