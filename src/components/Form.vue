<template>
  <form action="" class="form">
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="submit">
  </form>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ccc;
  background: #f1e4e6;

  input {
    padding: 10px;
    width: 100%;
    margin: 10px auto;
    border-radius: 10px;
    border: 2px solid #ccc;

  }
}
</style>