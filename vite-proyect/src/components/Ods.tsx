function Ods() {
  enum listaODS {
    ods1 = "Fin de la pobreza",
    ods2 = "Hambre cero",
    ods3 = "Salud y bienestar",
    ods4 = "Educación de calidad",
    ods5 = "Vida submarina",
    ods6 = "Energía asequible y no contaminante",
    ods7 = "Acción por el clima",
    ods8 = "Agua limpia y saneamiento",
  }
  type EstadoOds = "Aprobado" | "Ejecucion" | "Completado" | "Rechazado";

  interface InterfazSostenible {
    id: number;
    odsFav: listaODS;
    estado: EstadoOds;
  }

  const odsAlumnos: InterfazSostenible[] = [
    {
      id: 1,
      odsFav: listaODS.ods1,
      estado: "Rechazado",
    },
    {
      id: 2,
      odsFav: listaODS.ods2,
      estado: "Ejecucion",
    },
    {
      id: 3,
      odsFav: listaODS.ods3,
      estado: "Ejecucion",
    },
  ];

  function filtrarProyectosClimaticos(
    ods: InterfazSostenible[],
  ): InterfazSostenible[] {
    return ods.filter((o) => o.estado == "Ejecucion");
  }

  const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);

  return (
    <h2>
      {" "}
      Los ODS en ejecucion son: "{JSON.stringify(resultadoJson, null, 1)}"
    </h2>
  );
}

export default Ods;
