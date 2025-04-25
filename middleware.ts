// https://clerk.com/docs/quickstarts/nextjs
import { 
  clerkMiddleware, createRouteMatcher
} from '@clerk/nextjs/server';

// Sets all /landing and /login-signup routes as public routes.
const isPublicRoute = createRouteMatcher([
  '/',
  '/landing(.*)',
  '/login-signup(.*)',
  '/not-found(.*)',
  '/hackathons(.*)',
  '/help(.*)',
]);


export default clerkMiddleware(async (auth, req) => {
  // Automatically redirect user to sign-in page if they are not signed in
  if (!isPublicRoute(req)) await auth.protect();

// export default clerkMiddleware(async (auth, req) => {
//   const {userId} = await auth();
//
//   // If the user is not logged in, redirect to the landing page.
//   if (!userId) {
//     return Response.redirect(new URL("/landing", req.url));
//   }
//
//   // Fetch user data from backend to check hackathon approval status
//   const isApproved = await checkUserApproval(userId);
//
//   // If user is signed in but NOT approved for a hackathon, redirect
//   // TODO: Create a /not-approved page to redirect to
//   if (!isApproved) {
//     return Response.redirect(new URL("/not-found", req.url));
//   }
//
//   // If approved, continue as normal
//   return;
  },
  { debug: true}
)


// Helper function to check if a user is approved for a hackathon
/**
 * ! Tony - I'm not sure if checkUserApproval is needed as middleware. 
    * What about we add "hackathonStatus" to userModel. This could be a dictionary store hackathons users apply as key and val will be the status
    * Then we can access directly to this data in the database for the status?
 */ 
async function checkUserApproval(userId: string): Promise<boolean> {
  try {
    // TODO: Logic to check if user is approved for a hackathon
    return true;
  } catch (error) {
    console.error('Failed to check approval:', error);
    return false; // Default to not approved on error
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
