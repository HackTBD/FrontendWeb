# Middleware Types

1. **Next.js Middleware**
   - Runs **on the server side** before any page is rendered in the browser.
   - Used for tasks like authentication, redirects, and URL rewrites.
   - Since it runs before the client sees anything, users are instantly redirected if they don’t meet certain conditions (e.g., not logged in).

2. **Redux Middleware**
   - Used within Redux to handle actions **before they reach the reducer**.
   - Commonly used for async operations (like API calls), logging, or handling side effects.
   - Examples: `redux-thunk`, `redux-saga`.

3. **React Route Guard (Component-Level Middleware)**
   - Runs **after** the React app has loaded on the client side.
   - Often used to protect certain routes or components (e.g., only render Dashboard if the user is authenticated).
   - Typically shows a loading spinner or fallback UI while checking conditions before showing the final component.

# Frontend Middleware
   - For this project, on the frontend side for authentication, Next.js Middleware is our middleware of choice.
   - The reason for this is because it allows us to intercept requests on the server-side before the page is rendered, ensuring that unauthenticated users are redirected immediately without ever loading protected content.
   - Compared to client-side checks (like React route guards), Next.js Middleware provides faster, more secure authentication enforcement. It avoids loading any part of a protected page in the browser, which improves both performance and user experience, especially for unauthorized users.
   - However, the cons could be that it’s less flexible for handling dynamic client-side state, such as role-based rendering or conditionally showing UI elements after login. Since Next.js Middleware runs before React or browser-side JavaScript is loaded, it can't access things like localStorage, in-memory auth state, or client-side context.
   - Additionally, because it's server-side, middleware logic can sometimes be harder to debug, and adding complex logic (like async token validation) needs to be done carefully to avoid performance bottlenecks.