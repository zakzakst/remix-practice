import { route, resources } from '@remix-run/fetch-router'

export const routes = route({
  assets: '/assets/*path',

  "home": "/",
  "about": "/about",

  // resources は CRUD ルート（/, /:id, /:id/create, /:id/edit など）を簡単に定義できるユーティリティ
  "posts": resources("/posts", {
    param: "postId"
  })
})