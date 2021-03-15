db.getCollection("voos").findOne(
  {
    $and: [
      {
        $or: [
          { "empresa.name": { $eq: "DELTA AIRLINES" } },
          { "empresa.name": { $eq: "AMERICAN AIRLINES" } },
        ],
      },
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
    ],
  },
  {
    vooId: 1,
    _id: 0,
  },
);
