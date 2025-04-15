import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8000/static/schema.graphql',
  documents: ['app/**/*.{ts,tsx}'],
  generates: {
    // For typed document nodes and hooks
    'app/_lib/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
    },
    // For dumping the full schema (optional)
    'app/_lib/graphql/__generated__/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
