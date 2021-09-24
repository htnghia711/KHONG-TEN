// <!-- Display Date -->

window.onload = setInterval(clock, 1000);
function clock() {
  var d = new Date();
  var date = d.getDate();
  var year = d.getFullYear();
  var month = d.getMonth();
  var monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = monthArr[month];
  document.getElementById("date").innerHTML =
    date + " . " + month + " . " + year;
}

// <!-- /End Date -->

// <!-- Search -->

$(".search-toggle").addClass("closed");
$(".search-toggle .search-icon").click(function (e) {
  if ($(".search-toggle").hasClass("closed")) {
    $(".search-toggle").removeClass("closed").addClass("opened");
    $(".search-toggle, .search-container").addClass("opened");
    $("#search-terms").focus();
  } else {
    $(".search-toggle").removeClass("opened").addClass("closed");
    $(".search-toggle, .search-container").removeClass("opened");
  }
});

// <!-- /End Search -->

// <!--  Active -->
$("ul.product a").click(function () {
  if (!$(this).hasClass("active")) {
    $(".active").removeClass("active");
    $(this).addClass("active");
  } else {
    return false; //this prevents flicker
  }
});
// <!-- /End Active -->
