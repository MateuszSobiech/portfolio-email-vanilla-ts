import { Email } from '../EmailsForm';
import { ComponentState } from '../../interfaces';
import './EmailInput.css'

interface EmailInputState extends ComponentState {
  email: Email;
  lastInput: boolean;
  onRemove: () => void;
}

export class EmailInput {
  constructor(private state: EmailInputState) {
    this.render();
    this.addListeners();
  }

  private render() {
    const {
      email: { id, text },
      lastInput,
    } = this.state;

    // order matters in styles
    this.state.container.innerHTML = `
    <div class="email-input-container">
      <input id=${id} type="email" value="${text}" class="email-input" required>
      <label class="email-input-label">Email <span style="color: red;">*</span></label>
      ${lastInput ? '' : '<button type="button" class="email-input-button">X</button>'}
    </div>`;
  }

  private addListeners() {
    const input = this.state.container.querySelector('input');
    input?.addEventListener('input', () => {
      this.state.email.text = input.value;
      // to move label up
      input.setAttribute('value', input.value);
    });

    const button = this.state.container.querySelector('button');
    button?.addEventListener('click', this.state.onRemove);
  }
}
