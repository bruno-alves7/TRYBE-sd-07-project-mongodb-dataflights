db.getCollection("voos")
  .find(
    {},
    {
      vooId: 1,
      _id: 0,
    },
  )
  .limit(2)
  .skip(10);
