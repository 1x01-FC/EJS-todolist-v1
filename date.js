exports.getDate = function() {

  const today = new Date(); //returns a date object as opposed to string

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {

  const today = new Date(); //returns a date object as opposed to string

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}
