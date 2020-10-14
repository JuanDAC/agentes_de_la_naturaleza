// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ClassType = new (...args:any[]) => any;

export interface ICurrentLevelData {
	[index:string]: boolean | string |number | ICurrentLevelData;
}
export interface IIMG {
	src: string;
	alt: string;
}
export interface IPipes {
	onClick?: (index: number, src: string) => void;
	imageManager?: (type: string, index: number, src: string) => string;
}
export interface ICharacterAction {
	DomNode: ClassType;
	pipes: IPipes;
	text?: string;
}

export interface ICharacter {
	img: IIMG;
	action: ICharacterAction;
	pipes: IPipes;
}
export interface ICreditsAndDetails {
	title: string;
	content: Array<string>;
}

export type ParametersActionSvelte = string | number | boolean | undefined | {
	[index:string]: ParametersActionSvelte
}

export type ActionSvelte = (domNode: HTMLElement, parameters?: ParametersActionSvelte) => {
    update?: (parameters: ParametersActionSvelte) => void;
	destroy?: () => void;
}

export interface RepelCursorData {
    length?: number | undefined;
    timingFunction?: string | undefined;
    duration?: number | undefined;
    property?: string | undefined;
}

export interface IContentSliders {
	paragraphs: string;
}

export interface ISliders {
	img: IIMG | boolean;
	pipes: IPipes;
	content: IContentSliders;
}
