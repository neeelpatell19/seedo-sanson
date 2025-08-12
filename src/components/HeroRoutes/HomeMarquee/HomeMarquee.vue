<script>
import "./HomeMarquee.css"

export default {
    computed: {
        marqueeItems() {
            // Create an array of 100 items for continuous marquee
            return Array.from({ length: 100 }, (_, index) => ({
                id: index,
                text: "Made in India",
                starImage: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/StarmarqueeImage.png"
            }))
        }
    }
}
</script>

<template>
    <div class="MainPaddingContainerTop80">
        <div class="home-marquee-container ">
            <div class="marquee-wrapper">
                <div class="marquee-content">
                    <div v-for="item in marqueeItems" :key="item.id" class="marquee-item">
                        <img :src="item.starImage" alt="Star" class="star-image">
                        <span class="marquee-text">{{ item.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>