/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onMessage(event) {
  var name = "";

  if (event.space.type == "DM") {
    name = "You";
  } else {
    name = event.user.displayName;
  }
  var data = [["indulges on street tacos."],
              ["eats an ice cream."],["hides in a closet."],
              ["sobs in despair."],
              ["cries loudly."],
              ["falls off a cliff."]]; // EDIT THESE
  var index = Math.floor(Math.random() * data.length);
  var theChosenOne = data.splice(index,1);  
  var message = name + " flips the flipping table and " + theChosenOne;

  return { "text": message };
}