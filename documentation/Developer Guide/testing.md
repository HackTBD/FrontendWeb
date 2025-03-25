# FrontendWeb Testing Guide

## 📌 **Overview**

This project uses **Vitest** for unit and integration testing. Tests ensure our **Next.js + TypeScript** frontend works as expected, maintains stability, and prevents regressions.

---

## 📋 **Testing Plan**

### ✅ **1. Unit Tests**

**Purpose:** Test individual components and utility functions.

- Ensure components render correctly.
- Verify props, state, and event handlers.

**Example:** `src/components/Button.spec.tsx` in the same folder as `src/components/Button.tsx`

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick when clicked', async () => {
  const onClick = vi.fn();
  render(<Button label="Click Me" onClick={onClick} />);
  await userEvent.click(screen.getByText('Click Me'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
```

---

### 🔄 **2. Integration Tests**

**Purpose:** Test multiple components working together.

- Verify form interactions, API calls, and routing.

**Example:** `src/pages/home.spec.tsx` in the same folder as `src/pages/home.tsx`

```tsx
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

test('displays homepage title', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Welcome to HackTBD'
  );
});
```

---

## 🚀 **Running Tests**

- **Run all tests:**
  ```sh
  pnpm test
  ```
- **Run tests in watch mode:**
  ```sh
  pnpm test:watch
  ```
- **Run coverage report:**
  ```sh
  pnpm test:coverage
  ```

---

## 📌 **Best Practices**

✅ Keep tests **isolated and fast**
✅ The `spec` file should be placed right next to the one that is tested for
✅ Only test **LOGIC**. Example: don't test if a Typescript function works the way it should.
✅ Try mocking things yourself instead of installing new libs
✅ **Mock API requests** to avoid real network calls  
✅ Use **Testing Library** to mimic user interactions  
✅ **Run tests before commits** (`pnpm test`)
