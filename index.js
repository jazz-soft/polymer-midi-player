import {PolymerElement, html} from '@polymer/polymer';
import './lib.js';

export class MidiPlayer extends PolymerElement {

  static get template() { return html``; }

  static get properties() {
    return {
      src: {
        type: String,
        notify: true
      },
      data: {
        type: String,
        notify: true
      },
      loop: {
        type: String,
        notify: true
      },
      autoplay: {
        type: Boolean,
        notify: true
      }
    }
  }

  ready() {
    super.ready();
    JZZ.synth.Tiny.register('Web Audio');
    this.player = JZZ.gui.Player(this.shadowRoot);
    this.addEventListener('src-changed', this.srcChanged.bind(this));
    this.addEventListener('data-changed', this.dataChanged.bind(this));
    this.addEventListener('loop-changed', this.loopChanged.bind(this));
    this.addEventListener('autoplay-changed', this.autoplayChanged.bind(this));
    if (this.src) this.srcChanged();
    else if (this.data) this.dataChanged();
  }

  srcChanged() {
    if (!this.src) return;
    try {
      var self = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            var r = xhttp.responseText;
            var data = '';
            for (var i = 0; i < r.length; i++) data += String.fromCharCode(r.charCodeAt(i) & 0xff);
            try {
              self.player.load(new JZZ.MIDI.SMF(data));
              self.player.loop(self.loop || 0);
              if (self.autoplay) self.player.play();
            }
            catch (e) {
              console.log('Cannot load "' + self.src + '":', e);
            }
          }
          else {
            console.log('Cannot load "' + self.src + '": XMLHttpRequest error');
          }
        }
      };
      xhttp.overrideMimeType('text/plain; charset=x-user-defined');
      xhttp.open('GET', this.src, true);
      xhttp.send();
    }
    catch (e) {
      console.log('XMLHttpRequest error', e);
    }
  }

  dataChanged() {
    try {
      this.player.load(new JZZ.MIDI.SMF(data));
      this.player.loop(this.loop || 0);
      if (this.autoplay) this.player.play();
    }
    catch (e) {
      console.log('Cannot load data:', e);
    }
  }

  loopChanged() {
    this.player.loop(this.loop || 0);
  }

  autoplayChanged() {
    if (this.autoplay) {
      this.player.loop(this.loop || 0);
      this.player.play();
    }
  }

  play() { this.player.play(); }
  stop() { this.player.stop(); }
  pause() { this.player.pause(); }
  resume() { this.player.resume(); }

}

customElements.define('midi-player', MidiPlayer);
