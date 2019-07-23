const spans = document.getElementsByTagName("span");
const img = document.getElementsByTagName("img")[0];
let index = 0;
spans[index].style.opacity = 1;
let asc = true;

let onload = setInterval(function() {
  for (const span of spans) {
    span.style.opacity = 0.6;
  }
  if (index === 4) {
    index -= 1;
    asc = false;
  } else if (index === 0) {
    index += 1;
    asc = true;
  } else {
    if (asc) {
      index += 1;
    } else {
      index -= 1;
    }
  }
  spans[index].style.opacity = 1;
  img.setAttribute("src", "./" + index + ".jpg");
}, 1000);

for (let index = 0; index < spans.length; index++) {
  spans[index].addEventListener("mousemove", function() {
    clearInterval(onload);
    for (const span of spans) {
      span.style.opacity = 0.6;
    }
    spans[index].style.opacity = 1;
    img.setAttribute("src", "./" + index + ".jpg");
  });
  spans[index].addEventListener("mouseout", function() {
    let asc = true;
    onload = setInterval(function() {
      for (const span of spans) {
        span.style.opacity = 0.6;
      }
      if (index === 4) {
        index -= 1;
        asc = false;
      } else if (index === 0) {
        index += 1;
        asc = false;
      } else {
        if (asc) {
          index += 1;
        } else {
          index -= 1;
        }
      }
      spans[index].style.opacity = 1;
      img.setAttribute("src", "./" + index + ".jpg");
    }, 1000);
  });
}
