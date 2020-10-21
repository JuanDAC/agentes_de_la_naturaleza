import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type {
	ICharacter, ClassType, ISliders, ICreditsAndDetails, ICurrentLevelData,
} from "../interfaces";

export const images: string[] = [
	"img/characters/character-1.png",
	"img/characters/character-2.png",
	"img/characters/character-3.png",
	"img/characters/character-4.png",
	"img/characters/character-transparent-1.png",
	"img/characters/character-transparent-2.png",
	"img/characters/character-transparent-3.png",
	"img/characters/character-transparent-4.png",
	"img/map/map.png",
	"img/map/park.png",
	"img/map/river.png",
	"img/map/school.png",
	"img/map/street.png",
	"img/park/park-color.png",
	"img/park/park.png",
	"img/filter/filter-1.svg",
	"img/filter/filter-2.svg",
	"img/filter/filter-3.svg",
	"img/filter/filter-4.svg",
	"img/filter/filter-5.svg",
	"img/filter/filter-6.svg",
	"img/river/river-color.png",
	"img/river/river.png",
	"img/buttons/btn-continuar.png",
	"img/buttons/btn-insignias.png",
	"img/buttons/btn-inicio.png",
	"img/buttons/opciones.png",
	"img/badges/responsabilidad_badges.png",
	"img/badges/badge-filtro-de-agua.png",
	"img/badges/reciclaje_badges.png",
	"img/badges/nuevasEnerg_badges.png",
	"img/school/reciclaje.png",
	"img/school/school_color.png",
	"img/school/school.png", // this is
	"img/street/street_color.png",
	"img/street/street.png",
];
export const pages: string[] = [
	"/character-selector",
	"/history",
	"/map",
	"/park",
	"/river",
	"/school",
	"/street",
];

export const mute: Writable<boolean> = writable(false);
export const menu: Writable<boolean> = writable(false);
export const menuBadges: Writable<boolean> = writable(false);
export const badges: Writable<Array<string>> = writable([]);
export const characterSelected:{[index: string]: number} = {};
export const currentLevelData: Writable<ICurrentLevelData> = writable({ level: "none" });
export const dialogs: Map<string, string | Array<string>> = new Map();
dialogs.set("map", "Este es nuestro barrio, ayúdanos a solucionar los problemas ambientales Agente.");
dialogs.set("park", [
	"Nuestro parque es un lugar donde podemos jugar y compartir con otros, pero muchas veces botamos basura al suelo, jugamos con los árboles haciéndoles daño.",
	"Ayúdanos recogiendo la basura en canecas y evitando que los demás dañen los árboles de nuestro parque.",
]);
dialogs.set("park-end-game", "✔ Muy bien Agente de la naturaleza 💚.");

dialogs.set("river", [
	"El río Fucha es muy importante para nuestra comunidad porque es una fuente hídrica que atraviesa la ciudad pero la mayor parte del río está contaminado. ",
	"Ayúdanos a construir un filtro gigante para que la contaminación del agua no avance y se pueda controlar.",
]);
dialogs.set("river-end-game", "✔ Muy bien Agente de la naturaleza 💚💚.");
dialogs.set("school", [
	"Este es nuestro salón de clases, cuando comemos nuestro refrigerio la basura queda por todo el salón y se ve muy mal..",
	"Ayúdanos a separar las basuras y evitar contaminación de suelo en nuestro colegio.",
]);
dialogs.set("school-end-game", "✔ Muy bien Agente de la naturaleza 💚💚💚.");
dialogs.set("street", [
	"En nuestra localidad San Cristóbal, tenemos muchas calles y avenidas por donde pasan carros, motos, buses y transmilenios.",
	"Muchos de ellos arrojan humo que contamina con gases dañinos nuestro cielo.",
	"Ayúdanos a concientizar a los conductores con usar otras formas de energía que no producen contaminación del aire y visual.",
]);
dialogs.set("street-end-game", "✔ Muy bien Agente de la naturaleza 💚💚💚💚.");
dialogs.set("end-game", "💚 Lo conseguiste Agente de la naturaleza 💚💚💚💚.");

export const badgesURL:Map<string, string> = new Map();
badgesURL.set("park", "img/badges/responsabilidad_badges.png");
badgesURL.set("river", "img/badges/badge-filtro-de-agua.png");
badgesURL.set("school", "img/badges/reciclaje_badges.png");
badgesURL.set("street", "img/badges/nuevasEnerg_badges.png");
const imageManagerCharacters = (type: string, index: number, src: string): string => {
	switch (type) {
	case "src":
		return `img/characters/${src.replace("#{index}", `${index + 1}`)}`;
	case "alt":
		return `character ${index + 1} image`;
	default:
		return "";
	}
};
//
const SaveCharacter = (goto: (str: string) => Promise<void>): (
	index: number,
	src: string) => Promise<void> => async (
	index: number,
	src: string) => {
	console.log(index, src);
	characterSelected.set = (index + 1);
	localStorage.setItem("characterSelected", JSON.stringify(characterSelected.set));
	await goto("/history");
};

const imageManagerIntro = (type: string, index: number, src: string): string => {
	switch (type) {
	case "src":
		return `img/characters/${src.replace("#{index}", `${characterSelected.set}`)}`;
	case "alt":
		return `character ${characterSelected.set} image`;
	default:
		return "";
	}
};
export const intro:Array<ISliders> = [
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		content: {
			paragraphs: "Hola, soy un agente de la naturaleza",
		},
		pipes: {
			imageManager: imageManagerIntro,
		},
	},
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		content: {
			paragraphs: "Juntos vamos a solucionar algunos problemas ambientales que están afectando nuestro barrio y localidad San Cristóbal.",
		},
		pipes: {
			imageManager: imageManagerIntro,
		},
	},
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		content: {
			paragraphs: "Los problemas ambientales son situaciones que alteran el medio ambiente que nos rodea, dañandolo, haciéndolo ver feo, oliendo mal eso es culpa de los humanos porque no lo cuidamos.",
		},
		pipes: {
			imageManager: imageManagerIntro,
		},
	},
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		content: {
			paragraphs: "Tu cómo agente de la naturaleza puedes ayudar a que eso cambie. Tu misión es participar solucionando los problemas ambientales en diferentes lugares de nuestro barrio.",
		},
		pipes: {
			imageManager: imageManagerIntro,
		},
	},
];

export const charactersConstructor = (
	goto: (str: string) => Promise<void>,
	Button: ClassType,
) :Array<ICharacter> => [
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		action: {
			DomNode: Button,
			text: "seleccionar",
			pipes: {
				onClick: SaveCharacter(goto),
			},
		},
		pipes: {
			imageManager: imageManagerCharacters,
		},
	},
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		action: {
			DomNode: Button,
			text: "seleccionar",
			pipes: {
				onClick: SaveCharacter(goto),
			},
		},
		pipes: {
			imageManager: imageManagerCharacters,
		},
	},
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		action: {
			DomNode: Button,
			text: "seleccionar",
			pipes: {
				onClick: SaveCharacter(goto),
			},
		},
		pipes: {
			imageManager: imageManagerCharacters,
		},
	},
	{
		img: {
			src: "character-#{index}.png",
			alt: "",
		},
		action: {
			DomNode: Button,
			text: "seleccionar",
			pipes: {
				onClick: SaveCharacter(goto),
			},
		},
		pipes: {
			imageManager: imageManagerCharacters,
		},
	},
];

export const creditsAndDetails: Array<ICreditsAndDetails> = [
	{
		title: "Descripción",
		content: [
			"Videojuego Ambiental que propone soluciones a las diferentes problemáticas ambientales en la localidad de San Cristóbal en el Sur Oriente de Bogotá.",
		],
	},
	{
		title: "Diseñadores",
		content: [
			"Kelly Forigua - Estudiante de Lic. Pedagogía Infantil Universidad Distrital.",
			"Estudiantes de 3 Grado Jornada Mañana Colegio Distrital Manuelita Sáenz (2018).",
		],
	},
	{
		title: "Desarrollador",
		content: [
			"Juan Avila - Estudiante Platzi",
		],
	},
];

export const levels = [
	"park",
	"river",
	"school",
	"street",
];
