import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue"
import CrearCoche from "./components/CrearCoche.vue"
import ModificarCoche from "./components/ModificarCoche.vue"

const myRoutes = [
    {path:"/", component: CochesComponent},
    {path:"/crear", component: CrearCoche},
    {path:"/modificar/:idCoche?", component: ModificarCoche}
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;