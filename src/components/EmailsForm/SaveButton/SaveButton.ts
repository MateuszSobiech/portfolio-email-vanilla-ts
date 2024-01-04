import { ComponentState } from "../../interfaces";
import './SaveButton.css'

interface SaveButtonState extends ComponentState {
  onClick: () => void;
}

export class SaveButton {
  constructor(private state: SaveButtonState) {
    this.render();
    this.addListeners();
  }

  private render() {
    this.state.container.innerHTML = `
    <button class="save-button">Save</button>`;
  }

  private addListeners() {
    const button = this.state.container.querySelector('button');
    button?.addEventListener('click', this.state.onClick);
  }
}
