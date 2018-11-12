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
      }
    }
  }

  ready() {
    super.ready();
    this.player = JZZ.gui.Player(this.shadowRoot);
  }

}

customElements.define('midi-player', MidiPlayer);
