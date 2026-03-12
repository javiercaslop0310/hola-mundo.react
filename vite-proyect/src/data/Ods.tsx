type EstadoOds = "Aprobado" | "Ejecucion" | "Completado" | "Rechazado";

export interface InterfazSostenible {
  id: number;
  odsFav: String;
  estado: EstadoOds;
}

export const odsAlumnos: InterfazSostenible[] = [
  {
    id: 1,
    odsFav: "Fin de la pobreza",
    estado: "Rechazado",
  },
  {
    id: 2,
    odsFav: "Hambre cero",
    estado: "Ejecucion",
  },
  {
    id: 3,
    odsFav: "Salud y bienestar",
    estado: "Ejecucion",
  },
  {
    id: 4,
    odsFav: "Educación de calidad",
    estado: "Aprobado",
  },
  {
    id: 5,
    odsFav: "Igualdad de género",
    estado: "Aprobado",
  },
  {
    id: 6,
    odsFav: "Agua limpia y saneamiento",
    estado: "Ejecucion",
  },
  {
    id: 7,
    odsFav: "Energía asequible y no contaminante",
    estado: "Aprobado",
  },
  {
    id: 8,
    odsFav: "Trabajo decente y crecimiento económico",
    estado: "Ejecucion",
  },
  {
    id: 9,
    odsFav: "Industria, innovación e infraestructura",
    estado: "Aprobado",
  },
  {
    id: 10,
    odsFav: "Reducción de las desigualdades",
    estado: "Completado",
  },
  {
    id: 11,
    odsFav: "Ciudades y comunidades sostenibles",
    estado: "Ejecucion",
  },
  {
    id: 12,
    odsFav: "Producción y consumo responsables",
    estado: "Aprobado",
  },
  {
    id: 13,
    odsFav: "Acción por el clima",
    estado: "Ejecucion",
  },
  {
    id: 14,
    odsFav: "Vida submarina",
    estado: "Aprobado",
  },
  {
    id: 15,
    odsFav: "Vida de ecosistemas terrestres",
    estado: "Completado",
  },
  {
    id: 16,
    odsFav: "Paz, justicia e instituciones sólidas",
    estado: "Aprobado",
  },
  {
    id: 17,
    odsFav: "Alianzas para lograr los objetivos",
    estado: "Ejecucion",
  },
];
