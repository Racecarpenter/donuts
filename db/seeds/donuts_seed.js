exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function() {
      // Inserts seed entries
      return knex('donuts').insert([{
          name: 1,
          topping: 'Maple',
          price: 2.50
        },
        {
          name: 2,
          topping: 'Sugar',
          price: 2
        },
        {
          name: 3,
          topping: 'Cinnamon',
          price: 2.75
        },
        {
          name: 4,
          topping: 'Jelly(filled)',
          price: 3.50
        },
        {
          name: 5,
          topping: 'Glazed',
          price: 2
        }
      ]);
    });
};
