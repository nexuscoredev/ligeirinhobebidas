# Ligeirinho Hub

Repositório do ecossistema **Ligeirinho Hub** — PDV, Totem, App e Entregas integrados para a operação da adega Ligeirinho, desenvolvido pela NEXUS Technology Systems.

## Conteúdo

| Item | Descrição |
|------|-----------|
| `Ligeirinho-Hub-Apresentacao.pdf` | Apresentação com visão do produto e plano de implantação |
| `site/` | Site institucional (landing page) |

## Site

```bash
cd site
npm install
npm run dev    # http://localhost:5173
npm run build  # gera dist/ para deploy estático
npm run preview
```

### Deploy

O site é estático (Vite + React). Pode ser publicado em GitHub Pages, Azure Static Web Apps, Netlify, Vercel ou qualquer host de arquivos estáticos apontando para `site/dist` após `npm run build`.

## Próximos passos (produto)

Conforme o PDF: PDV na loja, totem em tablet, app operacional e integração Cayena → Active Entregas no hub NEXUS.
