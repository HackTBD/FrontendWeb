# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HackTBD is a Next.js frontend application built with TypeScript, GraphQL (Apollo Client), and Tailwind CSS. It provides a platform for hackathon participants and organizers to connect and manage events.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests with Vitest
- `pnpm coverage` - Generate test coverage report
- `pnpm codegen` - Generate GraphQL types from schema

## Architecture

### Clean Architecture Structure
The project follows Next.js Clean Architecture patterns:
- `app/` - Framework & Drivers layer (Next.js pages, components, styles)
- `src/` - Core application layers (application, entities, infrastructure, interface-adapters)
- `tests/` - Unit tests matching src structure

### GraphQL Integration
- **Apollo Client** setup with comprehensive error handling, retry logic, and authentication
- **Code Generation**: Run `pnpm codegen` after backend schema changes
- **Generated Types**: Located in `app/_lib/graphql/__generated__/` (never modify these files)
- **Backend Dependency**: Requires backend running at `http://localhost:8000/graphql/`

### Component Organization
- Shared components in `app/_components/ui/`
- Page-specific components in respective page directories
- Apollo Provider wraps the entire application for GraphQL access
- Theme Provider enables dark/light mode switching

## Key Dependencies

- **Next.js 15.2.1** with App Router
- **Apollo Client** for GraphQL operations
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Vitest** for testing
- **GraphQL Code Generator** for type generation

## Development Workflow

### GraphQL Development
1. Backend must be running for schema access
2. Generate types: `pnpm codegen` after schema changes
3. Use generated hooks from `app/_lib/graphql/queries/` and `app/_lib/graphql/mutations/`
4. Follow fragment-based approach for reusable GraphQL fields

### Testing Strategy
- Tests should be placed next to the files they test (e.g., `Component.spec.tsx` next to `Component.tsx`)
- Focus on testing logic, not TypeScript functionality
- Mock API requests to avoid real network calls
- Run tests before commits

### Code Conventions
- **Pascal Case**: Component files, interfaces, types, enums
- **Camel Case**: Folders, non-component files, functions, variables
- **Screaming Snake Case**: Constants, enum values
- Follow Google TypeScript Style Guide
- ESLint configured with Next.js rules

## Important Notes

- **Package Manager**: Use `pnpm` exclusively (not npm or yarn)
- **Node.js**: Keep up-to-date version
- **GraphQL Schema**: Available at `http://localhost:8000/static/schema.graphql`
- **Authentication**: Handled via localStorage token with automatic redirects
- **Image Domains**: Configured for `i.pravatar.cc` and `placekitten.com`