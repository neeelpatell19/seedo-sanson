<script setup>
import "./WhyChooseUsHome.css"

const WhyChooseUsPoints = [
    {
        id: 1,
        description: "We are committed to excellence and safety, ensuring every product reflects our high standards.",
    },
    {
        id: 2,
        description: "Each toy undergoes rigorous quality checks to guarantee 100% safety for children and flawless craftsmanship.",
    },
    {
        id: 3,
        description: "Our vision is to become India's leading brand by setting new benchmarks in quality and creativity.",
    },
]
</script>

<template>
    <div class="why-choose-us-home MainMarginContainerTop80">
        <div class="Container">
            <div class="header-section">
                <h1 class="company-title text-center white">Why Choose Us</h1>
                <!-- <button class="view-button">
                <span>View</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
            </button> -->
            </div>
            <div class="WhyChooseUsPointsContainer max-width-800">
                <div>
                    <div class="WhyChooseUsPoint" v-for="point in WhyChooseUsPoints" :key="point.id">
                    <p class="WhyChooseUsPointDescription white">{{ point.description }}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>