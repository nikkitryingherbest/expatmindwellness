const sliderData = [
  {
    img: "img/lonely.jpg",
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
      "You strive to improve your interpersonal relationships. If you are unsatisfied with your relationships we can explore how communication styles, thinking patterns, and unresolved issues are contributing to the unwanted dynamics in your personal life.",
    alt: "",
  },
  {
    img: "img/self-awareness.jpeg",
    title: "You need support.",
    content:
      "You want to increase self-awareness. If your need is to discover your authentic self, explore your aspirations, and find the direction you want to grow in, we will make time and space to attune to the part of yourself that knows the answers to these questions.",
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
          <img src="`+image_src+`" alt="`+image_alt+`" class="w-full h-auto object-cover mb-4">
      </div>
      <div class="items-center">
          <p class="text-center">`+content+`</p>
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


/**
 * 
                    <!-- <div class="grid grid-cols-2">
                        <div class="flex flex-col items-center">
                            <img src="img/lonely.jpg" alt="Lonely" class="w-full h-auto object-cover mb-4">
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-center">You are feeling lonely or isolated. Moving abroad often means losing
                                your
                                support system and having no one to share your struggles with. But you are not alone — I
                                am here
                                for you, and together we will explore your story, make sense of it, and build a trusting
                                relationship.</p>
                        </div>
                    </div>


                    <img src="img/support.jpeg" alt="Support" class="w-full h-auto object-cover mb-4">
                    <p class="text-center">You need support. When you are going through a difficult life event sometimes
                        all you need is someone to listen and understand you. I am here to help you navigate through the
                        range and depth of your feelings and emotions.</p>


                    <img src="img/depression.jpeg" alt="Depression" class="w-full h-auto object-cover mb-4">
                    <p class="text-center">You are experiencing depression, burnout, or anxiety. Breaking free from
                        these symptoms is not a linear process that requires commitment both from you as a client and me
                        as a therapist. Together we will create a safe environment in which the underlying causes of
                        your condition will resurface.</p>
                </div>
                <div class="flex flex-col items-center">
                    <img src="img/self-esteem.jpeg" alt="self-esteem" class="w-full h-auto object-cover mb-4">
                    <p class="text-center">You are struggling with self-esteem/body image. No one comes to this world
                        with the inherent hatred of one’s body and soul. Body shame and self-doubt are internalized
                        behaviors we learn from others. That is why the process of unlearning them requires another
                        human being. I will be honored to be a part of your journey of reclaiming your self-esteem
                        and/or body image.</p>
                </div>
                <div class="flex flex-col items-center">
                    <img src="img/relationships.jpeg" alt="relationships" class="w-full h-auto object-cover mb-4">
                    <p class="text-center">You strive to improve your interpersonal relationships. If you are
                        unsatisfied with your relationships we can explore how communication styles, thinking patterns,
                        and unresolved issues are contributing to the unwanted dynamics in your personal life.</p>
                </div>
                <div class="flex flex-col items-center">
                    <img src="img/self-awareness.jpeg" alt="self-awareness" class="w-full h-auto object-cover mb-4">
                    <p class="text-center">You want to increase self-awareness. If your need is to discover your
                        authentic self, explore your aspirations, and find the direction you want to grow in, we will
                        make time and space to attune to the part of yourself that knows the answers to these questions.
                    </p> -->
 */