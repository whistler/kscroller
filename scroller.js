var topic_index = 0;

$(document).ready(function() {
  var topic = data[topics[0]];
  showBadge(topics[0], topic);
  scroll();
})

function sanitizeTitle(name) {
  name = name.replace(/\-/gi, ' ')
  // Camble Case
  name = (" " + name).replace(/ ([a-z])/g, function($1){return $1.toUpperCase().replace('-','');});  
  
  return name;
}

function showBadge(name, data) {

  $("#topic").html(" ");
  topic_name = document.createElement("p");
  topic_name.innerHTML = sanitizeTitle(name);
  
  badge = document.createElement("img");
  badge.src = "badges/" + data.badge;
  $(badge).addClass("badge");
    
  $("#topic")[0].appendChild(badge);  
  $("#topic")[0].appendChild(topic_name);
    
  $("#scroller").html(" ");
  
  for(i=0;i<data.exercises.length;i++) {
    img = document.createElement("img");
    img.src = "exercises2/" + data.exercises[i];
    $(img).addClass("exercise");
    $("#scroller")[0].appendChild(img);
  }
}

function completeBadge(name, topic) {
  $("#topic").html(" ");
  topic_name = document.createElement("p");
  topic_name.innerHTML = sanitizeTitle(name);
  
  badge = document.createElement("img");
  badge.src = "badges/" + topic.badge_completed;
  $(badge).addClass("badge");
  
  $("#topic")[0].appendChild(badge);  
  $("#topic")[0].appendChild(topic_name);
}

function scroll() {
  var scroller = document.getElementById('scroller-container');
  scroller.scrollLeft = scroller.scrollLeft + 10;
  if (scroller.scrollLeft > getScrollWidth()) nextTopic();
  if (scroller.scrollLeft > getScrollWidth() - 1000) completeBadge(topics[topic_index], data[topics[topic_index]]);
  setTimeout( function () { scroll(); }, 10);
}

function getScrollWidth() {
  var len = $('.exercise').length;
  var sum = 0;
  for(i=0;i<len;i++)
  {
    sum = sum + $('.exercise')[i].width + 300;
  }
  return sum;
}

function nextTopic() {
  topic_index = topic_index + 1;
  if (topic_index < topics.length){
    var topic = data[topics[topic_index]];
    var scroller = document.getElementById('scroller-container');
    scroller.scrollLeft = 0;
    showBadge(topics[topic_index], topic);
  }
}