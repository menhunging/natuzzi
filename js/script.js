$(document).ready(function () {
  if ($(".btnArrowUp").length > 0) {
    $(".btnArrowUp").on("click", () => $(window).scrollTop(0));
  }

  if ($(".input-phone").length > 0) {
    $(".input-phone").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,
      awaitCloseAnimation: true,
      onShow: () => {},
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }
});
