exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        // three players
        {
          id: 1,
          name: "John Doe",
          user_name: "JohnnyBoyZ20",
          email: "john@doe.com",
          password: "asdasiuhu7qweqwe",
        },
        {
          id: 2,
          name: "Jane Doe",
          user_name: "Janelicious",
          email: "jane@doe.com",
          password: "87yt34h32f42",
        },
        {
          id: 3,
          name: "Zach Worthlin",
          user_name: "Zworth35",
          email: "zworth35@gmail.com",
          password: "423tb4673242",
        },
      ]);
    });
};
