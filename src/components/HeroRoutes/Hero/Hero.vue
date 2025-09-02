<script>
import "./Hero.css"
</script>

<template>
    <div class="hero-video-container Container MainPaddingContainerTop80 paddingTop100px">
        <div class="hero-video-wrapper">
            <video class="hero-video" src=""
                poster="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/9f24e2172c3f9742af12bfe9359c1c6ad2588e44.jpg"
                preload="metadata"></video>
            <div class="hero-video-overlay">
                <button class="hero-play-button">
                    <svg class="hero-play-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>