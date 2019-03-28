const config = {
  siteTitle: "Gatsby Bootstrap Starter", // Site title.
  siteTitleShort: "Generic", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "GatsbyJS Bootstrap Starter", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://agap2-ag.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-bootstrap-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-bootstrap-starter/.
  siteDescription: "Generic content website based on bootstrap.", // Website description used for RSS feeds/meta description tag.
  siteRss: "rss.xml", // Path to the RSS file.
  siteFBAppID: "1234567890123456", // FB Application ID for using app insights
  googleAnalyticsID: "UA-12345678-9", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY-MM-DD", // Date format for display.
  userName: "user", // Username to display in the author segment.
  userEmail: "user@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Somewhereland", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Generic content.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/agap2-ag/gatsby-bootstrap-starter",
      iconClassName: "github",
      iconBrand: 1
    },
    {
      label: "Twitter",
      url: "",
      iconClassName: "twitter",
      iconBrand: 1
    },
    {
      label: "Email",
      url: "user@example.com",
      iconClassName: "envelope",
      iconBrand: 0
    }
  ],
  copyright: "Copyright © 2019. User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
