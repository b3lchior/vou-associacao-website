// .eleventy.js
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/img");
    return {
        dir: {
        input: "src", 
        includes: "_includes",   
        output: "_site"
        }
    };
};
