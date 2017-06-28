exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function() {
      // Inserts seed entries
      return knex('shops').insert([{
          name: 'Roundys',
          city: 'Fat'
        },
        {
          name: 'Cloggys',
          city: 'Obese Beach'
        },
        {
          name: 'Fattys',
          city: 'New Butt City'
        },
        {
          name: 'Slappys',
          city: 'Lardville'
        }
      ]);
    });
};
