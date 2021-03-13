db.getCollection("voos").count({
  "aeroportoDestino.pais": { $not: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } },
});
