<template>
  <div class="h-100 w-100" style="position:relative;">
    <div class="avatar-background"></div>
    <div
      class="avatar d-flex flex-column justify-content-center align-items-center"
    >
      <span v-show="!user.avatarUrl" class="avatar-text">
        {{ user.username[0] }}
      </span>
      <img v-show="user.avatarUrl" :src="user.avatarUrl" :alt="''" />
    </div>
  </div>
</template>
<script src="./avatar.js"></script>
<style src="./avatar.scss" scoped lang="scss"></style>
