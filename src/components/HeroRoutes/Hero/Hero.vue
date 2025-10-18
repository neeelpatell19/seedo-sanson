<script>
import "./Hero.css"

export default {
    name: 'Hero',
    data() {
        return {
            isPlaying: false,
            videoElement: null,
            isMuted: false,
            observer: null,
            isPageVisible: true,
            autoplayAttempted: false,
            checkViewport: null
        }
    },
    mounted() {
        this.videoElement = this.$refs.heroVideo;

        // Configure video for mobile autoplay and iOS
        if (this.videoElement) {
            // Start muted for autoplay compatibility on mobile
            this.videoElement.muted = true;
            this.isMuted = true;
            
            // iOS-specific configuration
            this.videoElement.setAttribute('playsinline', 'true');
            this.videoElement.setAttribute('webkit-playsinline', 'true');
            this.videoElement.setAttribute('x5-playsinline', 'true');
            this.videoElement.playsInline = true;
            
            // Disable native controls to prevent fullscreen
            this.videoElement.controls = false;
        }

        this.setupVideoEventListeners();
        this.setupIntersectionObserver();
        this.setupPageVisibilityListener();

        // Try to autoplay immediately when component mounts
        this.$nextTick(() => {
            this.forceAutoplayOnMount();
        });
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
        // Remove page visibility listener
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        // Remove fallback event listeners
        window.removeEventListener('scroll', this.checkViewport);
        window.removeEventListener('resize', this.checkViewport);
    },
    methods: {
        setupVideoEventListeners() {
            if (this.videoElement) {
                // Prevent iOS fullscreen behavior
                this.videoElement.addEventListener('webkitbeginfullscreen', (e) => {
                    e.preventDefault();
                    console.log('Prevented iOS fullscreen');
                });

                this.videoElement.addEventListener('webkitendfullscreen', (e) => {
                    e.preventDefault();
                    console.log('Prevented iOS fullscreen end');
                });

                // Prevent default click behavior on iOS
                this.videoElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleVideo();
                });

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
                    // Ensure video starts muted for mobile autoplay compatibility
                    this.videoElement.muted = true;
                    this.isMuted = true;
                    // Try autoplay when video is ready
                    if (!this.autoplayAttempted && this.isPageVisible) {
                        this.autoplayVideo();
                    }
                });
            }
        },

        setupIntersectionObserver() {
            if ('IntersectionObserver' in window) {
                this.observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && this.isPageVisible) {
                            // Video is visible and page is active, autoplay
                            console.log('Video is in viewport, attempting autoplay');
                            this.autoplayVideo();
                        } else {
                            // Video is not visible, pause
                            console.log('Video is out of viewport, pausing');
                            this.pauseVideo();
                        }
                    });
                }, {
                    threshold: 0.1, // Trigger when 10% of video is visible (more sensitive)
                    rootMargin: '0px 0px -10% 0px' // Add some margin for better detection
                });

                if (this.videoElement) {
                    this.observer.observe(this.videoElement);
                }
            } else {
                // Fallback for browsers without IntersectionObserver
                console.log('IntersectionObserver not supported, using fallback');
                this.setupFallbackViewportDetection();
            }
        },

        setupPageVisibilityListener() {
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
        },

        setupFallbackViewportDetection() {
            // Fallback for browsers without IntersectionObserver
            this.checkViewport = () => {
                if (this.isVideoInView() && this.isPageVisible) {
                    this.autoplayVideo();
                } else {
                    this.pauseVideo();
                }
            };

            // Check on scroll and resize
            window.addEventListener('scroll', this.checkViewport);
            window.addEventListener('resize', this.checkViewport);

            // Initial check
            this.checkViewport();
        },

        handleVisibilityChange() {
            this.isPageVisible = !document.hidden;

            if (this.isPageVisible) {
                // Page became visible, try to autoplay if video is in view
                if (this.videoElement && this.isVideoInView()) {
                    this.autoplayVideo();
                }
            } else {
                // Page became hidden, pause video
                this.pauseVideo();
            }
        },

        isVideoInView() {
            if (!this.videoElement) return false;
            const rect = this.videoElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            // Check if video is visible in viewport with some margin
            const isVisible = rect.top < windowHeight * 0.9 &&
                rect.bottom > windowHeight * 0.1 &&
                rect.left < windowWidth &&
                rect.right > 0;

            return isVisible;
        },

        autoplayVideo() {
            if (this.videoElement && !this.isPlaying && this.isPageVisible) {
                // Mark that we've attempted autoplay
                this.autoplayAttempted = true;

                // Ensure video is ready to play
                if (this.videoElement.readyState >= 2) {
                    this.attemptAutoplay();
                } else {
                    // Wait for video to be ready
                    this.videoElement.addEventListener('canplay', () => {
                        this.attemptAutoplay();
                    }, { once: true });
                }
            }
        },

        attemptAutoplay() {
            if (!this.videoElement || this.isPlaying) return;

            // Start with muted autoplay for mobile compatibility
            this.videoElement.muted = true;
            this.isMuted = true;

            this.videoElement.play().then(() => {
                console.log('Video autoplay successful (muted)');
            }).catch(error => {
                console.log('Muted autoplay failed:', error.message);
                // If muted autoplay fails, try unmuted as fallback
                this.videoElement.muted = false;
                this.isMuted = false;
                this.videoElement.play().then(() => {
                    console.log('Video autoplay successful (unmuted)');
                }).catch(err => {
                    console.log('All autoplay attempts failed:', err.message);
                    // If both fail, we'll rely on user interaction
                });
            });
        },

        // Force autoplay on mount - more aggressive approach
        forceAutoplayOnMount() {
            if (this.videoElement && !this.autoplayAttempted) {
                // Wait a bit for the video to be ready
                setTimeout(() => {
                    this.autoplayVideo();
                }, 100);

                // Also try after video metadata is loaded
                this.videoElement.addEventListener('loadedmetadata', () => {
                    if (!this.autoplayAttempted) {
                        this.autoplayVideo();
                    }
                }, { once: true });
            }
        },

        pauseVideo() {
            if (this.videoElement && this.isPlaying) {
                this.videoElement.pause();
                console.log('Video paused (out of viewport)');
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
            <video ref="heroVideo" class="hero-video" src="/Images/s1red.mp4" preload="metadata" loop
                playsinline webkit-playsinline autoplay x5-playsinline controls="false" muted poster=""
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
                        <path
                            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                    <svg v-else class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                </button>

                <button class="hero-control-btn" @click="toggleVideo" :title="isPlaying ? 'Pause' : 'Play'">
                    <svg v-if="isPlaying" class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                    <svg v-else class="hero-control-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>