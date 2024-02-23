const art = require("ascii-art");

art.font("The First Backend App", "Doom", (err, rendered) => {
  if (err) return;
  console.log(rendered);
});
