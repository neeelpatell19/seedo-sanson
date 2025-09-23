<template>
    <header class="navigation-bar" :class="{ 'scrolled': isScrolled }" role="banner">
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
                            <li><router-link to="/products/rc-cars">RC Cars</router-link></li>
                            <li><router-link to="/products/bath-toys">Bath Toys</router-link></li>
                            <li><router-link to="/products/educational">Educational</router-link></li>
                            <li><router-link to="/products/plush-figures">Plush & Figures</router-link></li>
                        </ul>
                    </li>

                    <li class="nav-item has-children">
                        <a href="/about" class="nav-link">
                            About Us
                            <!-- <svg class="caret" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6 9l6 6 6-6" />
                            </svg> -->
                        </a>
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
                @click="toggleDrawer">
                <span></span><span></span><span></span>
            </button>
        </div>

        <!-- Mobile Drawer -->
        <div class="drawer" :class="{ 'is-open': drawerOpen }" @click.self="closeDrawer"
            :aria-hidden="drawerOpen ? 'false' : 'true'">
            <aside id="mobile-drawer" class="drawer__panel" role="dialog" aria-label="Mobile navigation">
                <div class="drawer__header">
                    <router-link class="drawer__logo" to="/">
                        <img src="/Images/SeedoLogoImage.svg" alt="Logo" />
                    </router-link>
                    <button class="drawer__close" @click="closeDrawer" aria-label="Close menu">✕</button>
                </div>

                <nav class="drawer__nav">
                    <ul class="drawer__list">
                        <li class="drawer__item">
                            <router-link to="/" class="drawer__link">Home</router-link>
                        </li>

                        <!-- Accordion group -->
                        <li class="drawer__item">
                            <button class="drawer__accordion" :aria-expanded="isOpen('products')"
                                @click="toggleAccordion('products')">
                                Products
                                <svg class="acc-caret" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <ul class="drawer__submenu" v-show="isOpen('products')">
                                <li><router-link to="/products/rc-cars">RC Cars</router-link></li>
                                <li><router-link to="/products/bath-toys">Bath Toys</router-link></li>
                                <li><router-link to="/products/educational">Educational</router-link></li>
                                <li><router-link to="/products/plush-figures">Plush & Figures</router-link></li>
                            </ul>
                        </li>

                        <li class="drawer__item">
                            <button class="drawer__accordion" :aria-expanded="isOpen('about')"
                                @click="toggleAccordion('about')">
                                About Us
                                <svg class="acc-caret" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <ul class="drawer__submenu" v-show="isOpen('about')">
                                <li><router-link to="/about/company">Company</router-link></li>
                                <li><router-link to="/about/manufacturing">Manufacturing</router-link></li>
                                <li><router-link to="/about/careers">Careers</router-link></li>
                                <li><router-link to="/contact">Contact</router-link></li>
                            </ul>
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

const state = reactive({
    drawerOpen: false,
    openKey: null, // 'products' | 'about' | null
    isScrolled: false
});

const drawerOpen = computed(() => state.drawerOpen);
const isScrolled = computed(() => state.isScrolled);

const toggleDrawer = () => (state.drawerOpen = !state.drawerOpen);
const closeDrawer = () => (state.drawerOpen = false);

const toggleAccordion = (key) => {
    state.openKey = state.openKey === key ? null : key;
};
const isOpen = (key) => state.openKey === key;

// Scroll handler
const handleScroll = () => {
    state.isScrolled = window.scrollY > 50;
};

// Add scroll listener
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Remove scroll listener
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>