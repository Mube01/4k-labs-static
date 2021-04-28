<template>
  <div class="contents" id="details">
    <div class="event-wrapper">
      <div class="event">
        <h2>#ADWAHACKATON</h2>
      </div>
    </div>
    <div class="second-wrapper">
      <div class="event-2">
        <h2>@4KLabs</h2>
        <p>
          This hackathon was dedicated to hacking the Alpha1s robot to be able
          to control the signals in a defined manager so as to do further work.
          It was given the name adwa since the hackathon was the same exact day
          of ADWA celebration. Members as well students that were interested
          participated in the hackathon. We achieved a promising result.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Event",
  props: {
    Name: String,
    Pic1: String,
    Pic2: String,
    Pic3: String,
  },
};
</script>
<style lang="css">
* {
  overflow-x: hidden;
}
.contents {
  background: white;
  display: grid;
  grid-template-columns: 100px 500px 30px 350px 10px 200px;
  grid-template-rows: 50px 200px 50px 250px;
  padding: 25px;
  padding-top: 0px;
}

.event-wrapper {
  grid-column: 2;
  grid-row: 2 / span all;
  height: 500px;
  background: url(../assets/images/hackaton.jpg);
  background-size: cover;
  background-position: center;
  padding: 25px;
}
.event {
  padding: 10px;
  width: 60%;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  background-color: rgb(175, 81, 38);
}
.event h2 {
  padding: 10px;
}
.second-wrapper {
  grid-column: 4;
  grid-row: 2 / span all;
  margin-top: 50px;
  width: 500px;
  height: auto;
  padding: 40px;
  color: black;
  border-top: 4px solid rgb(175, 81, 38);
}
.event p {
  height: 700px;
}
@media screen and (max-width: 700px) {
  .event-wrapper {
    padding: 10px;
  }
  .contents {
    display: block;
  }
  .event {
    width: 100%;
  }
  .second-wrapper {
    width: 100%;
    padding: 15px;
  }
}
</style>