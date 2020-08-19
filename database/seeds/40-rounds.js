exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("rounds")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rounds").insert([
        { id: 1, game_id: 1 },
        { id: 2, game_id: 1 },
        { id: 3, game_id: 1 },
        { id: 4, game_id: 1 },
        { id: 5, game_id: 2 },
        { id: 6, game_id: 2 },
        { id: 7, game_id: 2 },
        { id: 8, game_id: 3 },
        { id: 9, game_id: 3 },
      ]);
    });
};
