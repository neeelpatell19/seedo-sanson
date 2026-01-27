<template>
  <div class="video-page">

    <video
      :src="videoUrl"
      controls
      autoplay
      class="video-player"
    ></video>
  </div>
</template>

<script setup>
import { ref } from "vue";

const videoUrl = ref(
  "https://static-prepseed.s3.ap-south-1.amazonaws.com/How+To+Play+Video+of+Blaze+Runner.mp4"
);
</script>

<style scoped>
.video-page{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.video-player {
  width: 100%;
  height: 100vh;
  max-width: 800px;
  border-radius: 10px;
  /* pointer-events: none; */
}
</style>
