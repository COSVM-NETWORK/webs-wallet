import { createRouter, createWebHistory } from "vue-router";
import MsigUI from "../pages/MsigUI.vue";

const routes = [
	{
		path: "/",
		name: "Msig",
		component: MsigUI,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;