<template>
    <div class="experience-container">
        <div class="Container">
            <div class="experience-header">
                <p class="experience-subtitle">Our Expertise</p>
                <h2>End-to-End Manufacturing</h2>
            </div>
            
            <div class="experience-content">
                <!-- Left: 25 Years -->
                <div class="experience-years">
                    <div class="years-number">25</div>
                    <div class="years-label">YEARS OF EXPERIENCE</div>
                </div>
                
                <!-- Center: Image -->
                <div class="experience-image">
                    <img src="/Images/image 147.png" alt="Manufacturing facility" />
                </div>
                
                <!-- Right: Text Content -->
                <div class="experience-text">
                    <p>Over the years, we've made ourselves completely self-reliant — every step, from concept to creation, happens under one roof. Our in-house capabilities ensure complete control over design, production, and finishing, eliminating the need for outsourcing.</p>
                    <button class="explore-button">
                        Explore More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Experience component logic
</script>

<style scoped>
.experience-container {
    background-color: white;
    padding: 0 0 80px 0;
}

.Container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
}

.experience-header {
    width: 518px;
    height: 90.99523162841797px;
    position: relative;
    top: 40px;
    left: 300px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin-bottom: 0;
    align-items: flex-start;
    z-index: 1;
}

.experience-subtitle {
    margin: 0 0 10px;
    color: #d33a35;
    letter-spacing: 0.2px;

}

.experience-header h2 {
    margin: 0;
    color: #05324a;
    line-height: 1.15;
}

.experience-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    max-width: 1200px;
    margin: 40px auto 0 auto;
    position: relative;
    z-index: 1;
}

/* Left: 25 Years Box */
.experience-years {
    width: 224px;
    height: 205px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-shrink: 0;
}

.years-number {
    font-family: 'Degular', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 150px;
    line-height: 87%;
    letter-spacing: 0px;
    text-align: right;
    color: #003049;
}

.years-label {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    text-align: center;
    letter-spacing: 1px;
}

/* Center: Image */
.experience-image {
    width: 386px;
    height: 272px;
    flex-shrink: 0;
}

.experience-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Right: Text Content */
.experience-text {
    width: 458px;
    height: 135px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-shrink: 0;
}

.experience-text p {
    font-family: 'Degular', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
    line-height: 133%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #495358;
    margin: 0;
}

.explore-button {
    width: 160px;
    height: 48px;
    background-color: #BC272B;
    color: white;
    border: none;
    border-radius: 24px;
    font-family: 'Degular', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 108%;
    letter-spacing: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 12px 8px;
}

.explore-button:hover {
    background-color: #a02227;
    transform: translateY(-2px);
}

.explore-button svg {
    transition: transform 0.3s ease;
}

.explore-button:hover svg {
    transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 1200px) {
    .experience-content {
        flex-wrap: wrap;
        justify-content: center;
    }

    .experience-years {
        width: 200px;
        height: 180px;
    }

    .years-number {
        font-size: 120px;
    }

    .experience-image {
        width: 450px;
        height: auto;
    }

    .experience-text {
        width: 100%;
        height: auto;
        max-width: 600px;
    }
}

@media (max-width: 768px) {
    .experience-container {
        padding: 60px 0;
    }

    .experience-header h2 {
        font-size: 36px;
    }

    .experience-content {
        flex-direction: column;
        gap: 30px;
    }

    .experience-years {
        width: 180px;
        height: 160px;
    }

    .years-number {
        font-size: 100px;
    }

    .years-label {
        font-size: 12px;
    }

    .experience-image {
        width: 100%;
        max-width: 500px;
        height: auto;
    }

    .experience-text {
        width: 100%;
        text-align: center;
    }

    .explore-button {
        margin: 0 auto;
    }
}

@media (max-width: 480px) {
    .experience-container {
        padding: 40px 0;
    }

    .experience-header h2 {
        font-size: 28px;
    }

    .experience-years {
        width: 160px;
        height: 140px;
    }

    .years-number {
        font-size: 80px;
    }

    .experience-text p {
        font-size: 14px;
    }

    .explore-button {
        width: 140px;
        height: 44px;
        font-size: 14px;
    }
}
</style>