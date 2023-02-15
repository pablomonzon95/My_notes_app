const convertImage = (dataNumeric) => {

    const bytes = new Uint8Array(dataNumeric);

    // Convertir los bytes a un blob
    const myBlob = new Blob([bytes], { type: "image/jpg" });

    // Obtener el url
   let url = URL.createObjectURL(myBlob);

    return url;
  };

  export default convertImage