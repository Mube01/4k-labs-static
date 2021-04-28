<template>
  <div
    class="Team"
    :style="backgroundStyles(require('@/assets/' + Background + ''))"
  >
    <div class="inner-container">
      <h2 class="inner-header">
        {{ name }}
      </h2>
      <p>
        The team of 4K Labs are from a wide variety of discipline and talent so
        as to create Interdisciplinary environment. These have helped us to
        complete projects in a defined manner. Our team is a combination of
        Electrical engineers, software engineers, Mechanical engineers &
        designers. 4K Labs- team is really humble and smooth to communicate
        with.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Team",
  props: {
    name: String,
    Description: String,
    Background: String,
  },
  methods: {
    backgroundStyles(image) {
      return { "background-image": `url(${image})` };
    },
  },
};
</script>
<style lang="css" scoped>
.Team {
  width: 350px;
  height: 400px;
  padding: 10px;
  margin: 10px;
  color: white;
}
.inner-header {
  color: white;
  background: rgb(175, 81, 38);
  padding: 20px;
  text-align: left;
}
.inner-container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.541);
  color: white;
  text-align: left;
}
.inner-container p {
  width: 250px;
  padding: 10px;
  margin-left: 30px;
  margin-top: 30px;
  border-bottom: 3px solid white;
}
</style>