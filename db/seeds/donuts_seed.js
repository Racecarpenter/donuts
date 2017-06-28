exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function() {
      // Inserts seed entries
      return knex('donuts').insert([{
          name: 'Maple',
          topping: 'Maple Frosting',
          price: 3
        },
        {
          name: 'Sugar',
          topping: 'Sugar covering',
          price: 2
        },
        {
          name: 'Cinnamon',
          topping: 'Cinnamon covering',
          price: 2
        },
        {
          name: 'Jelly',
          topping: 'Jelly filling',
          price: 3
        },
        {
          name: 'Glazed',
          topping: 'Frosting',
          price: 2
        }
      ]);
    });
};
