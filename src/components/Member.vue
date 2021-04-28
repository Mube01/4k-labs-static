<template>
  <div class="top-container">
    <div class="member-container">
      <div class="topper">
        <p>4KBOTS Member</p>
        <img src="../assets/images/1P.png" alt="" class="profile" />
        <p class="name">Tseagab Amare</p>
      </div>
      <div class="description">
        <div class="socials-links">
          <ul class="socials">
            <a href="facebook.com">
              <li><i class="fab fa-facebook-square"></i></li>
            </a>
            <a href="linkedin.com">
              <li><i class="fab fa-linkedin"></i></li>
            </a>
            <a href="twitter.com">
              <li><i class="fab fa-twitter-square"></i></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Member",
  methods: {},
  props: {
    Name: String,
    Role: String,
    Team: String,
    FaceBook: String,
    LinkedIn: String,
    Twitter: String,
  },
};
</script>
<style lang="css">
* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
}

.member-container {
  /* margin:50px; */
  width: 300px;
  height: auto;
  background: url(../assets/images/rename.png);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.topper {
  width: 100%;
  height: 50%;
  text-align: center;
  text-align: center;
  padding: 20px;
  color: white;
}
.profile {
  margin-top: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgb(175, 81, 38);
  background: white;
}
.description {
  /* margin-top:0; */
  height: auto;
  width: 100%;
  text-align: center;
  background-size: cover;
}
.name {
  width: 100%;
  margin-top: 10px;
  color: white;
}

.socials a {
  color: rgb(248, 248, 248);
}
.socials li {
  list-style: none;
  display: inline-block;
  margin: 10px;
  font-size: 25px;
}
.socials-links {
  background: rgb(175, 81, 38);
  text-align: center;
}
</style>