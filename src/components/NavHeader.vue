<template>
  <div class="header">
    <h1 class="logo">LABIR</h1>
    <ul class="options">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/project">Projects</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
let project = [
  {
    key: 1,
    title: "Ema-John",
    pic: "../image/emajohn.png",
    description:
      "This is project for E-commerce website.This project was done with React.JS & Node.Js along with MongoDB. In this project firebase authentication privateroute was also used.",
    DemoLink: "https://suspicious-noether-5c846b.netlify.app/",
    CodeLink: "https://github.com/Labir852/ema-john-simple",
  },
  {
    key: 2,
    title: "Facebook-Clone",
    pic: "../image/facebook-clone.png",
    description:
      "This is project of Clone of the Facebook.This project was done with React.JS . This is a practice project.",
    DemoLink: "https://quirky-kare-786c28.netlify.app/",
    CodeLink: "https://github.com/Labir852/facebook-clone",
  },
  {
    key: 3,
    title: "Travel-Guru",
    pic: "../image/travel-guru.png",
    description:
      "This is project for ticket booking demo app. This project was done with React.JS & Node.Js along with MongoDB. In this project firebase authentication privateroute was also used.",
    DemoLink: "https://travel-guru-8dfa2.firebaseapp.com/Search/SAJEK-VALLEY",
    CodeLink: "https://github.com/Labir852/assignment-travel-guru",
  },
  {
    key: 4,
    title: "Udacity-Clone",
    pic: "../image/udacity-clone.png",
    description:
      "This is project of Clone of the Udacity.This project was done with React.JS . This is a practice project.",
    DemoLink: "https://suspicious-roentgen-6fc960.netlify.app/",
    CodeLink: "https://github.com/Labir852/assignment_udacity_clone",
  },
  {
    key: 5,
    title: "Post-Comment",
    pic: "../image/post-comment.png",
    Description:
      "This is project for demonstrating post comment feature like facebook.This project was done with React.JS . This is a practice project.",
    DemoLink: "https://loving-brown-dc8c40.netlify.app/",
    CodeLink: "https://github.com/Labir852/assignment-post-comment",
  },
  {
    key: 6,
    title: "E-School",
    pic: "../image/e-school.png",
    description:
      "This is project for a School website. This project was made with HTML, CSS,Bootstrap. This is a practice project",
    DemoLink: "https://labir852.github.io/e-school-website-ASSIGNMENT/",
    CodeLink: "https://github.com/Labir852/e-school-website-ASSIGNMENT",
  },
  {
    key: 7,
    title: "Pioneer-Bank",
    pic: "../image/pioneer-bank.png",
    description:
      "This is project for demonstrating a simple banking account. This project was made with HTML, CSS,Bootstrap,JavaScript. This is a practice project",
    DemoLink: "https://labir852.github.io/pioneer-bank/",
    CodeLink: "https://github.com/Labir852/pioneer-bank",
  },
  {
    key: 8,
    title: "Hot-Gadgets",
    pic: "../image/hot-gadgets.png",
    description:
      "This is project for demonstrating a simple e-commerce website. This project was made with HTML, CSS,Bootstrap. This is a practice project",
    DemoLink: "https://labir852.github.io/hot-gadgets/",
    CodeLink: "https://github.com/Labir852/hot-gadgets",
  },
  {
    key: 9,
    title: "Panda-Commerce",
    pic: "../image/panda_commerce.png",
    description:
      "This is project for demonstrating a simple e-commerce website. This project was made with HTML, CSS,Bootstrap. This is a practice project",
    DemoLink: "https://labir852.github.io/panda-commerce/",
    CodeLink: "https://labir852.github.io/panda-commerce/",
  },
  {
    key: 10,
    title: "Web-Portfolio-demo",
    pic: "../image/WebPortfolioPractice.png",
    description:
      "This is project for demonstrating a simple potfolio website. This project was made with HTML, CSS. This is a practice project",
    DemoLink: "https://labir852.github.io/WEB-PORTFOLIO-ASSIGNMENT/",
    CodeLink: "https://github.com/Labir852/WEB-PORTFOLIO-ASSIGNMENT",
  },
  {
    key: 11,
    title: "FOCUSD",
    pic: "../image/javaProject.jpg",
    description:
      "This is my University Java project made with JSWING and JAVA OOPs concept.It is based on famous POMODORO technique.",
    CodeLink: "https://github.com/Labir852/University-Java-Project",
  },
];
export default {
  name: "NavHeader",
  props: { project },
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
li {
  list-style: none;
}
.options li a {
  list-style: none;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  background-color: rgba(128, 128, 128, 0.5);
  color: white;
  border: 3px solid lightgray;
  border-radius: 5px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
}
.header .logo {
  margin-left: 100px;
}
.header .options {
  display: flex;
  margin-right: 100px;
}
.options li:hover {
}
.n-style {
  font-size: 24px;
  font-weight: bold;
}
</style>
