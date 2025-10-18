<script>
import "./OurJourneyVideo.css"

export default {
    name: 'OurJourneyVideo',
    mounted() {
        this.setupVideoForIOS();
    },
    methods: {
        setupVideoForIOS() {
            const video = this.$el.querySelector('.journey-video');
            if (video) {
                // iOS-specific configuration
                video.setAttribute('playsinline', 'true');
                video.setAttribute('webkit-playsinline', 'true');
                video.setAttribute('x5-playsinline', 'true');
                video.playsInline = true;
                
                // Prevent iOS fullscreen behavior
                video.addEventListener('webkitbeginfullscreen', (e) => {
                    e.preventDefault();
                    console.log('Prevented iOS fullscreen on journey video');
                });

                video.addEventListener('webkitendfullscreen', (e) => {
                    e.preventDefault();
                    console.log('Prevented iOS fullscreen end on journey video');
                });
            }
        }
    }
}
</script>

<template>
    <div class="our-journey-video-container MainPaddingContainerTop80 MainPaddingContainerBottom80">
        <div class="Container">
            <div class="journey-content-wrapper">
                <!-- Header Section -->
                <div class="header-section">
                    <div class="journey-text-left">
                        <h1 class="company-title">Discover our journey and <br> what drives us</h1>

                    </div>
                    <div class="journey-text-right">
                        <router-link to="/about" class="view-button">
                            <span>About us</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </router-link>
                        <p class="journey-description">All Seedo toys are proudly manufactured by Sanson, ensuring
                            top-tier quality and safety.</p>
                    </div>
                </div>

                <!-- Video Section -->
                <div class="journey-video-section">
                    <div class="video-container">
                        <video class="journey-video" controls autoplay loop muted
                            playsinline webkit-playsinline x5-playsinline
                            poster="https://via.placeholder.com/800x450/333/fff?text=The+making+of+Seedo+Toys">
                            <source src="https://prepseed.s3.ap-south-1.amazonaws.com/Untitled_design_Seedo.mp4"
                                type="video/mp4">
                            <source src="https://prepseed.s3.ap-south-1.amazonaws.com/Untitled_design_Seedo.mp4"
                                type="video/ogg">
                            Your browser does not support the video tag.
                        </video>
                        <!-- <div class="video-overlay">
                            <h3 class="video-title">The making of Seedo Toys</h3>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>