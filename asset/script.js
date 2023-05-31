const images = [
  {
    name: "Gambar 1",
    type: "olahraga",
    url: "https://www.bcalife.co.id/storage/articles/share/bagus-untuk-kesehatan-simak-5-manfaat-olahraga-bagi-tubuh-ini-pantang-diabaikan-1653392364.jpg",
  },
  {
    name: "Gambar 2",
    type: "hiburan",
    url: "https://primaberita.com/wp-content/uploads/2020/11/Suroboyo-Carnival-Park-1.jpe",
  },
  {
    name: "Gambar 3",
    type: "seni",
    url: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/01/B100114-cover-scaled.jpg",
  },
  {
    name: "Gambar 4",
    type: "sosial",
    url: "https://cdn1-production-images-kly.akamaized.net/cSkMxnr0kzgGWbtHFzAspshP58A=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3390703/original/065507600_1614673949-akson-1K8pIbIrhkQ-unsplash__1_.jpg",
  },
  {
    name: "Gambar 5",
    type: "olahraga",
    url: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15012412/kesehatan-olahraga.jpg",
  },
  {
    name: "Gambar 6",
    type: "seni",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhYv9qcHMVKeKIIz8eIL_VQ7CJp9RTK4juEpWbPOWUVhU-urT_kjUdOna9H-avehVQXo&usqp=CAU",
  },
  {
    name: "Gambar 7",
    type: "hiburan",
    url: "https://blog.klikindomaret.com/wp-content/uploads/2021/01/carousel-horses-carnival-merry-go-round_1-1.jpg",
  },
];

$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
