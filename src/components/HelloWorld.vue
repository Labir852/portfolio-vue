<template>
  <div class="hello">
    <h1 class="title">
      Web Developer designing beautiful, intuitive websites
      <span class="design"></span>
    </h1>
    <p class="paragraph">
      I'm Tanvir Anjum Labir, a Bangladesh based React.Js developer/student
      @Primeasia University, with never stopping love for learning new tech. I
      am specialising in Web Development with React.js , Express, MongoDB and
      Node.JS
    </p>
    <div class="favic">
      <div class="links">
        <a href="https://github.com/Labir852" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="https://twitter.com/loverazlabir" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/labir159/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div class="emailbtn">
        <p><a class="em" href="mailto:tanvir.labir@gmail.com">Email me</a></p>
      </div>
    </div>
    <hr />

    <h1 class="ft">Featured Project</h1>
    <hr />
    <div class="card w-75 fb" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Facebook Clone</h5>
        <p class="card-text">
          This project was done with React.JS . This is a practice project.
        </p>
        <a
          href="https://quirky-kare-786c28.netlify.app/"
          class="btn btn-primary"
          target="_blank"
        >
          DEMO</a
        >
        <a
          href="https://github.com/Labir852/facebook-clone"
          class="btn btn-primary"
          target="_blank"
          >CODE</a
        >
      </div>
    </div>
    <div class="card w-75 ema" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Ema-John</h5>
        <p class="card-text">
          This project was done with React.JS & Node.Js along with MongoDB. In
          this project firebase authentication privateroute was also used.
        </p>
        <a
          href="https://suspicious-noether-5c846b.netlify.app/"
          class="btn btn-primary"
          target="_blank"
        >
          DEMO</a
        >
        <a
          href="https://github.com/Labir852/ema-john-simple"
          class="btn btn-primary"
          target="_blank"
          >CODE</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<style>
.btn {
  margin: 20px;
}
.ft {
  margin-bottom: 50px;
}
hr {
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #ffffff;
  color: #fff;
  text-align: center;
}
hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: black;
}
a {
  color: white;
}
.fb {
  background-image: url("../image/facebook-clone.png");
}
.ema {
  background-image: url("../image/emajohn.png");
}
.card {
  color: black;

  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  padding: 30px;
  margin-bottom: 50px;
}
.card-title {
  font-size: 30px;
  font-weight: bold;
}
.em {
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  background-color: rgba(128, 128, 128, 0.5);
  color: white;
  border: 3px solid lightgray;
  padding: 5px;
  border-radius: 5px;
}
a:hover {
  color: white;
}
.hello {
  width: 50%;
  margin: auto;
}
.title {
  font-size: 60px;
  text-align: left;
}
.paragraph {
  text-align: left;
}
.design {
  --tw-text-opacity: 1;
  height: 10px;
  width: 10px;
  background-color: rgb(99 102 241 / var(--tw-text-opacity));
  display: inline-block;
}
.favic {
  display: flex;
  justify-content: space-between;
}
.links {
  font-size: 25px;
}
.links .fa-brands {
  margin: 20px;
  padding: 15px;
}
.links .fa-brands:hover {
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  color: white;
}

.bg-repeat {
  background-repeat: repeat;
}
.border-0 {
  border-width: 0;
}
</style>
