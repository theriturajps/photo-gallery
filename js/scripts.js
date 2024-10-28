var input = document.querySelector('input[type="search"]');
var imageLinks = document.querySelectorAll("a");

let _imgLink = "";

const imageData = {
  image1: {
    href: "images/01.jpg",
    title:
      "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
    alt: "Hay Bales",
    src: "images/thumbnails/01.jpg",
  },
  image2: {
    href: "images/02.jpg",
    title:
      "The lake was so calm today. We had a great view of the snow on the mountains from here.",
    alt: "Lake",
    src: "images/thumbnails/02.jpg",
  },
  image3: {
    href: "images/03.jpg",
    title:
      "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
    alt: "Canyon",
    src: "images/thumbnails/03.jpg",
  },
  image4: {
    href: "images/04.jpg",
    title:
      "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
    alt: "Iceberg",
    src: "images/thumbnails/04.jpg",
  },
  image5: {
    href: "images/05.jpg",
    title:
      "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    alt: "Desert",
    src: "images/thumbnails/05.jpg",
  },
  image6: {
    href: "images/06.jpg",
    title:
      "Fall is coming, I love when the leaves on the trees start to change color.",
    alt: "Fall",
    src: "images/thumbnails/06.jpg",
  },
  image7: {
    href: "images/07.jpg",
    title: "I drove past this plantation yesterday, everything is so green!",
    alt: "Plantation",
    src: "images/thumbnails/07.jpg",
  },
  image8: {
    href: "images/08.jpg",
    title: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
    alt: "Dunes",
    src: "images/thumbnails/08.jpg",
  },
  image9: {
    href: "images/09.jpg",
    title: "We enjoyed a quiet stroll down this countryside lane.",
    alt: "Countryside Lane",
    src: "images/thumbnails/09.jpg",
  },
  image10: {
    href: "images/10.jpg",
    title: "Sunset at the coast! The sky turned a lovely shade of orange.",
    alt: "Sunset",
    src: "images/thumbnails/10.jpg",
  },
  image11: {
    href: "images/11.jpg",
    title:
      "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    alt: "Cave",
    src: "images/thumbnails/11.jpg",
  },
  image12: {
    href: "images/12.jpg",
    title:
      "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
    alt: "Bluebells",
    src: "images/thumbnails/12.jpg",
  },
};

const imageArray = Object.values(imageData);

for (let index = 0; index < imageArray.length; index++) {
  let _imageLinkData = `<a href="${imageArray[index].href}" data-lightbox="gallery" data-title="${imageArray[index].title}" data-alt="${imageArray[index].alt}"><img src="${imageArray[index].src}" alt="${imageArray[index].alt}"></a>`;
  _imgLink += _imageLinkData;
  document.querySelector("section").innerHTML = _imgLink;
}


imageLinks = document.querySelectorAll("a[data-lightbox='gallery']");

input.addEventListener("keyup", function () {
  var str = input.value.toLowerCase();
  imageLinks.forEach((link) => {
    var caption = link.getAttribute("data-title").toLowerCase();
    if (caption.includes(str)) {
      link.style.display = "block"; 
    } else {
      link.style.display = "none"; 
    }
  });
});

// Reset search when input is cleared
input.addEventListener("search", function () {
  if (input.value === "") {
    imageLinks.forEach((link) => {
      link.style.display = "block"; 
    });
  }
});


lightbox.option({
  wrapAround: true,
});
