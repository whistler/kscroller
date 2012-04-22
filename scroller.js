var width = 

$(document).ready(function() {
  var topic = data[topics[1]]
  console.log(topic)
  showBadge(topics[1], topic)
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
    
  images = ""
  for(i=0;i<data.exercises.length;i++)
  {
    images = images+"<img class='exercise' src='exercises/" + data.exercises[i] + "'/>";
  }
  $("#scroller").html(images);
}

function completeBadge(topic) {
  topic_name = document.createElement("p");
  topic_name.innerHTML = topic1.name;
  
  badge = document.createElement("img");
  badge.src = "badges/" + topic1.badge;
  $(badge).addClass("badge");
  
  $("#topic")[0].appendChild(topic_name);
  $("#topic")[0].appendChild(badge);
}

function scroll() {
  var scroller = document.getElementById('scroller-container')
  scroller.scrollLeft = scroller.scrollLeft + 10;
  setTimeout( function () { scroll(); }, 70);
}