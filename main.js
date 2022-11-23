function next_section_is(current_section) {
  if (current_section == "") {
    return "who";
  }
  if (!document.getElementById(current_section)) {
    return "";
  }
  if (!document.getElementById(current_section).nextElementSibling) {
    return "";
  }
  return document.getElementById(current_section).nextElementSibling.id;
}
function previous_section_is(current_section) {
  if (current_section == "") {
    return "";
  }
  if (!document.getElementById(current_section)) {
    return "";
  }
  if (!document.getElementById(current_section).previousElementSibling) {
    return "";
  }
  return document.getElementById(current_section).previousElementSibling.id;
}
let lastY = 0;
let lastScrollTime = + new Date;

window.addEventListener('scroll', function (e) {
  if (lastScrollTime + 250 < + new Date) { // four per second max

    lastScrollTime = + new Date;
    setTimeout(() => {

      if (window.scrollY > lastY) {

        let next_section = next_section_is(location.hash.replace("#", ""));
        if (next_section) {
          location.hash = next_section;
        }

      } else if (window.scrollY < lastY) {

        let prev_section = previous_section_is(location.hash.replace("#", ""));
        if (prev_section) {
          location.hash = prev_section;
        }

      }

      lastY = window.scrollY;

    }, 10);

  };

});
