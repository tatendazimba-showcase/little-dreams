<template>
  <section>
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <div class="navbar-brand" style="height: 64px;">
          <logo />
        </div>

        <div class="float-right">
          <div class="" style="height: 64px; width: 64px;">
            <avatar :user="user()"></avatar>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
<script src="./navbar.js"></script>
<style src="./navbar.scss" scoped lang="scss"></style>
