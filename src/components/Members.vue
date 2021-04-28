<template>
  <div>
    <SubHeader :Title="'Members'" />
    <div class="top-container">
      <Member />
      <Member />
      <Member />
      <Member />
    </div>
  </div>
</template>
<script>
import Member from "./Member";
import SubHeader from "./SubHeader";

export default {
  name: "Members",
  components: {
    Member,
    SubHeader,
  },
};
</script>
<style lang="css">
.top-container {
  overflow-x: hidden;
  margin-left: 10px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 10px;
}
@media screen and (max-width: 700px) {
  .top-container {
    display: block;
  }
  .member-container {
    margin: 20px;
  }
}
</style>