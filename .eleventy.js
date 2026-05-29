module.exports = function(eleventyConfig) {
  // Copy /src/assets directly to output (no processing)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // URL filter for use in mailto subject etc.
  eleventyConfig.addFilter("urlencode", function(str) {
    return encodeURIComponent(str || "");
  });
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
