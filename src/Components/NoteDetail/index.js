import "./style.css";
export const NoteDetail = ({ id, title, note }) => {
  return (
    <div className="noteDetail">
      <h2>{title}</h2>
      <p>{note}</p>
    </div>
  );
};
