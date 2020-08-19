exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("rounds")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rounds").insert([
        { id: 1, game_id: 1, round: 1, subject: "Something orange" },
        { id: 2, game_id: 1, round: 2, subject: "Flag" },
        { id: 3, game_id: 1, round: 3, subject: "Octagon" },
        { id: 4, game_id: 1, round: 4, subject: "Something with scales" },
        {
          id: 5,
          game_id: 2,
          round: 1,
          subject: "Something that reminds you of your childhood",
        },
        {
          id: 6,
          game_id: 2,
          round: 2,
          subject: "Something you got for free",
        },
        {
          id: 7,
          game_id: 2,
          round: 3,
          subject: "A gift from a family member",
        },
        { id: 8, game_id: 3, round: 1, subject: "A picture you took" },
        {
          id: 9,
          game_id: 3,
          round: 2,
          subject: "Something that's your favorite color",
        },
      ]);
    });
};
