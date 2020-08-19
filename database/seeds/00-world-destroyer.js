const knexCleaner = require("knex-cleaner");

exports.seed = function (knex) {
  return knex("votes")
    .del()
    .then(() => {
      return knex("rounds")
        .del()
        .then(() => {
          return knex("players_games")
            .del()
            .then(() => {
              knexCleaner.clean(knex, {
                mode: "truncate",
                restartIdentity: true,
              });
            });
        });
    });
};
