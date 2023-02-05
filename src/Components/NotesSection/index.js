import './style.css'
export const NotesSection = ({ title, publicNotes }) => {
  return (
    <div className="notesPanel">
      <h1>{title}</h1>
      <ul>
        {publicNotes.map((note) => {
          return (
            <li key={note.id}>
              <h3>{note.title}</h3>
              {note.image && <img src={note.image} alt={note.title} />}
              <p>{note.note}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
