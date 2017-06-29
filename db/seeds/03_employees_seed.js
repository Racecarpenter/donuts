exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function() {
      // Inserts seed entries
      return knex('employees').insert([{
          first_name: 'Race',
          last_name: 'Carpenter',
          favorite_donut: 1,
          store: 5
        },
        {
          first_name: 'Case',
          last_name: 'Rarpenter',
          favorite_donut: 2,
          store: 4
        },
        {
          first_name: 'Ecar',
          last_name: 'Retneprac',
          favorite_donut: 3,
          store: 3
        },
        {
          first_name: 'csar',
          last_name: 'parentcar',
          favorite_donut: 4,
          store: 2
        },
        {
          first_name: 'PenCar',
          last_name: 'Raceter',
          favorite_donut: 5,
          store: 1
        },
      ]);
    });
};
