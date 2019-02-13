export default {
  mounted() {
    $("#marketcar").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: ["<img src='images/slid.png'>", "<img src='images/slid.png'>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 1
        }
      }
    });

    $("#advercar").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: ["<img src='images/slid.png'>", "<img src='images/slid.png'>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $("#marketcar").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: ["<img src='images/slid.png'>", "<img src='images/slid.png'>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 1
        }
      }
    });

    $("#marketcar2").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: ["<img src='images/slid.png'>", "<img src='images/slid.png'>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 1
        }
      }
    });
  }
};
