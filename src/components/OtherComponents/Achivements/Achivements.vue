<template>
    <div class="achievements-container">
        <div class="Container">
            <div>
                <h2 class="text-center">We are very good at designing any kind of toy / product that matches your
                    requirements</h2>
            </div>
            <br><br>
            <div class="achievements-grid">
                <div class="achievement-card" ref="card1">
                    <div class="achievement-number">{{ animatedCounters[0] }}+</div>
                    <div class="achievement-label">Area (sq ft)</div>
                </div>

                <div class="achievement-card" ref="card2">
                    <div class="achievement-number">{{ animatedCounters[1] }}+</div>
                    <div class="achievement-label">Employees</div>
                </div>

                <div class="achievement-card" ref="card3">
                    <div class="achievement-number">{{ animatedCounters[2] }}+</div>
                    <div class="achievement-label">Capacity (units/month)</div>
                </div>

                <div class="achievement-card" ref="card4">
                    <div class="achievement-number">{{ animatedCounters[3] }}</div>
                    <div class="achievement-label">Moulding Machines</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Target values for each counter
const targetValues = [250000, 400, 250000, 25]
const animatedCounters = ref([0, 0, 0, 0])
const hasAnimated = ref([false, false, false, false])

// Create refs for each card
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)

// Animation function
const animateCounter = (index, target, duration = 2000) => {
    const startTime = performance.now()
    const startValue = 0
    
    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart)
        
        animatedCounters.value[index] = currentValue.toLocaleString()
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter)
        } else {
            animatedCounters.value[index] = target.toLocaleString()
        }
    }
    
    requestAnimationFrame(updateCounter)
}

// Intersection Observer
let observer = null

const setupObserver = () => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('Card is intersecting:', entry.target)
                // Find which card triggered the animation
                let index = -1
                if (entry.target === card1.value) index = 0
                else if (entry.target === card2.value) index = 1
                else if (entry.target === card3.value) index = 2
                else if (entry.target === card4.value) index = 3
                
                console.log('Card index:', index, 'Has animated:', hasAnimated.value[index])
                
                if (index !== -1 && !hasAnimated.value[index]) {
                    hasAnimated.value[index] = true
                    console.log('Starting animation for index:', index, 'Target:', targetValues[index])
                    animateCounter(index, targetValues[index])
                }
            }
        })
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px 0px 0px' // No margin
    })
    
    // Observe all achievement cards
    const cards = [card1.value, card2.value, card3.value, card4.value]
    console.log('Cards to observe:', cards)
    cards.forEach((card, index) => {
        if (card) {
            console.log(`Observing card ${index}:`, card)
            observer.observe(card)
        } else {
            console.log(`Card ${index} is null`)
        }
    })
}

onMounted(() => {
    // Wait for DOM to be ready
    setTimeout(() => {
        setupObserver()
    }, 100)
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>
<style scoped>
/* Achievements Component */
.achievements-container {
    background-color: white;
    padding: 80px 0 0 0;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    width: 100vw;
    margin: 40px 0 0 0;
    background-color: #BC272B;
    padding: 40px 20px 40px 80px;
    margin-left: calc(-50vw + 50%);
}

.achievement-card {
    background: transparent;
    border: none;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px 20px;
    text-align: left;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.achievement-card:last-child {
    border-right: none;
}

.achievement-card:hover {
    transform: translateY(-5px);
}

.achievement-number {
    font-family: 'Degular', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    line-height: 87%;
    letter-spacing: 0px;
    color: #ffffff;
    margin-bottom: 10px;
}

.achievement-label {
    font-size: 1rem;
    color: #ffffff;
    font-weight: 400;
    line-height: 1.4;
    text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .achievements-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
    }

    .achievement-card {
        padding: 30px 15px;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .achievement-card:nth-child(2n) {
        border-right: none;
    }

    .achievement-card:nth-child(n+3) {
        border-bottom: none;
    }

    .achievement-number {
        font-size: 45px;
    }
}

@media (max-width: 768px) {
    .achievements-container {
        padding: 60px 0;
    }

    .achievements-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
        padding: 30px 20px 30px 50px;
    }

    .achievement-card {
        padding: 25px 15px;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .achievement-card:nth-child(2n) {
        border-right: none;
    }

    .achievement-card:nth-child(n+3) {
        border-bottom: none;
    }

    .achievement-number {
        font-size: 40px;
    }

    .achievement-label {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .achievements-grid {
        grid-template-columns: 1fr;
        gap: 0;
        padding: 20px 15px 20px 40px;
    }

    .achievement-card {
        padding: 20px 15px;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .achievement-card:last-child {
        border-bottom: none;
    }

    .achievement-number {
        font-size: 32px;
    }

    .achievement-label {
        font-size: 0.85rem;
    }
}
</style>
