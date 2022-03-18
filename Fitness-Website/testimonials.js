const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
      name: 'Maria Sans',
      position: 'Marketing',
      photo: 'images/person1.jpg',
      text: 'Since joining in FitnessTemple one year ago, I have become stronger and I have lost 20kg. The workouts are always different, hard and fun! The trainers will push you harder than though you could go. I really appreciate that the environment and culture is relaxed and comfortable.',
    },
    {
      name: 'Michael Peters',
      position: 'Software Engineer',
      photo: 'images/person2.jpg',
      text: 'It has been almost one year and I have lost weight and increased my strength. I find the coaches so motivating and supportive. During the shred I worked with Dave and he was very motivating and held me accountable. The nutritional guidance and meal plans are easy to follow that is realistic and plenty of food.',
    },
    {
      name: 'Jenet Jackson',
      position: 'Data Entry',
      photo: 'images/person3.jpg',
      text: 'I have been in here for two months. Since joining I am eating healthier and the coaching helps motivate me and the coaches keep encouraging me to do my best!!! I love the cookbook they gave me because the recipes are simple and sooo good. The studio is welcoming, motivating but not intimidating … they take the time to explain things in a very positive way.',
    },
    {
      name: 'Darius Denver',
      position: 'Receptionist',
      photo: 'images/person4.jpg',
      text: 'I joined in this fitness center about 8 months ago and I lost 20kg. My favorite thing about their workouts is how much the coaches care and push you.  The best thing working with an accountability coach is their never ending availability to ask questions and get support.',
    },
    {
      name: 'Beth Beneth',
      position: 'Graphic Designer',
      photo: 'images/person5.jpg',
      text: 'The nutritional guidance is simple and straight forward. The recipes I have tried are surprisingly delicious, but so much more nutritious than what I might normally put together for even a “healthy meal”. My favorite part of the environment and culture is that the community is so welcoming and supportive.  Even when I am the weakest or slowest in a class, I never feel out of place because everyone truly supports each other.',
    },
    {
      name: 'Martin King',
      position: 'Accountant',
      photo: 'images/person6.jpg',
      text: 'I have been with FitnessTemple for one week. Since joining I am eating healthier and the coaching helps motivate me and the coaches keep encouraging me to do my best!!! I love the cookbook they gave me because the recipes are simple and sooo good. The studio is welcoming, motivating but not intimidating … they take the time to explain things in a very positive way …. Love it!',
    },
    {
      name: 'Brenda Simpsons',
      position: 'Director',
      photo: 'images/person7.jpg',
      text: 'Best training and trainers I have ever had in my life!. Super friendly atmosphere, every session is different and fun.The trainers really push, motivate and helps us to exceed our limits and achieve our goals.',
    },
    {
      name: 'Patrick Space',
      position: 'Front End Developer',
      photo: 'images/person8.jpg',
      text: 'Trained here for 2nd year in a row. The location is great, not on the main road like most other gyms in the area so you do not get bothered by traffic. Surrounded by nature and mountain views makes for a pleasant training environment. Especially for the running. The gym also has a quite large boot camp area which I enjoyed training on. The coaches I found to be very professional and knowledgeable. Learned plenty of new stuff.',
    },
    {
      name: 'Daniela Daniels',
      position: 'Director',
      photo: 'images/person9.jpg',
      text: 'Wow, I really recommend this place for you if you want to have some fun while you do your workout! They have an amazing staff that are super serious and makes you reach your goals with a smile on their faces!',
    },
    {
      name: 'Andrew Sans',
      position: 'Director',
      photo: 'images/person10.jpg',
      text: 'I found a place I am really comfortable and a workout I love. It feels great being fitter and stronger - it is helped my own confidence a lot in how I feel everyday.',
    },
  ];

let index = 1;

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[index];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;
    
    index = index + 1;
    
    if (index > testimonials.length -1) {
        index = 0;
    };
};

setInterval(() => {
updateTestimonial();
}, 10000);