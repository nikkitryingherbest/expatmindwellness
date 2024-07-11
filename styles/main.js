const sliderData = [
  {
    img: "img/lonely.jpeg",
    title: "You are feeling lonely or isolated.",
    content:
      "Moving abroad often means losing your support system and having no one to share your struggles with. But you are not alone — I am here for you, and together we will explore your story, make sense of it, and build a trusting relationship.",
    alt: "",
  },
  {
    img: "img/support.jpeg",
    title: "You need support.",
    content:
      "When you are going through a difficult life event sometimes all you need is someone to listen and understand you. I am here to help you navigate through the range and depth of your feelings and emotions.",
    alt: "",
  },
  {
    img: "img/depression.jpeg",
    title: "You are experiencing depression, burnout, or anxiety.",
    content:
      "Breaking free from these symptoms is not a linear process that requires commitment both from you as a client and me as a therapist. Together we will create a safe environment in which the underlying causes of your condition will resurface.",
    alt: "",
  },
  {
    img: "img/self-esteem.jpeg",
    title: "You are struggling with self-esteem/body image.",
    content:
      "No one comes to this world with the inherent hatred of one’s body and soul. Body shame and self-doubt are internalized behaviors we learn from others. That is why the process of unlearning them requires another human being. I will be honored to be a part of your journey of reclaiming your self-esteem and/or body image.",
    alt: "",
  },
  {
    img: "img/relationships.jpeg",
    title: "You need support.",
    content:
      "When you are going through a difficult life event sometimes all you need is someone to listen and understand you. I am here to help you navigate through the range and depth of your feelings and emotions.",
    alt: "",
  },
  {
    img: "img/self-discovery.jpeg",
    title: "You need support.",
    content:
      "When you are going through a difficult life event sometimes all you need is someone to listen and understand you. I am here to help you navigate through the range and depth of your feelings and emotions.",
    alt: "",
  },
];

function showSlides(currentSlideIndex) {
  let image = document.getElementById("sliderContent_img");
  let title = document.getElementById("sliderContent_title");
  let content = document.getElementById("sliderContent_content");

  image.src = sliderData[currentSlideIndex].img;
  image.alt = sliderData[currentSlideIndex].alt;
  title.innerHTML = sliderData[currentSlideIndex].title;
  content.innerHTML = sliderData[currentSlideIndex].content;
}
document.addEventListener("DOMContentLoaded", function () {
  sliderData.forEach((element, index) => {
    console.log(document.getElementById("sliderContent_buttons"));
    if (document.getElementById("sliderContent_buttons").innerHTML === null) {
      document.getElementById("sliderContent_buttons").innerHTML =
        '<button class="bg-gray-400 hover:bg-gray-600 h-1 w-24 mx-2" onclick="showSlides(' +
        index +
        ')"></button>';
    } else {
      document.getElementById("sliderContent_buttons").innerHTML +=
        '<button class="bg-gray-400 hover:bg-gray-600 h-2 w-24 mx-2 rounded-sm" onclick="showSlides(' +
        index +
        ')"></button>';
    }
  });

  showSlides(0);
});
