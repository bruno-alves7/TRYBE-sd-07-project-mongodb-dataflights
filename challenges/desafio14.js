db.getCollection("voos").count({
  "aeroportoDestino.pais": { $ne: "BRASIL" },
});
