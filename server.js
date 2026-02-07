const express = require("express");
const app = express();
const PORT = 3001;
function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
function layout({ title, body }) {
return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<style>
body { font-family: Arial, sans-serif; margin: 0; }
nav { padding: 12px; border-bottom: 1px solid #ddd; display: flex;
gap: 12px; }
main { padding: 12px; }
.hint { color: #666; }
</style>
</head>
<body>
<nav>
<a href="/">Accueil</a>
<a href="/page2">Page 2</a>
</nav>
<main>
${body}
</main>
</body>
</html>`;
}
app.get("/", async (req, res) => {
await sleep(1000); // 1 seconde pour simuler un traitement serveur
res.type("html").send(
layout({
title: "Accueil",
body:
`
<h1>Accueil (HTML + Express)</h1>
<p>Cette navigation recharge la page à chaque clic.</p>
<p class="hint">Le délai de 1 seconde simule un temps serveur (DB,
calcul, API...).</p>
`,
})
);
});
app.get("/page2", async (req, res) => {
await sleep(1000); // 1 seconde pour simuler un traitement serveur
res.type("html").send(
layout({
title: "Page 2",
body:
`
<h1>Page 2 (HTML + Express)</h1>
<p>Si tu cliques sur le menu, tu verras le rechargement +
l’attente.</p>
<p class="hint">C’est normal : le navigateur redemande une
nouvelle page au serveur.</p>
`,
})
);
});
app.listen(PORT, () => {
console.log(`Serveur démarré sur http://localhost:${PORT}`);
});