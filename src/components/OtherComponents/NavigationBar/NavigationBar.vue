<template>
    <header class="navigation-bar" :class="{ 'scrolled': isScrolled, 'drawer-open': drawerOpen }" role="banner">
        <div class="nav-inner">
            <!-- Logo -->
            <router-link class="navigation-bar-logo" to="/" aria-label="Seedo logo">
                <img src="/Images/SeedoLogoImage.svg" alt="Logo" />
            </router-link>

            <!-- Desktop Menu -->
            <nav class="nav-menu" aria-label="Primary">
                <ul class="menu">
                    <!-- <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li> -->

                    <li class="nav-item has-children">
                        <a href="#" class="nav-link">
                            Products
                            <svg class="caret" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </a>
                        <ul class="dropdown">
                            <ProductContext v-slot="{ categories, loading, error }">
                                <li v-if="loading"><span>Loading...</span></li>
                                <li v-else-if="error"><span>Error</span></li>
                                <template v-else>
                                    <li v-for="cat in uniqueCategories(categories)" :key="cat._id">
                                        <router-link :to="`/allproducts/${slug(cat.name)}`">{{ cat.name }}</router-link>
                                    </li>
                                </template>
                            </ProductContext>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/manufacturing" class="nav-link">
                            Manufacturing Process
                        </router-link>
                    </li>

                    <li class="nav-item has-children">
                        <router-link to="/about" class="nav-link">
                            About Us
                            <!-- <svg class="caret" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6 9l6 6 6-6" />
                            </svg> -->
                        </router-link>
                        <!-- <ul class="dropdown">
                            <li><router-link to="/about/company">Company</router-link></li>
                            <li><router-link to="/about/manufacturing">Manufacturing</router-link></li>
                            <li><router-link to="/about/careers">Careers</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                        </ul> -->
                    </li>
                </ul>
            </nav>

            <!-- Mobile hamburger -->
            <button class="hamburger" :aria-expanded="drawerOpen ? 'true' : 'false'" aria-controls="mobile-drawer"
                @click="toggleDrawer" @keydown.enter="toggleDrawer" @keydown.space.prevent="toggleDrawer">
                <span></span><span></span><span></span>
            </button>
        </div>

        <!-- Mobile Drawer -->
        <div class="drawer" :class="{ 'is-open': drawerOpen }" @click="handleDrawerClick"
            :aria-hidden="drawerOpen ? 'false' : 'true'">
            <aside id="mobile-drawer" class="drawer__panel" role="dialog" aria-label="Mobile navigation">
                <div class="drawer__header">
                    <router-link class="drawer__logo" to="/" @click="closeDrawer">
                        <img src="/Images/SeedoLogoImage.svg" alt="Logo" />
                    </router-link>
                    <button class="drawer__close" @click="closeDrawer" aria-label="Close menu">✕</button>
                </div>

                <nav class="drawer__nav">
                    <ul class="drawer__list">
                        <li class="drawer__item">
                            <router-link to="/" class="drawer__link" @click="closeDrawer">Home</router-link>
                        </li>

                        <!-- Accordion group -->
                        <li class="drawer__item">
                            <button class="drawer__accordion" :aria-expanded="isOpen('products')"
                                @click="toggleAccordion('products')" @keydown.enter="toggleAccordion('products')"
                                @keydown.space.prevent="toggleAccordion('products')">
                                Products
                                <svg class="acc-caret" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <ul class="drawer__submenu" v-show="isOpen('products')">
                                <ProductContext v-slot="{ categories, loading, error }">
                                    <li v-if="loading"><span>Loading...</span></li>
                                    <li v-else-if="error"><span>Error</span></li>
                                    <template v-else>
                                        <li v-for="cat in uniqueCategories(categories)" :key="cat._id">
                                            <router-link :to="`/allproducts/${slug(cat.name)}`" @click="closeDrawer">{{
                                                cat.name
                                            }}</router-link>
                                        </li>
                                    </template>
                                </ProductContext>
                            </ul>
                        </li>

                        <li class="drawer__item">
                            <router-link to="/manufacturing" class="drawer__link"
                                @click="closeDrawer">Manufacturing</router-link>
                        </li>

                        <li class="drawer__item">
                            <router-link to="/about" class="drawer__link" @click="closeDrawer">about us</router-link>
                        </li>

                    </ul>
                </nav>
            </aside>
        </div>
    </header>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from "vue";
import "./NavigationBar.css";
import ProductContext from '../../HeroRoutes/PopularProductsHome/ProductContext/ProductContext.vue'

const state = reactive({
    drawerOpen: false,
    openKey: null, // 'products' | 'about' | null
    isScrolled: false
});

const drawerOpen = computed(() => state.drawerOpen);
const isScrolled = computed(() => state.isScrolled);

const toggleDrawer = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Toggle drawer clicked, current state:', state.drawerOpen);
    state.drawerOpen = !state.drawerOpen;
    // Close any open accordion when opening drawer
    if (state.drawerOpen) {
        state.openKey = null;
    }
};

const closeDrawer = () => {
    console.log('Close drawer called');
    state.drawerOpen = false;
    state.openKey = null; // Also close any open accordion
};

const handleDrawerClick = (event) => {
    // Only close if clicking on the overlay (not the panel)
    if (event.target === event.currentTarget) {
        closeDrawer();
    }
};

const toggleAccordion = (key) => {
    console.log('Toggle accordion:', key, 'current open:', state.openKey);
    state.openKey = state.openKey === key ? null : key;
};

const isOpen = (key) => state.openKey === key;

// Simple slug generator for category names -> URL paths
const slug = (value) =>
    String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

// Unique categories by name
const uniqueCategories = (cats) => {
    const seen = new Set();
    return (cats || []).filter(cat => {
        const key = String(cat?.name || '').trim().toLowerCase();
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
    });
};

// Scroll handler
const handleScroll = () => {
    state.isScrolled = window.scrollY > 50;
};

// Prevent body scroll when drawer is open
const handleBodyScroll = () => {
    if (state.drawerOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

// Watch for drawer state changes to handle body scroll
import { watch } from 'vue';
watch(drawerOpen, (newValue) => {
    handleBodyScroll();
});

// Add scroll listener
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Remove scroll listener and restore body scroll
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.body.style.overflow = '';
});
</script>

<style scoped></style>