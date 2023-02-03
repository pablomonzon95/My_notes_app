export const NotesSection = ({ title, publicNotes }) => {
  return (
    <div className="Notespanel">
      <h1>{title}</h1>
      <ul>
        {publicNotes.map((note) => {
          return (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.note}</p>
              {note.image && <img src={note.image} alt={note.title} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
