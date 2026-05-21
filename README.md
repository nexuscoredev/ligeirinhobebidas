# Ligeirinho Hub

Repositório do ecossistema **Ligeirinho Hub** — PDV, Totem, App e Entregas integrados para a operação da adega Ligeirinho, desenvolvido pela NEXUS Technology Systems.

## Conteúdo

| Item | Descrição |
|------|-----------|
| `Ligeirinho-Hub-Apresentacao.pdf` | Apresentação com visão do produto e plano de implantação |
| `site/` | Site institucional (landing page) |
| `apps/` | PDV, Totem, App operacional e API (scaffolds Semana 1) |
| `packages/database` | Modelagem Prisma (PostgreSQL) |
| `packages/pricing` | Motor de preço por faixa / combo |
| `docs/` | Arquitetura do monorepo e modelagem do banco |

## Monorepo (Semana 1)

Estrutura e banco inicial documentados em:

- [docs/arquitetura/estrutura-monorepo.md](docs/arquitetura/estrutura-monorepo.md)
- [docs/database/modelagem-inicial.md](docs/database/modelagem-inicial.md)

```bash
npm install
cp packages/database/.env.example packages/database/.env
# editar DATABASE_URL (PostgreSQL local ou Docker)
npm run db:generate
npm run db:migrate
npm run seed -w @ligeirinho/database
```

## Site

```bash
cd site
npm install
npm run dev    # http://localhost:5173
npm run build  # gera dist/ para deploy estático
npm run preview
```

### Deploy (GitHub Pages)

O workflow publica o build na branch **`gh-pages`**. A URL do site é:

**https://nexuscoredev.github.io/ligeirinhobebidas/**

#### Ativar o Pages (uma vez, precisa ser **admin** do repositório)

Link direto: https://github.com/nexuscoredev/ligeirinhobebidas/settings/pages

1. Abra o repositório no GitHub (não é o perfil da conta — é o repo `ligeirinhobebidas`).
2. Aba **Settings** / **Configurações** (só aparece se você for administrador).
3. Menu lateral → **Pages** / **Páginas** (seção *Code and automation* / *Código e automação*).
4. Em **Build and deployment** / **Compilação e implantação** → **Source** / **Origem**:
   - escolha **Deploy from a branch** / **Implantar a partir de um branch**
   - **Branch:** `gh-pages` · pasta **`/ (root)`**
5. **Save** / **Salvar**.

> Se não existir a aba **Settings** ou o item **Pages**, peça a um dono da organização `nexuscoredev` para fazer esse passo ou te dar permissão de admin.

Depois de salvar, em **Actions** rode de novo o workflow *Deploy site to GitHub Pages* (botão **Run workflow**) se o site ainda não abrir.

Build local com o mesmo `base` do Pages:

```bash
cd site
PAGES_BASE=/ligeirinhobebidas/ npm run build
npm run preview
```

## Próximos passos (produto)

Conforme o PDF: PDV na loja, totem em tablet, app operacional e integração Cayena → Active Entregas no hub NEXUS.
