var request  = require('../lib/request');

request.post({
  uri: '/bot',
  json: {
    bot_id: "abc",
    bot_name: "Batata",
    commands: ["Arroz", "Cenoura", "ON"],
    bot_visible: true
  },
}, function(err, result){
  if (err) console.log(err);
  console.log(result);
});


