exports.up = function (knex) {
  return knex.schema
    .createTable("players", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("user_name", 128).notNullable().unique().index();
      tbl.string("email", 255).notNullable().unique().index();
      tbl.string("password", 255).notNullable();
    })
    .createTable("games", (tbl) => {
      tbl.increments();
    })
    .createTable("players_games", (tbl) => {
      tbl.increments();
      tbl
        .integer("player_id")
        .unsigned()
        .notNullable()
        .references("players.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("game_id")
        .unsigned()
        .notNullable()
        .references("games.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("rounds", (tbl) => {
      tbl.increments();
      tbl
        .integer("game_id")
        .unsigned()
        .notNullable()
        .references("games.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.integer("round").unsigned().notNullable();
      tbl.text("subject").notNullable();
    })
    .createTable("votes", (tbl) => {
      tbl.increments();
      tbl
        .integer("round_id")
        .unsigned()
        .notNullable()
        .references("rounds.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("player_id")
        .unsigned()
        .notNullable()
        .references("players.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("vote_cast")
        .unsigned()
        .notNullable()
        .references("players.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("vote_cast")
    .dropTableIfExists("player_id")
    .dropTableIfExists("round_id")
    .dropTableIfExists("votes")
    .dropTableIfExists("rounds")
    .dropTableIfExists("players_games")
    .dropTableIfExists("games")
    .dropTableIfExists("players");
};
