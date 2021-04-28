<template>
  <div>
    <MainHeader></MainHeader>
    <Events></Events>
    <Footer></Footer>
  </div>
</template>
<script>
import MainHeader from "./MainHeader";
import Events from "./Events";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    MainHeader,
    Events,
    Footer,
  },
};
</script>
<style lang="css">
* {
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
</style>