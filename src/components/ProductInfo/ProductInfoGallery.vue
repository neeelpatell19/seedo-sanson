<template>
  <div class="pig-wrap">
    <h1 class="pig-title">{{ title }}</h1>
    <div class="pig-media">
      <video
        v-for="(src, idx) in videos"
        :key="'v-' + idx"
        :src="src"
        controls
        playsinline
        class="pig-video"
      />
      <img
        v-for="(src, idx) in images"
        :key="'i-' + idx"
        :src="src"
        :alt="`${title} - image ${idx + 1}`"
        class="pig-img"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  images: { type: Array, default: () => [] },
  videos: { type: Array, default: () => [] }
})
</script>

<style scoped>
.pig-wrap {
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px 60px;
  box-sizing: border-box;
}

.pig-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 28px;
  color: #1a1a1a;
  text-align: center;
}

.pig-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 720px;
}

.pig-video {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.pig-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  object-fit: contain;
}
</style>
