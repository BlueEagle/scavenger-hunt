exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players_games")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("players_games").insert([
        { id: 1, player_id: 1, game_id: 1 },
        { id: 2, player_id: 2, game_id: 1 },
        { id: 3, player_id: 3, game_id: 1 },
        { id: 4, player_id: 1, game_id: 2 },
        { id: 5, player_id: 2, game_id: 2 },
        { id: 6, player_id: 3, game_id: 3 }, // a game can exist before a player enters it. It may take a player to make a game.
      ]);
    });
};
