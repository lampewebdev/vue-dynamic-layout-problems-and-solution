<template>
  <div class="contact">
    <h1>This is an Contact Page</h1>
  </div>
</template>

<script>
import LayoutA from "../layouts/LayoutA.vue";
export default {
  name: "Contact",
  created() {
    this.$emit("update:layout", LayoutA);
  }
};
</script>