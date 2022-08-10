<template>
  <div class="projectPage">
    <h1 class="fh1">Projects <span class="design"></span></h1>

    <p>
      Here are projects I've worked on in my past year of web development. Not
      all are great but they're in order of my experience.
    </p>

    <hr class="pphr" />
    <div
      v-for="items in project"
      v-bind:items="items"
      v-bind:key="items.key"
      class="card w-100 fb"
      style="width: 18rem"
      :style="'background-image: url(' + items.pic + ')'"
    >
      <div class="card-body">
        <h5 class="card-title">{{ items.title }}</h5>
        <p class="card-text">{{ items.description }}</p>
        <a :href="items.DemoLink" class="btn btn-primary" target="_blank">
          DEMO</a
        >
        <a :href="items.CodeLink" class="btn btn-danger" target="_blank"
          >CODE</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectPage",
  props: {},
  data() {
    return {
      project: [
        {
          key: 1,
          title: "Ema-John",
          pic: require("../image/emajohn.png"),
          description:
            "This is project for E-commerce website.This project was done with React.JS & Node.Js along with MongoDB. In this project firebase authentication privateroute was also used.",
          DemoLink: "https://suspicious-noether-5c846b.netlify.app/",
          CodeLink: "https://github.com/Labir852/ema-john-simple",
        },
        {
          key: 2,
          title: "Facebook-Clone",
          pic: require("../image/facebook-clone.png"),
          description:
            "This is project of Clone of the Facebook.This project was done with React.JS . This is a practice project.",
          DemoLink: "https://quirky-kare-786c28.netlify.app/",
          CodeLink: "https://github.com/Labir852/facebook-clone",
        },
        {
          key: 3,
          title: "Travel-Guru",
          pic: require("../image/Travel_guru.png"),
          description:
            "This is project for ticket booking demo app. This project was done with React.JS & Node.Js along with MongoDB. In this project firebase authentication privateroute was also used.",
          DemoLink:
            "https://travel-guru-8dfa2.firebaseapp.com/Search/SAJEK-VALLEY",
          CodeLink: "https://github.com/Labir852/assignment-travel-guru",
        },
        {
          key: 4,
          title: "Udacity-Clone",
          pic: require("../image/Udacity_Clone.png"),
          description:
            "This is project of Clone of the Udacity.This project was done with React.JS . This is a practice project.",
          DemoLink: "https://suspicious-roentgen-6fc960.netlify.app/",
          CodeLink: "https://github.com/Labir852/assignment_udacity_clone",
        },
        {
          key: 5,
          title: "Post-Comment",
          pic: require("../image/post_comment.jpg"),
          description:
            "This is project for demonstrating post comment feature like facebook.This project was done with React.JS . This is a practice project.",
          DemoLink: "https://loving-brown-dc8c40.netlify.app/",
          CodeLink: "https://github.com/Labir852/assignment-post-comment",
        },
        {
          key: 6,
          title: "E-School",
          pic: require("../image/E-school.png"),
          description:
            "This is project for a School website. This project was made with HTML, CSS,Bootstrap. This is a practice project",
          DemoLink: "https://labir852.github.io/e-school-website-ASSIGNMENT/",
          CodeLink: "https://github.com/Labir852/e-school-website-ASSIGNMENT",
        },
        {
          key: 7,
          title: "Pioneer-Bank",
          pic: require("../image/pioneerbank.jpg"),
          description:
            "This is project for demonstrating a simple banking account. This project was made with HTML, CSS,Bootstrap,JavaScript. This is a practice project",
          DemoLink: "https://labir852.github.io/pioneer-bank/",
          CodeLink: "https://github.com/Labir852/pioneer-bank",
        },
        {
          key: 8,
          title: "Hot-Gadgets",
          pic: require("../image/Hot-gadgets.png"),
          description:
            "This is project for demonstrating a simple e-commerce website. This project was made with HTML, CSS,Bootstrap. This is a practice project",
          DemoLink: "https://labir852.github.io/hot-gadgets/",
          CodeLink: "https://github.com/Labir852/hot-gadgets",
        },
        {
          key: 9,
          title: "Panda-Commerce",
          pic: require("../image/panda_commerce.png"),
          description:
            "This is project for demonstrating a simple e-commerce website. This project was made with HTML, CSS,Bootstrap. This is a practice project",
          DemoLink: "https://labir852.github.io/panda-commerce/",
          CodeLink: "https://labir852.github.io/panda-commerce/",
        },
        {
          key: 10,
          title: "Web-Portfolio-demo",
          pic: require("../image/WebPortfolioPractice.png"),
          description:
            "This is project for demonstrating a simple potfolio website. This project was made with HTML, CSS. This is a practice project",
          DemoLink: "https://labir852.github.io/WEB-PORTFOLIO-ASSIGNMENT/",
          CodeLink: "https://github.com/Labir852/WEB-PORTFOLIO-ASSIGNMENT",
        },
        {
          key: 11,
          title: "FOCUSD",
          pic: require("../image/javaProject.jpg"),
          description:
            "This is my University Java project made with JSWING and JAVA OOPs concept.It is based on famous POMODORO technique.",
          CodeLink: "https://github.com/Labir852/University-Java-Project",
        },
      ],
    };
  },
};
</script>
<style>
.card-title {
  font-size: xx-large;
  font-weight: bolder;
}
.card-text {
  margin-top: 30px;
  font-size: large;
  font-weight: bold;
}
.pphr {
  margin-top: 50px;
  margin-bottom: 50px;
}
.fh1 {
  font-weight: bold;
}
.projectPage {
  text-align: left;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.card {
  color: black;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 350px;
  padding: 30px;
  margin-bottom: 50px;
}
</style>
