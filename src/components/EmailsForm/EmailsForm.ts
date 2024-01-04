import { AddButton } from './AddButton/AddButton';
import { EmailInput } from './EmailInput/EmailInput';
import { SaveButton } from './SaveButton/SaveButton';
import { ComponentState } from '../interfaces';
import './EmailsForm.css'

export interface Email {
  id: number;
  text: string;
}

interface EmailsFormState extends ComponentState {
  emails: Email[];
}

export class EmailsForm {
  public actions = {
    getEmails: () =>  this.state.emails,
  }

  constructor(private state: EmailsFormState) {
    this.render();
    this.renderEmailInputs();
    this.renderAddButton();
    this.renderSaveButton();
  }

  private render() {
    this.state.container.classList.add('emails-form');

    this.state.container.innerHTML = `
    <h1>Emails</h1>
    <p class="emails-form-sub-header">Email addresses to send messages, you can add only 5 addresses.</p>
    <form onsubmit="return false" id="inputs"></form>
    <div id="add-button"></div>
    <div id="save-button"></div>`;
  }

  private renderEmailInputs() {
    const inputs = this.state.container.querySelector('#inputs')!;
    inputs.innerHTML = '';

    this.state.emails.forEach((email) => {
      const div = document.createElement('div');

      inputs.append(div);

      new EmailInput({
        container: div,
        email,
        lastInput: this.state.emails.length === 1,
        onRemove: () => {
          this.state.emails = this.state.emails.filter(
            (filterEmail) => filterEmail.id !== email.id
          );

          this.renderEmailInputs();
        },
      });
    });
  }

  private renderAddButton() {
    new AddButton({
      container: this.state.container.querySelector('#add-button')!,
      onClick: () => {
        if (this.state.emails.length === 5) return;

        this.state.emails.push({
          id: new Date().getTime(),
          text: '',
        });

        this.renderEmailInputs();
      },
    });
  }

  private renderSaveButton() {
    new SaveButton({
      container: this.state.container.querySelector('#save-button')!,
      onClick: () => {
        const inputs = this.state.container.querySelector<HTMLFormElement>('#inputs')!;

        if (inputs.reportValidity()) this.sendRequest();
      },
    });
  }

  private sendRequest() {
    console.table(this.state.emails);
  }
}
