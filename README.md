## Como executar a aplicação React

```
cd inicio
npm install
npm run dev
```

A aplicação abre em http://localhost:5173

## Pergunta 3 — View Source

No Express (porta 3000), o View Source mostra a lista de cartas já escrita no HTML, por isso foi o servidor que o construiu. No React (porta 5173), o View Source só tem uma `<div id="root">` vazia e um `<script>`, por isso o HTML foi construído no browser pelo JavaScript. Confirmei ao ver que as cartas só aparecem no Elements (F12), e não no View Source.