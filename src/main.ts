import { EmailsForm } from './components/EmailsForm/EmailsForm';
import './styles.css';

const emailForm = new EmailsForm({
  container: document.querySelector('#app')!,
  emails: [
    {
      id: new Date().getTime(),
      text: '',
    },
  ],
});

console.table(emailForm.actions.getEmails())