// Put this next to your component files (e.g., src/components/navLinks.js)
export const PRIMARY_LINKS = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "/products",
      key: "products",
      children: [
        { label: "RC Cars", href: "/products/rc-cars" },
        { label: "Bath Toys", href: "/products/bath-toys" },
        { label: "Educational", href: "/products/educational" },
        { label: "Plush & Figures", href: "/products/plush-figures" }
      ]
    },
    {
      label: "About Us",
      href: "/about",
      // key: "about",
      // children: [
      //   { label: "Company", href: "/about/company" },
      //   { label: "Manufacturing", href: "/about/manufacturing" },
      //   { label: "Careers", href: "/about/careers" },
      //   { label: "Contact", href: "/contact" }
      // ]
    }
  ];
  