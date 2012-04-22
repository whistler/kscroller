var topic_index = 0;

$(document).ready(function() {
  var topic = data[topics[0]];
  console.log(topic);
  showBadge(topics[0], topic);
  scroll();
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
  $("#topic").html(topic.name+"<br>"); 
  $("#topic").append('<img class="badge" src="badges/'+ topic.badge_completed + '">');
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