<template>
  <div class="parent">
    <div class="header">
      <a href="index.html">
        <img src="../assets/images/logo.png" alt="" class="logo"
      /></a>
      <div class="links">
        <div class="menu-icon" id="click" @click="toggleMenu()">
          <i class="fa fa-bars"></i>
        </div>
        <ul class="link" id="menu-elements">
          <a href="">
            <li class="menu-items">Teams</li>
          </a>
          <a href="members.html">
            <li class="menu-items">Members</li>
          </a>
        </ul>
      </div>
    </div>
    <h2 class="top" id="messageName">{{ Title }}</h2>
  </div>
</template>
<script>
export default {
  name: "SubHeader",
  components: {},
  props: {
    Title: Text,
  },
  methods: {
    toggleMenu() {
      const menuItem = document.getElementById("menu-elements");
      const messageName = document.getElementById("messageName");
      const btnFind = document.getElementById("btnFind");
      menuItem.classList.toggle("hello");
      messageName.classList.toggle("move");
      if (btnFind) {
        btnFind.classList.toggle("button-move");
      }
    },
  },
};
</script>
<style lang="css" scoped>
.menu-icon {
  display: none;
  color: rgb(175, 81, 38);
}
.parent {
  height: 200px;
  background: url(../assets/images/rename.png);
}
.top {
  width: 100%;
  color: white;
  text-align: center;
  font-size: 20px;
}
@media screen and (max-width: 700px) {
  .menu-icon {
    display: block;
  }
  .link {
    display: none;
  }
  .hello {
    display: block;
    position: absolute;
    top: 70px;
    right: 30px;
    overflow-x: visible;
  }
  .hello li {
    display: block;
    text-align: left;
    border-bottom: 1px solid white;
    padding: 5px;
  }
  .move {
    width: 65%;
  }
  .button-move {
    margin-right: 35%;
  }
}
</style>