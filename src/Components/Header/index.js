export const Header = ({tituloVista} ) => {
       return (<div className="header">
        <img src='/img/imagennotas.png' alt='logo de la app'></img>
        <h1>My Notes APP</h1>
        <h2>{tituloVista}</h2>
        
        </div>)
}