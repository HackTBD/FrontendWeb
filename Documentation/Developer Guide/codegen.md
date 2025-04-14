# Codegen Graphql Types Generator

## Backend Setup

1. **Generate GraphQL Schema:**

   At the root of the backend project, run the following command in the terminal to generate the GraphQL schema file:

   ```bash
   python manage.py graphql_schema --schema hack_tbd.schema.schema --out project/static/schema.graphql
   ```

2. **Accessing the GraphQL Schema:**

   The generated `schema.graphql` file will be accessible at:

   ```
   http://localhost:8000/static/schema.graphql
   ```

3. **Run Backend:**

   Start the backend server, run:

   ```bash
   make run backend
   ```

## Frontend Setup

1. **Generate GraphQL Types:**

   At the root of the frontend project, run the following command in the terminal to autogenerate the GraphQL types:

   ```bash
   pnpm run codegen
   ```

2. **Generated Code:**

   The generated code will be placed in the `__generated__` folder within `app/_lib/graphql`.

   **Important:** Do **NOT** modify any files inside the `__generated__` folder as they are auto-generated based on the backend schema.
