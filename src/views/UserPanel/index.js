import {Header} from "../../Components/Header"
import { NotesSection } from "../../Components/NotesSection"
import { useSession } from "../../context/sessionToken"
import { useNotes } from "../../hooks/useNotes";



export const UserPanel = () => {
    const {Notes} = useNotes()
   
    const [, , logout] = useSession()
    return <div className="userPanel">
        <Header viewtitle = "This is you personal panel">
        <button >Categorias</button>
        <button onClick={() => logout()}>Log out</button>
        </Header>
        <NotesSection title="Your personal notes" notes={Notes}></NotesSection>
    </div>
} 