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
                    <a class="ft__social" href="#" aria-label="Instagram">
                        <!-- Instagram svg -->
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path
                                d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5C8.7 2 8.332 2.014 7.053 2.072 5.772 2.131 4.85 2.338 4.06 2.67a5.33 5.33 0 0 0-1.93 1.26A5.33 5.33 0 0 0 .87 5.86c-.331.79-.538 1.712-.596 2.993C.215 10.132.2 10.5.2 13.8s.014 3.668.072 4.947c.059 1.281.265 2.203.596 2.993.332.79.77 1.46 1.26 1.93.47.49 1.14.928 1.93 1.26.79.331 1.712.538 2.993.596 1.279.058 1.647.072 4.947.072s3.668-.014 4.947-.072c1.281-.059 2.203-.265 2.993-.596a5.33 5.33 0 0 0 1.93-1.26 5.33 5.33 0 0 0 1.26-1.93c.331-.79.538-1.712.596-2.993.058-1.279.072-1.647.072-4.947s-.014-3.668-.072-4.947c-.059-1.281-.265-2.203-.596-2.993a5.33 5.33 0 0 0-1.26-1.93 5.33 5.33 0 0 0-1.93-1.26c-.79-.331-1.712-.538-2.993-.596C15.668 2.014 15.3 2 12 2Z"
                                fill="#0B2B3D" />
                            <circle cx="18" cy="6" r="1.3" fill="#0B2B3D" />
                        </svg>
                    </a>
                    <a class="ft__social" href="#" aria-label="LinkedIn">
                        <!-- LinkedIn svg -->
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5Z" fill="#0B2B3D" />
                            <path
                                d="M3.5 9.5h2.96V21H3.5zM9 9.5h2.84v1.57h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.63V21h-2.96v-4.97c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.29-1.91 2.63V21H9V9.5Z"
                                fill="#0B2B3D" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Col 2: Explore -->
            <nav class="ft__block">
                <h3 class="ft__heading">Explore</h3>
                <ul class="ft__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
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
                    <a href="tel:1234567868">123-456-7868</a>
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
                    <p>Office: B5/70, 1st Floor, Rama Road Industrial Area<br />New Delhi, India 110015</p>
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