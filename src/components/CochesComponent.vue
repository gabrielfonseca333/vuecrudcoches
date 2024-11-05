<template>
  <div>
    <h1>Coches Component</h1>
    <div class="tarjeta">
    <table class="table table-hover">
        <thead>
            <tr class="table-dark">
                <th>Modelo</th>
                <th>Imagen</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche">
                <td>{{coche.modelo}}</td>
                <td><img class="img" :src="coche.imagen"/></td>
                <td><router-link class="btn btn-primary" :to="'/modificar/'+coche.idCoche">Modificar</router-link></td>
                <td><button @click="()=> eliminarCoche(coche.idCoche)" class="btn btn-danger">Eliminar</button></td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import ServiceEjemplos from "./../services/ServiceEjemplos"
const service = new ServiceEjemplos();

export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[],
        }
    },
    mounted(){
        service.getCoches().then(result=>{
            this.coches=result
        })

    },
    methods:{
        eliminarCoche(idCoche){
            service.eliminarCoche(idCoche).then(result=>{
                console.log(result, "eliminado! ❌❌🍪")
                window.location.reload();
            })
        }
    }
}
</script>

<style>
    @import "./../assets/css/styles";
</style>