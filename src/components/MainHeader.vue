<template>
  <div>
    <div class="parent">
      <video autoplay muted loop id="myVideo" class="vid">
        <source src="../assets/video/background.mp4" type="video/mp4" />
      </video>
      <div class="header">
        <a href="index.html">
          <img src="../assets/images/logo.webp" alt="" class="logo"
        /></a>

        <div class="links">
          <div class="menu-icon" id="click" @click="toggleMenu()">
            <i class="fa fa-bars"></i>
          </div>
          <ul class="link" id="menu-elements">
            <a href="teams.html">
              <li class="menu-items">Teams</li>
            </a>
            <a href="members.html">
              <li class="menu-items">Members</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="middle">
        <div class="message">
          <h2 id="messageName">4K Labs</h2>
        </div>
        <a href="#details">
          <button class="btn-find" id="btnFind">Recent &darr;</button></a
        >
      </div>
    </div>
    <div class="desc">
      <div class="head">
        <p>
          4K Labs is a Research & Development laboratory at Addis Ababa
          University under the department of computer science.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
  components: {},
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
<style lang="css">
.desc {
  background: white;
  height: 250px;
  color: white;
}
.head {
  text-align: center;
  background: rgb(148, 73, 38);
  color: white;
  padding: 70px;
  font-size: 20px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.parent {
  margin: 0;
  padding: 0;
  height: 550px;
  background: rgba(39, 38, 38, 0.438);
}
.vid {
  position: absolute;
  top: 0;
  width: 100%;
  overflow-y: hidden;

  z-index: -10000;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: none;
}
.links {
  margin-right: 0px;
  padding: 15px;
}
.links li {
  display: inline-block;
  list-style: none;
  height: 40px;
  width: 80px;
}
.links a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 17px;
}
.logo {
  width: 100px;
  margin-left: 50px;
  cursor: pointer;
}
.btn-find {
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid rgb(175, 81, 38);
  background: none;
  color: rgb(201, 92, 41);
  font-size: 15px;
}
.middle {
  width: 100%;
  margin-top: -70px;
  text-align: center;
}
.message {
  color: white;
  text-align: center;
}
.message h2 {
  font-size: 40px;
  margin-top: 100px;
  padding: 20px;
}
.menu-items {
  border-bottom: 3px solid transparent;
  text-align: center;
}
.menu-items:hover {
  border-bottom: 3px solid rgb(255, 255, 255);
  transition: all 0.2s ease-in;
}
.menu-icon {
  display: none;
  color: rgb(175, 81, 38);
}
@media screen and (max-width: 700px) {
  .parent {
    height: 325px;
    background: url(../assets/images/rename.png);
  }
  .message h2 {
    margin-top: 0;
  }
  .menu-icon {
    display: block;
    color: rgb(175, 81, 38);
    cursor: pointer;
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
  .vid {
    display: none;
  }
  .links {
    margin-right: 50px;
  }
  .middle {
    margin-top: 0;
  }
}
</style>