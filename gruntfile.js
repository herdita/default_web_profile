module.exports = function(grunt) {
 // Project configuration.
 grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  // Sass task
  sass: {
    examples: {
     options: {
      outputStyle: "expanded",
      sourceMapContents: true,
      sourceMap: true,
      precision: 4
     },
     files: {
      "www/assets/css/style.css": "src/scss/style.scss",
      "www/assets/css/print.css": "src/scss/print.scss",
      "www/assets/css/fontsize/small.css": "src/scss/fontsize/small.scss",
      "www/assets/css/fontsize/middle.css": "src/scss/fontsize/middle.scss",
      "www/assets/css/fontsize/large.css": "src/scss/fontsize/large.scss",
     }
    }
   },
  // Watch task
  watch: {
    sass: {
      files: ["src/scss/**/*.scss"],
      tasks: "sass",
      options: {
       spawn: false,
       livereload: true
      }
    },
   html: {
    files: ["src/html/index.html" ,"src/html/**/*.html", "src/html/**/**/*.html", "src/html/**/*.njk"],
    tasks: ["clean:html", "nunjucks", "prettify"],
    options: {
     spawn: false,
     livereload: true
    }
   },
   gruntfile: {
    files: "gruntfile.js",
    options: {
     spawn: false,
     livereload: true,
     reload: true
    }
   }
  },
  // Nunjucks task
  nunjucks: {
   options: {
    paths: "src/html"
   },
   dev: {
    files: [{
     expand: true,
     cwd: "src/html",
     src: [
      "index.html", "**/*.html"
     ],
     dest: "www/",
     ext: ".html"
    }],
   }
  },
  // Clean task
  clean: {
    html: {
      src: ["www/index.html", "www/**/*.html"]
    },
    all: {
      src: ["www/index.html", "www/**/*.html"]
    }
  },
  // Prettify task
  prettify: {
   options: {
    "indent": 1,
    "indent_char": " ",
    "wrap_line_length": 250,
    "brace_style": "collapse",
    "preserve_newlines": true,
    "condense": true,
    "max_preserve_newlines": 2,
    "unformatted": ["a", "code", "pre"]
   },
   all: {
    expand: true,
    cwd: "",
    src: ["www/**/*.html"],
    dest: "",
    ext: ".html"
   }
  },
 });

 // Load the plugins to run your tasks
 require("load-grunt-tasks")(grunt, {
  scope: "devDependencies"
 });
 require("time-grunt")(grunt);

 // Default task(s).
 grunt.registerTask("default", [
  "clean:all",
  "sass",
  "nunjucks",
  "prettify",
  "watch"
 ]);
};
