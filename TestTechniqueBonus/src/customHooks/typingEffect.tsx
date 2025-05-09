import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)

interface TypingEffectProps {
	readonly selector: string
	readonly container: HTMLElement
	readonly delay: number
}

export function typingEffect({
	selector,
	container,
	delay,
}: TypingEffectProps) {
	const elements = Array.from(
		container.querySelectorAll(selector)
	) as HTMLElement[]
	let timeline = gsap.timeline()
	elements.forEach((el, i) => {
		if (el.textContent && el.textContent.length > 0) return
		const finalText = el.getAttribute("data-text") || ""
		el.textContent = ""
		timeline.to(
			el,
			{
				text: { value: finalText, delimiter: "" },
				duration: 0.8,
				ease: "power1.inOut",
				delay: i === 0 ? 0.5 : 0.1,
				
			},
			i === 0 ? 0 : ">"
		)
	})
}
