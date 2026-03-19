import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "bdb3d7a0-e9d1-4547-b22a-ec811ee4ada8",
  token: process.env.TINA_TOKEN || "",
  apiURL: "https://content.tinajs.io",
  build: {
    outputDir: "admin",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "blog",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "object",
            list: false,
            name: "frontmatter",
            label: "Post frontmatter",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título",
                isTitle: true,
                required: true,
              },
              {
                type: "datetime",
                name: "date",
                label: "Data",
                required: true,
              },
              {
                type: "string",
                name: "summary",
                label: "Resumo",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "cover",
                label: "Capa",
              },
              {
                type: "string",
                name: "category",
                label: "Categoria",
                options: [
                  "Design Systems",
                  "Craft de Design",
                  "AI no Design",
                ],
              },
              {
                type: "string",
                name: "tags",
                label: "Tags",
                list: true,
              },
              {
                type: "boolean",
                name: "featured",
                label: "Destaque?",
              },
              {
                type: "boolean",
                name: "draft",
                label: "Rascunho?",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
            isBody: true,
          },
        ],
      },
      {
        label: "Projetos",
        name: "projects",
        path: "src/content/projects",
        format: "md",
        fields: [
          {
            type: "object",
            list: false,
            name: "frontmatter",
            label: "Project frontmatter",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "company",
                label: "Empresa",
                required: true,
              },
              {
                type: "number",
                name: "year",
                label: "Ano",
                required: true,
              },
              {
                type: "string",
                name: "role",
                label: "Cargo",
                required: true,
              },
              {
                type: "string",
                name: "duration",
                label: "Duração",
                required: true,
              },
              {
                type: "string",
                name: "categories",
                label: "Categorias",
                list: true,
              },
              {
                type: "image",
                name: "cover",
                label: "Capa",
                required: true,
              },
              {
                type: "string",
                name: "summary",
                label: "Resumo",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "boolean",
                name: "featured",
                label: "Destaque?",
              },
              {
                type: "number",
                name: "order",
                label: "Ordem",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
            isBody: true,
          },
        ],
      },
    ],
  },
});
