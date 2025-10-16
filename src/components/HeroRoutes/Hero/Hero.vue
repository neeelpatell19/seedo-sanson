<script>
import "./Hero.css"

export default {
    name: 'Hero',
    data() {
        return {
            isPlaying: false,
            videoElement: null,
            isMuted: false,
            observer: null
        }
    },
    mounted() {
        this.videoElement = this.$refs.heroVideo;
        
        // Ensure video starts unmuted
        if (this.videoElement) {
            this.videoElement.muted = false;
            this.isMuted = false;
        }
        
        this.setupVideoEventListeners();
        this.setupIntersectionObserver();
        
        // Try to autoplay immediately when component mounts
        this.$nextTick(() => {
            this.autoplayVideo();
        });
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        setupVideoEventListeners() {
            if (this.videoElement) {
                this.videoElement.addEventListener('play', () => {
                    this.isPlaying = true;
                });
                
                this.videoElement.addEventListener('pause', () => {
                    this.isPlaying = false;
                });
                
                this.videoElement.addEventListener('ended', () => {
                    this.isPlaying = false;
                });
                
                this.videoElement.addEventListener('error', (e) => {
                    console.error('Video error:', e);
                    console.error('Video src:', this.videoElement.src);
                });
                
                this.videoElement.addEventListener('loadstart', () => {
                    console.log('Video loading started');
                });
                
                this.videoElement.addEventListener('canplay', () => {
                    console.log('Video can play');
                    // Ensure video remains unmuted when it can play
                    this.videoElement.muted = false;
                    this.isMuted = false;
                });
            }
        },
        
        setupIntersectionObserver() {
            if ('IntersectionObserver' in window) {
                this.observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Video is visible, autoplay (unmuted)
                            this.autoplayVideo();
                        } else {
                            // Video is not visible, pause
                            this.pauseVideo();
                        }
                    });
                }, {
                    threshold: 0.3 // Trigger when 30% of video is visible (more sensitive)
                });
                
                if (this.videoElement) {
                    this.observer.observe(this.videoElement);
                }
            }
        },
        
        autoplayVideo() {
            if (this.videoElement && !this.isPlaying) {
                // Ensure video is unmuted for autoplay
                this.videoElement.muted = false;
                this.isMuted = false;
                
                this.videoElement.play().catch(error => {
                    console.error('Error autoplaying video:', error);
                    // If unmuted autoplay fails, try muted autoplay
                    this.videoElement.muted = true;
                    this.isMuted = true;
                    this.videoElement.play().catch(err => {
                        console.error('Error autoplaying video (muted fallback):', err);
                    });
                });
            }
        },
        
        pauseVideo() {
            if (this.videoElement && this.isPlaying) {
                this.videoElement.pause();
            }
        },
        
        toggleVideo() {
            if (this.videoElement) {
                if (this.isPlaying) {
                    this.pauseVideo();
                } else {
                    this.videoElement.play().catch(error => {
                        console.error('Error playing video:', error);
                    });
                }
            }
        },
        
        toggleMute() {
            if (this.videoElement) {
                this.isMuted = !this.isMuted;
                this.videoElement.muted = this.isMuted;
            }
        }
    }
}
</script>

<template>
    <div class="hero-video-container Container MainPaddingContainerTop80 paddingTop100px">
        <br>
        <br>
        <div class="hero-video-wrapper">
            <video 
                ref="heroVideo"
                class="hero-video" 
                src="/Images/s1red.mp4"
                preload="metadata"
                loop
                @click="toggleVideo">
            </video>
            <div class="hero-video-overlay" v-show="!isPlaying">
                <button class="hero-play-button" @click="toggleVideo">
                    <svg class="hero-play-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
            
            <!-- Custom Controls -->
            <div class="hero-custom-controls">
                <button class="hero-control-btn" @click="toggleMute" :title="isMuted ? 'Unmute' : 'Mute'">
                    <svg v-if="isMuted" class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                    <svg v-else class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>
                
                <button class="hero-control-btn" @click="toggleVideo" :title="isPlaying ? 'Pause' : 'Play'">
                    <svg v-if="isPlaying" class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                    <svg v-else class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>