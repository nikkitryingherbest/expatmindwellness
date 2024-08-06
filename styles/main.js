const sliderData = [
  {
    img: "img/lonely.jpg",
    title: "You are feeling lonely or isolated.",
    content:
      "You are feeling  <strong>lonely</strong> or isolated. Moving abroad often means losing your support system and having no one to share your struggles with. But you are not alone — I am here for you, and together we will explore your story, make sense of it, and build a trusting relationship.",
    alt: "",
  },
  {
    img: "img/support.jpeg",
    title: "You need support.",
    content:
      "You need <strong>support</strong>. When you are going through a difficult life event sometimes all you need is someone to listen and understand you. I am here to help you navigate through the range and depth of your feelings and emotions.",
    alt: "",
  },
  {
    img: "img/depression.jpeg",
    title: "You are experiencing depression, burnout, or anxiety.",
    content:
      "You are experiencing <strong>depression</strong>, <strong>burnout</strong>, or <strong>anxiety</strong>. Breaking free from these symptoms is not a linear process that requires commitment both from you as a client and me as a therapist. Together we will create a safe environment in which the underlying causes of your condition will resurface.",
    alt: "",
  },
  {
    img: "img/self-esteem.jpeg",
    title: "You are struggling with self-esteem/body image.",
    content:
      "You are struggling with <strong>self-esteem/body image</strong>. No one comes to this world with the inherent hatred of one’s body and soul. Body shame and self-doubt are internalized behaviors we learn from others. That is why the process of unlearning them requires another human being. I will be honored to be a part of your journey of reclaiming your self-esteem and/or body image.",
    alt: "",
  },
  {
    img: "img/relationships.jpeg",
    title: "You strive to improve your interpersonal relationships.",
    content:
      "You strive to improve your <strong>interpersonal relationships</strong>. If you are unsatisfied with your relationships we can explore how communication styles, thinking patterns, and unresolved issues are contributing to the unwanted dynamics in your personal life.",
    alt: "",
  },
  {
    img: "img/self-awareness.jpeg",
    title: "You want to increase self-awareness.",
    content:
      "You want to increase <strong>self-awareness</strong>. If your need is to discover your authentic self, explore your aspirations, and find the direction you want to grow in, we will make time and space to attune to the part of yourself that knows the answers to these questions.",
    alt: "",
  },
];

function addElem(el, idx) {
  image_src = sliderData[idx].img;
  image_alt = sliderData[idx].alt;
  title = sliderData[idx].title;
  content = sliderData[idx].content;

  el.innerHTML += `
  <div class="grid grid-cols-2 gap-8 ">
      <div class="items-left">
          <img src="`+image_src+`" alt="`+image_alt+`" class="w-18 h-auto object-cover mb-4">
      </div>
      <div class="items-center">
          <p class="text-center text-l tracking-wider oswald-text">`+content+`</p>
      </div>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  sliderData.forEach((el, idx) => {
    if(idx < sliderData.length / 2) {
      addElem(document.getElementById('reach_when_0'), idx);
    } else {
      addElem(document.getElementById('reach_when_1'), idx);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
                