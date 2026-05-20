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

### Deploy (GitHub Pages)

O site publica automaticamente na **main** via GitHub Actions.

**URL:** https://nexuscoredev.github.io/ligeirinhobebidas/

**Configuração única no repositório (se ainda não fez):**

1. GitHub → **Settings** → **Pages**
2. Em **Build and deployment**, escolha **Source: GitHub Actions**

Build local com o mesmo `base` do Pages:

```bash
cd site
PAGES_BASE=/ligeirinhobebidas/ npm run build
npm run preview
```

## Próximos passos (produto)

Conforme o PDF: PDV na loja, totem em tablet, app operacional e integração Cayena → Active Entregas no hub NEXUS.
