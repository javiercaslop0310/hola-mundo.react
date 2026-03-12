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
];
