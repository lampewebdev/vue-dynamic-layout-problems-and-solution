<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import LayoutB from "../layouts/LayoutB";
export default {
  name: "About",
  created() {
    this.$emit("update:layout", LayoutB);
  }
};
</script>