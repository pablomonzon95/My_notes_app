import "./style.css";
export const NoteDetail = ({ title, note, image, convertImage, data }) => {
  return (
    <div className="noteDetail">
      <img className="pinDetail" src="/img/pin.png" alt="pin"></img>
      <h2>{title}</h2>
      {image && (
        <img className="imagenNota" src={convertImage(data)} alt={title} />
      )}
      <p>{note}</p>
    </div>
  );
};
