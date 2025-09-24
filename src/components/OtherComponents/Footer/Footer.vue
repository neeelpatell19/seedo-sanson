<template>
    <footer class="ft">
        <div class="ft__grid">
            <!-- Col 1: Brand -->
            <div class="ft__brand">
                <!-- Replace with your real logo if needed -->
                <div class="ft__logo" aria-label="Seedo Toys Logo">
                    <img src="/Images/SeedoLogoImage.svg" alt="">
                </div>

                <p class="ft__tagline">Break the Limit.</p>

                <div class="ft__socials" aria-label="Social links">
                    <a class="ft__social" href="https://www.instagram.com/seedotoys/" target="_blank" rel="noopener"
                        aria-label="Instagram">
                        <i class="ri-instagram-line" aria-hidden="true"></i>
                    </a>
                    <a class="ft__social" href="https://www.linkedin.com/company/sanson-promo-innovations-llp/"
                        target="_blank" rel="noopener" aria-label="LinkedIn">
                        <i class="ri-linkedin-box-line" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <!-- Col 2: Explore -->
            <nav class="ft__block">
                <h3 class="ft__heading">Explore</h3>
                <ul class="ft__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="/allproducts">Products</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>

            <!-- Col 3: Contact Us -->
            <div class="ft__block">
                <h3 class="ft__heading">Contact Us</h3>

                <div class="ft__row">
                    <span class="ft__icon" aria-hidden="true">
                        <!-- Mail -->
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.3-.5 7.7 5 7.7-5H4.3Z" />
                        </svg>
                    </span>
                    <a href="mailto:info@seedotoys.com">info@seedotoys.com</a>
                </div>

                <div class="ft__row">
                    <span class="ft__icon" aria-hidden="true">
                        <!-- Phone -->
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M6.6 2.5 8.9 3a2 2 0 0 1 1.6 1.9l.1 2.2a2 2 0 0 1-.6 1.5l-1.4 1.3a15 15 0 0 0 6.6 6.6l1.3-1.4a2 2 0 0 1 1.5-.6l2.2.1a2 2 0 0 1 1.9 1.6l.5 2.3a2 2 0 0 1-1.5 2.3c-1.5.4-3.2.6-4.8.2a20.8 20.8 0 0 1-9.3-4.9 20.8 20.8 0 0 1-4.9-9.3c-.4-1.6-.2-3.3.2-4.8A2 2 0 0 1 6.6 2.5Z" />
                        </svg>
                    </span>
                    <a href="tel:1234567868">7496 905 804 <br> 7496 905 806
                    </a>
                </div>
            </div>

            <!-- Col 4: Address -->
            <div class="ft__block ft__address">
                <h3 class="ft__heading">Address</h3>

                <div class="ft__row">
                    <span class="ft__icon" aria-hidden="true">
                        <!-- Office icon -->
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M4 3h16v18H4V3Zm3 3v12h10V6H7Zm2 2h2v2H9V8Zm0 4h2v2H9v-2Zm4-4h2v2h-2V8Zm0 4h2v2h-2v-2Z" />
                        </svg>
                    </span>
                    <p>Office: B5/70, 1st Floor, Rama Road Industrial Area New Delhi, India 110015</p>
                </div>

                <div class="ft__row">
                    <span class="ft__icon" aria-hidden="true">
                        <!-- Building icon -->
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M3 21V3h10v6h8v12H3Zm6-12H7v2h2v-2Zm0 4H7v2h2v-2Zm0 4H7v2h2v-2Zm4-8h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z" />
                        </svg>
                    </span>
                    <p>Unit 1: Plot No. 23, Sector-57, Phase-IV, HSIIDC Industrial Area, Kundli, Sonipat, Haryana-131028
                    </p>
                </div>

                <div class="ft__row">
                    <span class="ft__icon" aria-hidden="true">
                        <!-- Building icon -->
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M3 21V3h10v6h8v12H3Zm6-12H7v2h2v-2Zm0 4H7v2h2v-2Zm0 4H7v2h2v-2Zm4-8h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z" />
                        </svg>
                    </span>
                    <p>Unit 2: Plot No 139, Sector-56, Phase-V, HSIIDC Industrial Area, Kundli, Sonipat, Haryana-131028
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import "./FooterGrid.css";
export default {};
</script>

<style scoped></style>