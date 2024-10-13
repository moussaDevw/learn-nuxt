import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (isLoggedIn) {
  }
  console.log(to, from);
});
