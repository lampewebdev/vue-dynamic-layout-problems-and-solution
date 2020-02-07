<template>
  <div>
    <H1>LAYOUT B</H1>
    <router-link to="/">Home Layout A</router-link><br />
    <router-link to="/about">About Layout B</router-link><br />
    <router-link to="/contact">Contact Layout A</router-link><br />
    <slot />
  </div>
</template>

<script>
export default {
  name: "LayoutB"
};
</script>