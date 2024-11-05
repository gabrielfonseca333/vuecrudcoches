<template>
  <div>
    <h1>Modificar Coche</h1>
    <div class="tarjeta">
      <input
        v-model="idCoche"
        type="number"
        placeholder="idCoche"
        class="form-control"
        disabled
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
      <button @click="modificarCoche()" class="btn btn-warning">
        Modificar
      </button>
    </div>
  </div>
</template>

<script>
import ServiceEjemplos from "./../services/ServiceEjemplos";
const service = new ServiceEjemplos();

export default {
  data() {
    return {
      coche: {},
      idCoche: 0,
      marca: "",
      modelo: "",
      conductor: "",
      imagen: "",
    };
  },

  mounted() {
    this.idCoche = this.$route.params.idCoche;
    let id = this.idCoche;
    service.getCoche(id).then((result) => {
      console.log(result);
      this.coche = result;
      this.marca = this.coche.marca;
      this.modelo = this.coche.modelo;
      this.conductor = this.coche.conductor;
      this.imagen = this.coche.imagen;
    });
  },

  methods: {
    modificarCoche() {
      let coche = {
        idCoche: this.idCoche,
        marca: this.marca,
        modelo: this.modelo,
        conductor: this.conductor,
        imagen: this.imagen,
      };

      service.modificarCoche(coche).then((result) => {
        console.log("🤖Coche Modificado", result);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>