var topic_index = 0;

$(document).ready(function() {
  var topic = data[topics[0]];
  console.log(topic);
  showBadge(topics[0], topic);
})

function showBadge(name, data) {
  name = name.replace(/\-/gi, ' ')
  // Camble Case
  name = (" " + name).replace(/ ([a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
  
  topic_name = document.createElement("p");
  topic_name.innerHTML = name;
  
  badge = document.createElement("img");
  badge.src = "badges/" + data.badge;
  $(badge).addClass("badge");
    
  $("#topic")[0].appendChild(badge);  
  $("#topic")[0].appendChild(topic_name);
    
  for(i=0;i<data.exercises.length;i++) {
    img = document.createElement("img");
    img.src = "exercises/" + data.exercises[i];
    $(img).addClass("exercise");
    
    $("#scroller")[0].appendChild(img);
  }
}

function completeBadge(topic) {
  topic_name = document.createElement("p");
  topic_name.innerHTML = topic1.name;
  
  badge = document.createElement("img");
  badge.src = "badges/" + topic1.badge_completed;
  $(badge).addClass("badge");
  
  $("#topic")[0].appendChild(topic_name);
  $("#topic")[0].appendChild(badge);
}

function scroll() {
  var scroller = document.getElementById('scroller-container');
  scroller.scrollLeft = scroller.scrollLeft + 10;
  if (scroller.scrollLeft > getScrollWidth()) nextTopic();
  if (scroller.scrollLeft > getScrollWidth() - 500) completeBadge(data[topics[topic_index]])
  setTimeout( function () { scroll(); }, 30);
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
  var topic = data[topics[topic_index]];
  showBadge(topics[topic_index], topic);
  scroller.scrollLeft = 0;
}