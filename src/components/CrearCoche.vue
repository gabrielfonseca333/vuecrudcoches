<template>
  <div>
    <h1>Crear Coche</h1>
    <div class="tarjeta">
      <input
        v-model="idCoche"
        type="number"
        placeholder="idCoche"
        class="form-control"
      />
      <input
        v-model="marca"
        type="text"
        placeholder="marca"
        class="form-control"
      />
      <input
        v-model="modelo"
        type="text"
        placeholder="modelo"
        class="form-control"
      />
      <input
        v-model="conductor"
        type="text"
        placeholder="conductor"
        class="form-control"
      />
      <input
        v-model="imagen"
        type="text"
        placeholder="imagen"
        class="form-control"
      />
      <button @click="crearCoche()" class="btn btn-primary">Crear</button>
    </div>
  </div>
</template>

<script>
import ServiceEjemplos from "./../services/ServiceEjemplos";
const service = new ServiceEjemplos();

export default {
  name: "CrearCoche",
  data() {
    return {
      idCoche: 0,
      marca: "",
      modelo: "",
      conductor: "",
      imagen: "",
    };
  },
  methods: {
    crearCoche() {
      let coche = {
        idCoche: this.idCoche,
        marca: this.marca,
        modelo: this.modelo,
        conductor: this.conductor,
        imagen: this.imagen,
      };

      service.crearCoche(coche).then((result) => {
        console.log("✅Coche Creado", result);
        this.$router.push("/");
      });

      
    },
  },

  redirectToHome() {
    this.$router.push("/");
  },
};
</script>

<style>
@import "./../assets/css/styles";
</style>