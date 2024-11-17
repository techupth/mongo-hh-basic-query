db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

db.pizzaOrders.find({
  $and: [
    { size: "small" },
    { quantity: { $gte: 1 } },
    { quantity: { $lt: 5 } },
  ],
});

db.pizzaOrders.find({
  $and: [
    { quantity: { $gte: 10 } },
    { credit_card_type: { $ne: "credit card" } },
  ],
});
