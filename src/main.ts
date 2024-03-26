import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import LotteryPage from "./components/LotteryPage.vue";
import SolvePage from "./components/SolvePage.vue";
import SolveMedPage from "./components/SolveMedPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/lottery", component: LotteryPage },
    { path: "/solve", component: SolvePage },
    { path: "/solve-med", component: SolveMedPage },
  ]
});

createApp(App).use(router).mount("#app");
