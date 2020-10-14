import type { ActionSvelte, ParametersActionSvelte, RepelCursorData } from "../interfaces";

export const randomize: ActionSvelte = (
	domNode: HTMLElement,
	parameters: ParametersActionSvelte,
) => {
	if (typeof parameters === "boolean" && parameters as boolean) domNode.style.setProperty("--random", `${(Math.random() * (1 - -1)) - 1}`);
	return {};
};

export const RepelCursor: ActionSvelte = (
	domNode: HTMLElement,
	parameters: ParametersActionSvelte,
) => {
	let repelActive = false;

	const data: RepelCursorData = (
		typeof parameters !== "boolean"
		&& typeof parameters !== "string"
		&& typeof parameters !== "number"
		&& parameters !== undefined
	)
		? ({ ...parameters } as RepelCursorData)
		: {};

	if (data) {
		data.duration = data.duration
			? data.duration
			: 200;
		data.timingFunction = data.timingFunction
			? data.timingFunction
			: "linear";
		data.property = data.property
			? data.property
			: "all";
		domNode.style.setProperty("transition-duration", `${data.duration}ms`);
		domNode.style.setProperty("transition-timing-function", `${data.timingFunction}`);
		domNode.style.setProperty("transition-property", `${data.property}`);
	}

	const controllerEvent = (ev: MouseEvent): void => {
		if (repelActive) {
			const { innerHeight, innerWidth } = window;
			const bounds: DOMRect = domNode.getBoundingClientRect();
			const lengthMotion: number = data.length ? (data.length as number) : 100;
			const repelCursorY: number = ((bounds.y + (bounds.height / 2)) - ev.pageY) / innerHeight;
			const repelCursorX: number = ((bounds.x + (bounds.width / 2)) - ev.pageX) / innerWidth;
			domNode.style.setProperty("transform", `translate(calc(var(--vh) * ${Math.round(repelCursorX * lengthMotion)}), calc(var(--vh) * ${Math.round(repelCursorY * lengthMotion)}))`);
			repelActive = false;
		}
	};

	setInterval(() => { repelActive = true; }, Math.ceil(Number(data.duration) * 0.95));
	window.addEventListener("mousemove", controllerEvent);

	return {
		update: (property: ParametersActionSvelte) => {
			window.removeEventListener("mousemove", controllerEvent);

			RepelCursor(domNode, property);
		},
		destroy: () => {
			window.removeEventListener("mousemove", controllerEvent);
		},
	};
};
