import { Header } from "../../Components/Header";
import {NotesSection} from '../../Components/NotesSection'

export const MainPage = () => {
  return (
    <div className="main_page">
      <Header tituloVista="Welcome to My Notes App">
        <button>Login</button>
        <button>Register</button>
      </Header>
      <NotesSection title='Forget to remembre your chores, from now we take care of it'></NotesSection>
    </div>
  );
};

