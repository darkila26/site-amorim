# Amorim Engenharia & Pré Moldados — Site institucional

Site marketing estático da **Amorim Engenharia & Pré Moldados** (Catanduvas, SC), feito com **Next.js** (App Router), **TypeScript** e **Tailwind CSS**, configurado para exportação estática (`output: 'export'`) e publicação no **Cloudflare Pages**.

Repositório sugerido: https://github.com/darkila26/site-amorim

---

## O que está incluso

- Página única em português (pt-BR): Início, Serviços, Projetos, Sobre, Contato
- Formulário de contato que abre o **WhatsApp** com mensagem preenchida (sem backend)
- Mapa do Google embutido no endereço da empresa
- SEO: title, description, Open Graph, `sitemap.xml`, `robots.txt`
- Design mobile-first com identidade verde floresta + CTA `#32AA27`

---

## Requisitos

- Node.js 18 ou superior
- Conta no GitHub
- Conta no Cloudflare (para Pages)

---

## Rodar localmente

```bash
cd site-amorim
npm install
npm run dev
```

Abra http://localhost:3000

### Build de produção (export estático)

```bash
npm run build
```

Os arquivos estáticos ficam na pasta `out/` — pronta para upload no Cloudflare Pages.

---

## Enviar para o GitHub (darkila26/site-amorim)

Se o repositório já existe vazio no GitHub:

```bash
cd site-amorim
git init
git add .
git commit -m "Site institucional Amorim Engenharia"
git branch -M main
git remote add origin https://github.com/darkila26/site-amorim.git
git push -u origin main
```

Se já houver commits remotos, use `git pull --rebase origin main` antes do push.

---

## Publicar no Cloudflare Pages

### Opção A — Conectar o repositório (recomendado)

1. Acesse Cloudflare Dashboard → Workers & Pages
2. Create → Pages → Connect to Git
3. Selecione o repositório `darkila26/site-amorim`
4. Configuração de build:
   - Framework preset: Next.js (Static HTML Export) ou None
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`
5. Clique em Save and Deploy

A cada push na branch `main`, o Cloudflare gera um novo deploy automaticamente.

### Opção B — Upload manual (drag-and-drop)

1. Rode `npm run build` na sua máquina
2. No Cloudflare Pages, escolha Upload assets
3. Envie o conteúdo da pasta `out/` (`index.html` deve ficar na raiz do upload)

Há também `/workspace/site-amorim-static.zip` com o conteúdo de `out/` pronto para extrair e enviar.

---

## Apontar o domínio amorimengenharia.com.br

1. No projeto do Cloudflare Pages → Custom domains → Set up a custom domain
2. Digite `amorimengenharia.com.br` (e, se quiser, `www.amorimengenharia.com.br`)
3. Se o DNS estiver no Cloudflare: os registros são criados automaticamente
4. Se o DNS estiver em outro provedor:
   - Crie um CNAME de `www` apontando para `seu-projeto.pages.dev`
   - Para o apex, use CNAME achatado se o provedor permitir, ou migre o DNS para o Cloudflare
5. Aguarde a validação do certificado SSL

Depois disso, o site responde em https://amorimengenharia.com.br

---

## Contatos da empresa (já configurados no site)

| Item | Valor |
|------|--------|
| Telefone / WhatsApp | (49) 991871923 |
| WhatsApp link | https://wa.link/zpl56x |
| Endereço | R. Santa Catarina, 1004, Catanduvas, SC 89670-000, Brasil |
| Instagram | https://instagram.com/luizhenriqueamorim_eng |
| Horário | Seg–Sex 9:00–22:00 · Sáb 9:00–18:00 · Dom 9:00–12:00 |

Para alterar textos, telefone ou links, edite `src/lib/constants.ts` e os componentes em `src/components/`.

---

## Estrutura do projeto

```
site-amorim/
├── public/           # robots.txt, sitemap.xml, estáticos
├── src/
│   ├── app/          # layout, página, CSS global
│   ├── components/   # Header, Hero, Serviços, etc.
│   └── lib/          # dados da empresa
├── next.config.ts    # output: 'export'
├── package.json
└── README.md
```

---

## Observações

- Imagens de referência usam URLs do Unsplash (externas). Em produção, o ideal é baixar e colocar em `public/images/`.
- Não há servidor Node em produção: o Cloudflare Pages serve apenas HTML/CSS/JS estáticos.
- O formulário não envia e-mail; ele monta a mensagem e abre o WhatsApp.
