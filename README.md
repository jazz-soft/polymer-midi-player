# polymer-midi-player

[![npm](https://img.shields.io/npm/v/polymer-midi-player.svg)](https://www.npmjs.com/package/polymer-midi-player)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/polymer-midi-player)

## MIDI Player Web Component

![midi-player](https://jazz-soft.github.io/img/midi-player.png)

Playing MIDI files via *Web Audio* and *Web MIDI*

## Usage
### Install the Web Component
`npm install polymer-midi-player --save`

### HTML

```html
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script type="module">
  import 'polymer-midi-player';
</script>
```
```html
<midi-player src="test.mid" loop=2 autoplay></midi-player>
```

## Attributes
`src` - MIDI file URL  
`data` - contents of the MIDI file as String;
can be used as an alternative to `src`  
`autoplay` - start playback immediately  
`loop` - the number of repeats, or `true` for an infinite loop

## API
`play()`  
`pause()`  
`resume()`  
`stop()`

## Testing with Polymer
Make sure the Polymer CLI is installed:
`npm install -g polymer-cli`  
In the project directory:  
run `npm install`  
run `polymer serve --open`

## Non-Polymer version
https://github.com/jazz-soft/JZZ-gui-Player
