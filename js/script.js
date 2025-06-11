function openVideo(evt, video_img) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("video_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(video_img).style.display = "block";
  evt.currentTarget.className += " active";
}

function openForm() {
  const videoOpen = document.getElementById("form_section");
  videoOpen.style.display = "block";
}
