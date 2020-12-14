$(function () {
  $(document).scroll(function () {
    var navbar = $(".navbar-fixed-top");
    var btnEmail = $(".shake-button");
    navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
    btnEmail.toggleClass(
      "shake",
      $(this).scrollTop() > btnEmail.offset().top - 300
    );
  });
});
