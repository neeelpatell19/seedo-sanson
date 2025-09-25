<template>
    <div class="achievements-container">
        <div class="Container">
            <div class="achievements-grid">
                <div class="achievement-card">
                    <div class="achievement-number">30,000+</div>
                    <div class="achievement-label">Area (sq ft)</div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-number">150+</div>
                    <div class="achievement-label">Employees</div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-number">50,000+</div>
                    <div class="achievement-label">Capacity (units/month)</div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-number">25+</div>
                    <div class="achievement-label">Moulding Machines</div>
                </div>

                <div class="achievement-card">
                    <div class="achievement-number">100%</div>
                    <div class="achievement-label">USP - Centralised Systems</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Achievements Component */
.achievements-container {
    background-color: white;
    padding: 80px 0;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.achievement-card {
    background: white;
    border: 2px solid #d33a35;
    /* Red border */
    border-radius: 16px;
    padding: 40px 20px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.achievement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #b8312e;
}

.achievement-number {
    font-size: 2.5rem;
    font-weight: 500;
    color: #d33a35;
    /* Red color for numbers */
    margin-bottom: 10px;
    line-height: 1.2;
}

.achievement-label {
    font-size: 1rem;
    color: #000000;
    /* Black color for labels */
    font-weight: 500;
    line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .achievements-grid {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 25px;
    }

    .achievement-card {
        padding: 30px 15px;
    }

    .achievement-number {
        font-size: 2.2rem;
    }
}

@media (max-width: 768px) {
    .achievements-container {
        padding: 60px 0;
    }

    .achievements-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 20px;
    }

    .achievement-card {
        padding: 25px 15px;
    }

    .achievement-number {
        font-size: 2rem;
    }

    .achievement-label {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .achievements-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .achievement-card {
        padding: 20px 15px;
    }

    .achievement-number {
        font-size: 1.8rem;
    }

    .achievement-label {
        font-size: 0.85rem;
    }
}
</style>