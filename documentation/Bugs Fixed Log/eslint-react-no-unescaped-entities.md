# When run `pnpm lint`, you get the Error: `react/no-unescaped-entities`

If you get an error like this:

```bash
Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
```

It means that ESLint flags the use of unescaped entities in your code. To fix this:

Use `&apos;`, `&lsquo;` or `&rsquo;` instead of `'` in your code. For example:

"you&apos;re free" instead of "you're free".
