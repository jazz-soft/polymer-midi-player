module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: [ // polymer 3.0 "import" loads dependencies out of order
          "node_modules/jzz/javascript/JZZ.js",
          "node_modules/jzz-gui-player/javascript/JZZ.gui.Player.js",
          "node_modules/jzz-midi-smf/javascript/JZZ.midi.SMF.js",
          "node_modules/jzz-synth-tiny/javascript/JZZ.synth.Tiny.js"
        ],
        dest: "lib.js"
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};
