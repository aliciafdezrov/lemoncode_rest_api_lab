# Laboratorio de REST API

Este ejercio está divido en varias ramas:

- [Master](#master)
- [Ejercicio 1](#ejercicio-1)
- [Ejercicio 2](#ejercicio-2)
- [Opcional y Challenge](#opcional-y-challenge)

## Master

Puedes encontrar la implementación de base [aquí](https://github.com/aliciafdezrov/lemoncode_rest_api_lab/tree/master).


En la rama master está el punto de partida desde el que se desarrollan el
resto de ejercicios con las adaptaciones necesarias:

- Cambiar las escenas, rutas y pods a character-collection y character.

## Ejercicio 1

Puedes encontrar la implementación del ejercicio 1 [aquí](https://github.com/aliciafdezrov/lemoncode_rest_api_lab/tree/ejercicio1). Los requisitos del
ejercicio son los siguientes:

- Obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o
Fetch).
- Navegar a la página de un character mostrando el detalle del mismo (segunda
llamada a la API Rest).

## Ejercicio 2

Puedes encontrar la implementación del ejercicio 2 [aquí](https://github.com/aliciafdezrov/lemoncode_rest_api_lab/tree/ejercicio2). Los requisitos del
ejercicio son los siguientes:

- Montar un json-server local.
- Añadir una colección de characters basado en la API Rest de characters de Rick
y Morty.
- Añadir un campo nuevo donde guardar las mejores frases de cada personaje.

  - El campo se llama bestSentences.
  - El campo es inicializado a vacío para cada personaje.
  - El campo puede ser editado y guardado

- Reemplazar los endpoints para que apunten al json-server.


## Opcional y Challenge

Puedes encontrar la implementación del opcional y del challenge [aquí](https://github.com/aliciafdezrov/lemoncode_rest_api_lab/tree/opcional). El challenge
se ha implementado a partir del código de GraphQL por preferencia personal. Los
requisitos de los ejercicios son los siguientes:

- Obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o
  Fetch).
- Navegar a la página de un character mostrando el detalle del mismo (segunda
  llamada a la API Rest).
- Filtrado de personajes por las siguientes categorias:
  - Nombre: Filtrar por el nombre del personaje.
  - Estado: Alive, dead o unknown.
  - Especie: Filtrar por la especie del personaje.
  - Tipo: Filtrar por el tipo de personaje.
  - Género: Female, male, genderless or unknown.
- Implementar la paginación para la lista de personajes.

## Implementación

- Uso de la librería de Material UI.
- Uso de react-router.
- Uso de json-server.
- Uso de graphql.
