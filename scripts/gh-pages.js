const ghpages = require("gh-pages");

ghpages.publish(
	"__sapper__/export", // <-- replace yourproject with your repo name
	{
		branch: "master",
		repo: "https://github.com/JuanDAC/agentes_de_la_naturaleza.git",
		user: {
			name: "JuanDAC",
			email: "juanavila12.0308@gmail.com",
		},
	},
	() => {
		console.log("Deploy Complete!");
	},
);
