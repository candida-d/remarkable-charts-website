module.exports = {
  title: "Remarkable Charts",
  tagline: "Create beautiful charts in seconds with Excel",
  url: "https://www.remarkablecharts.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  customFields: {
    description:
      "Create beautiful charts in seconds with Excel. Remarkable Charts helps you to spend less time formatting. Create charts for websites, blogs, reports, marketing pages, and more.",
  },
  organizationName: "MulberryHouseSoftware", // Usually your GitHub org/user name.
  projectName: "remarkable-charts", // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: "UA-99053284-2",
    },
    navbar: {
      title: "Remarkable Charts",
      hideOnScroll: false, // enable when it is fixed
      logo: {
        alt: "Remarkable Charts Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "showcase", label: "Showcase", position: "left" },
        { to: "pricing", label: "Pricing", position: "left" },
        { to: "docs", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        { to: "docs/installing", label: "Get started", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Showcase",
              to: "showcase",
            },
            {
              label: "Pricing",
              to: "pricing",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Support",
              to: "support",
            },
            {
              label: "Docs",
              to: "docs",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/remarkablecharts/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/remarkablechart",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCpHhoqowKF4CZd1jmuAaovw",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              to: "about",
            },
            {
              label: "Privacy",
              to: "privacy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mulberry House Software Ltd`,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  presets: [
    [
      require.resolve("@docusaurus/preset-classic"),
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          editUrl:
            "https://github.com/MulberryHouseSoftware/remarkable-charts-website/edit/master/",
          homePageId: "introduction",
          include: ["**/*.md", "**/*.mdx"],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
