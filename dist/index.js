"use strict";
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');
const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusantium veniam est ad nobis autem explicabo, iste aspernatur praesentium aut accusamus, harum ratione earum ipsam facilis, quidem laudantium? At illo esse error dignissimos inventore velit. Nam maiores quae sit deserunt molestiae laborum facere dignissimos quia. Dolore, repudiandae sed? Pariatur, nihil!'
    },
    {
        name: 'Nadiya Krawitzki',
        position: 'IT-Developer',
        photo: 'https://randomuser.me/api/portraits/women/47.jpg',
        text: 'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusantium veniam est ad nobis autem explicabo, iste aspernatur praesentium aut accusamus, harum ratione earum ipsam facilis, quidem laudantium? At illo esse error dignissimos inventore velit. Nam maiores quae sit deserunt molestiae laborum facere dignissimos quia. Dolore, repudiandae sed? Pariatur, nihil!'
    },
    {
        name: 'Maya Gonsales',
        position: 'Reporter',
        photo: 'https://randomuser.me/api/portraits/women/48.jpg',
        text: 'Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusantium veniam est ad nobis autem explicabo, iste aspernatur praesentium aut accusamus, harum ratione earum ipsam facilis, quidem laudantium? At illo esse error dignissimos inventore velit. Nam maiores quae sit deserunt molestiae laborum facere dignissimos quia. Dolore, repudiandae sed? Pariatur, nihil!'
    },
    {
        name: 'Teresa Mother',
        position: 'Housewife',
        photo: 'https://randomuser.me/api/portraits/women/49.jpg',
        text: 'Lorem4 ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusantium veniam est ad nobis autem explicabo, iste aspernatur praesentium aut accusamus, harum ratione earum ipsam facilis, quidem laudantium? At illo esse error dignissimos inventore velit. Nam maiores quae sit deserunt molestiae laborum facere dignissimos quia. Dolore, repudiandae sed? Pariatur, nihil!'
    },
];
let idx = 1;
function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    if (testimonial != null) {
        testimonial.innerHTML = text;
    }
    if (role != null) {
        role.innerHTML = position;
    }
    if (userImage != null) {
        userImage.src = photo;
    }
    if (username != null) {
        username.innerHTML = name;
    }
    idx++;
    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}
setInterval(updateTestimonial, 10000);
//# sourceMappingURL=index.js.map