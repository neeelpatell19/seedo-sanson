<script>
import "./FeaturedCategories.css"
</script>

<template>
    <div class="featured-categories-container Container MainPaddingContainerTop80">
        <div class="featured-categories-header">
            <h2 class="featured-categories-title">Featured Categories</h2>
            <a href="#" class="featured-categories-view-all">View All</a>
        </div>

        <div class="featured-categories-grid">
            <!-- Remote Controlled Cars -->
            <div class="featured-category-card featured-category-card-blue">
                <div class="featured-category-content">
                    <h3 class="featured-category-title">Remote <br> Controlled Cars</h3>
                    <button class="featured-category-button">
                        <span>View</span>
                        <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                    </button>

                </div>
                <div class="featured-category-image">
                    <img src="./Images/3d toy Car.png" alt="Remote Controlled Cars">
                </div>
            </div>

            <!-- Easy Learning Toys -->
            <div class="featured-category-card featured-category-card-grey">
                <div class="featured-category-content">
                    <h3 class="featured-category-title">Easy Learning <br> Toys</h3>
                    <button class="featured-category-button">
                        <span>View</span>
                        <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                    </button>
                </div>
                <div class="featured-category-image">
                    <img src="./Images/Teddy3dImage.png" alt="Learning Toy" />
                </div>
            </div>

            <!-- Metal Die Cast Cars -->
            <div class="featured-category-card featured-category-card-gradient">
                <div class="featured-category-content">
                    <h3 class="featured-category-title">Metal Die <br> Cast Cars</h3>
                    <button class="featured-category-button">
                        <span>View</span>
                        <svg class="featured-category-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                    </button>
                </div>
                <div class="featured-category-image">
                    <img src="./Images/3dToysImage.png" alt="Metal Die Cast Cars">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>