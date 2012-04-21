var width = 

$(document).ready(function() {
  var topic = data[topics[1]]
  console.log(topic)
  showBadge(topics[1], topic)
})

function showBadge(name, data) {
  $("#topic").html(name+"<br>"); 
  $("#topic").append('<img class="badge" src="badges/'+ data.badge + '">');
  images = ""
  for(i=0;i<data.exercises.length;i++)
  {
    images = images+"<img class='exercise' src='exercises/" + data.exercises[i] + "'/>";
  }
  $("#scroller").html(images);
}

function completeBadge(topic) {
  $("#topic").html(topic1.name+"<br>"); 
  $("#topic").append('<img class="badge" src="badges/'+ topic1.badge + '">');
}

function scroll() {
  var scroller = document.getElementById('scroller-container')
  scroller.scrollLeft = scroller.scrollLeft + 10;
  setTimeout( function () { scroll(); }, 70);
}