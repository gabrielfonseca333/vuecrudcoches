import Global from "@/Global";

export default class ServiceEjemplos {
  getCoches() {
    return new Promise(function (resolve) {
      let coches = [];
      let request = "api/Coches";
      let url = Global.urlApiEjemplos + request;
      console.log("✅", url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          coches = data;
          resolve(coches);
        });
    });
  }

  crearCoche(coche) {
    return new Promise(function (resolve) {
      let request = "api/coches/insertcoche";
      let url = Global.urlApiEjemplos + request;
      let post = {
        method: "POST",
        body: JSON.stringify(coche),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(url, post)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  getCoche(id) {
    return new Promise(function (resolve) {
      let coche = {};
      let request = "api/coches/findcoche/" + id;
      let url = Global.urlApiEjemplos + request;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          coche = data;
          resolve(coche);
        });
    });
  }

  modificarCoche(coche) {
    return new Promise(function (resolve) {
      let request = "api/coches/updatecoche";
      let url = Global.urlApiEjemplos + request;

      let put = {
        method: "PUT",
        body: JSON.stringify(coche),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(url, put)
        .then((response) => {resolve(response)})
    });
  }

  async eliminarCoche(id){
   
        let request = "api/coches/deletecoche/" + id
        let url = Global.urlApiEjemplos + request
        const response = await fetch(url , {method:"DELETE"})
        return response
  }



}
