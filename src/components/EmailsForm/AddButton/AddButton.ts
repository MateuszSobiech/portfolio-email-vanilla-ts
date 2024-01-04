import { ComponentState } from '../../interfaces';
import './AddButton.css';

interface ButtonState extends ComponentState {
  onClick: () => void;
}

export class AddButton {
  constructor(private state: ButtonState) {
    this.render();
    this.addListeners();
  }

  private render() {
    this.state.container.innerHTML = `
    <button class="add-button">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg>
      Add email
    </button>`;
  }

  private addListeners() {
    const button = this.state.container.querySelector('button');
    button?.addEventListener('click', this.state.onClick);
  }
}
