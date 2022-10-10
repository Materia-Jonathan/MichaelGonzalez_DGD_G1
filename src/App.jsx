import axios from "axios";
import React from "react";
import { useState } from "react";
import { View, Text } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/todos/";

export default function App() {
  const [usuarios, setUsuarios] = React.useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsuarios(response.data);
      // console.log(response.data)
    });
  }, []);

  if (!usuarios) return null;

  return (
    <div class="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">
      <h1>Listado de usuarios</h1>
      <div>
        <ul class="nav nav-tabs custom-nav" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="articulo-tab" data-bs-toggle="tab" data-bs-target="#articulo" type="button" role="tab" aria-controls="articulo" aria-selected="true">Artículos</button>
          </li>
        </ul>
        <div class="tab-content custom-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h6>Api usuarios</h6>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <button type="button" class="btn btn-info" onClick={obtenerUsuarios}>Obtener todos</button>
              <button type="button" class="btn btn-info" onClick={eliminarUsuario}>Eliminar</button>
            </div>
          </div>
          <div class="tab-pane fade" id="articulo" role="tabpanel" aria-labelledby="articulo-tab">
            <h6>Api articulos</h6>
            <input type="text" class="form-control custom-inp" id="inpBarcode" />

            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <button type="button" class="btn btn-primary " onClick={getArticulos}>Get all</button>
              <button type="button" class="btn btn-primary " onClick={getArticuloByBarcode}>Get by ID</button>
              <button type="button" class="btn btn-success" onClick={insertArticulo}>Insert</button>
              <button type="button" class="btn btn-info" onClick={updateArticulo}>Update</button>
              <button type="button" class="btn btn-danger" onClick={deleteArticulo}>Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="ContenedorUsuarios">
        {usuarios.map(person => <div class="card text-white bg-primary"><div class="card-header">Usuario {person.id}</div><div class="card-body"><h5 class="card-title">{person.title}</h5><p class="card-text">{(person.completed) ? "COMPLETED" : "NOT COMPLETED"}</p></div></div>)}
      </div>
    </div>
  );
}

let cardStyle = [
  "text-white bg-primary",
  "text-white bg-secondary",
  "text-white bg-success",
  "text-white bg-danger",
  "text-dark bg-warning",
  "text-dark bg-info",
  "text-dark bg-light",
  "text-white bg-dark",
]

const getRandomIndexCardStyle = (max) => {
  return Math.floor(Math.random() * max);
}

const obtenerUsuarios = () => {
  var config = {
    method: 'get',
    url: 'http://localhost:9001/api/usuarios',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

const eliminarUsuario = () => {
  var config = {
    method: 'delete',
    url: 'http://localhost:9001/api/usuarios/10',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

// ARTICULOS
const getArticulos = () => {
  var config = {
    method: 'get',
    url: 'http://localhost:9001/api/articulos',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

const getArticuloByBarcode = () => {
  let Barcode = document.getElementById("inpBarcode").value

  var config = {
    method: 'get',
    url: 'http://localhost:9001/api/articulos/' + Barcode,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const insertArticulo = () => {

}
const updateArticulo = () => {

}

const deleteArticulo = () => {
  let Barcode = document.getElementById("inpBarcode").value

  var config = {
    method: 'delete',
    url: 'http://localhost:9001/api/articulos/' + Barcode,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
// ARTICULOS

// {/* { usuarios.map(person => <li>{person.userId} {person.title} {person.completed}</li>)} */}