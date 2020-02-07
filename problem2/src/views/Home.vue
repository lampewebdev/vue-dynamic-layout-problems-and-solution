<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import LayoutA from "../layouts/LayoutA";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", LayoutA);
  }
};
</script>
