exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("votes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("votes").insert([
        { id: 1, player_id: 1, round_id: 1, vote_cast: 2 },
        { id: 2, player_id: 2, round_id: 1, vote_cast: 2 },
        { id: 3, player_id: 3, round_id: 1, vote_cast: 1 },
        { id: 4, player_id: 1, round_id: 2, vote_cast: 1 },
        { id: 5, player_id: 2, round_id: 2, vote_cast: 3 },
        { id: 6, player_id: 3, round_id: 2, vote_cast: 1 },
        { id: 7, player_id: 1, round_id: 3, vote_cast: 2 },
        { id: 8, player_id: 2, round_id: 3, vote_cast: 1 },
        { id: 9, player_id: 3, round_id: 3, vote_cast: 1 },
        { id: 10, player_id: 1, round_id: 4, vote_cast: 2 },
        { id: 11, player_id: 2, round_id: 4, vote_cast: 1 },
        { id: 12, player_id: 3, round_id: 4, vote_cast: 3 },
        { id: 13, player_id: 1, round_id: 5, vote_cast: 1 },
        { id: 14, player_id: 2, round_id: 5, vote_cast: 1 },
        { id: 15, player_id: 3, round_id: 5, vote_cast: 3 },
        { id: 16, player_id: 1, round_id: 6, vote_cast: 1 },
        { id: 17, player_id: 2, round_id: 6, vote_cast: 1 },
        { id: 18, player_id: 3, round_id: 6, vote_cast: 1 },
        { id: 19, player_id: 1, round_id: 7, vote_cast: 2 },
        { id: 20, player_id: 2, round_id: 7, vote_cast: 1 },
        { id: 21, player_id: 3, round_id: 7, vote_cast: 1 },
        { id: 22, player_id: 1, round_id: 8, vote_cast: 2 },
        { id: 23, player_id: 2, round_id: 8, vote_cast: 2 },
        { id: 24, player_id: 3, round_id: 8, vote_cast: 2 },
        { id: 25, player_id: 1, round_id: 9, vote_cast: 1 },
        { id: 26, player_id: 2, round_id: 9, vote_cast: 3 },
        { id: 27, player_id: 3, round_id: 9, vote_cast: 1 },
      ]);
    });
};
