import { createRouter } from '@remix-run/fetch-router'
import { routes } from '../routes.ts'
import { assets } from "./public.ts"
 
export const router = createRouter()
 
router.get(routes.assets, assets);
 
// TODO: 後から Remix のコンポーネントに差し替える
router.get(routes.home, async () => {
  return new Response('<h1>Home Page</h1>', {
    headers: { 'Content-Type': 'text/html' },
  })
})