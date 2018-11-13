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
      autoplay: {
        type: Boolean,
        notify: true
      }
    }
  }

  ready() {
    super.ready();
    this.player = JZZ.gui.Player(this.shadowRoot);
    this.addEventListener('src-changed', this.srcChanged.bind(this));
    this.addEventListener('data-changed', this.dataChanged.bind(this));
    this.addEventListener('autoplay-changed', this.autoplayChanged.bind(this));
  }

  srcChanged() {
console.log('SRC changed:', this.src);
  }

  dataChanged() {
console.log('DATA changed:', this.data);
  }

  autoplayChanged() {
console.log('autoplay changed:', this.autoplay);
  }

}

customElements.define('midi-player', MidiPlayer);
