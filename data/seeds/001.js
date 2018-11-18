
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tea').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tea').insert([
        { name: 'Green Tea', description: 'Green tea is a type of tea that is made from Camellia sinensis leaves that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Green tea originated in China, but its production and manufacture has spread to many other countries in Asia.', message: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/1/7/6/8/908671-1-eng-GB/', selected: 0},
        { name: 'Oolong', description: 'Oolong is a traditional semi-oxidized Chinese tea produced through a process including withering the plant under strong sun and oxidation before curling and twisting. Most oolong teas, especially those of fine quality, involve unique tea plant cultivars that are exclusively used for particular varieties.', message: 'https://www.verywellfit.com/thmb/mp35bFQHmNvvn73zAErguLXoqdY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-564075419-57fbc14e3df78c690f7ab7dc.jpg', selected: 0},
        { name: 'Earl Grey Tea', description: 'Earl Grey tea is a tea blend which has been flavoured with the addition of oil of bergamot. Bergamot is a variety of orange that is often grown in Italy and France. The rinds fragrant oil is added to black tea to give Earl Grey its unique taste.', message: 'https://www.herbalteasonline.com/wp-content/uploads/2016/01/Earl-Grey-Tea.jpg', selected: 0}
      ]);
    });
};
