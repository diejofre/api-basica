const express = require("express");
const router = express.Router();

let peliculas = [
  {
    id: 1,
    titulo: "Spider-Man: Lejos de casa",
    duracion: 129,
    genero: "Aventura",
  },
  {
    id: 2,
    titulo: "Toy Story 4",
    duracion: 100,
    genero: "Animación",
  },
  {
    id: 3,
    titulo: "X-Men: Fénix Oscura",
    duracion: 113,
    genero: "Acción",
  },
];

router.get("/", (req, res) => {
  res.send("Estoy en /api");
});

router.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

router.get("/peliculas/:id", (req, res) => {
  const { id } = req.params;
  const pelicula = peliculas.find((pepe) => pepe.id == id);
  res.json(pelicula);
});

router.post("/peliculas", (req, res) => {
  const pelicula = req.body;
  peliculas.push(pelicula);
  res.sendStatus(201);
});

router.put("/peliculas/:id", (req, res) => {
  const { id } = req.params;

  peliculas.forEach((pelicula) => {
    if (pelicula.id == id) {
      console.log(pelicula);
      pelicula.id = req.body.id;
      pelicula.titulo = req.body.titulo;
      pelicula.duracion = req.body.duracion;
      pelicula.genero = req.body.genero;
    }
  });
  res.send("Película modificada");
  // const peliculaIndex = peliculas.findIndex((pelicula) => id == pelicula.id);
  // peliculas[peliculaIndex] = req.body;
  // res.send(peliculas[peliculaIndex]);
});

router.delete("/peliculas/:id", (req, res) => {
  const { id } = req.params;
  const peliculaIndex = peliculas.findIndex((pelicula) => pelicula.id == id);
  peliculas.splice(peliculaIndex, 1);
  res.send("Eliminé un elemento");
});

module.exports = router;
