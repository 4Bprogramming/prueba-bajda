import React from "react";
import appFirebase from "../../firebase/credential2";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Form.css";

const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);

function Form2() {
  let urlImgP;

  const saveInfo = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const area = e.target.area.value;
    const bathrooms = e.target.bathrooms.value;
    const description = e.target.description.value;
    const garage = e.target.garage.value;
    const place = e.target.place.value;
    const rooms = e.target.rooms.value;
    const type = e.target.type.value;
    const year = e.target.year.value;

    const newProject = {
      area,
      bathrooms,
      description,
      garage,
      image: urlImgP,
      place,
      rooms,
      title,
      type,
      year,
    };

    //guardar
    try {
      await addDoc(collection(db, "projects"), {
        ...newProject,
      });
    } catch (error) {
      console.log(error);
    }
    // reseteo
    e.target.title.value = "";
    e.target.area.value = "";
    e.target.bathrooms.value = "";
    e.target.description.value = "";
    e.target.garage.value = "";
    e.target.place.value = "";
    e.target.rooms.value = "";
    e.target.type.value = "";
    e.target.year.value = "";
    // e.target.file.value="";
  };

  const fileHandler = async (e) => {
    const portadaPpal = e.target.files[0];
    const refPortada = ref(storage, `documentos/${portadaPpal.name}`);
    await uploadBytes(refPortada, portadaPpal);
    //url imagen
    urlImgP = await getDownloadURL(refPortada);
  };

  return (
    <div>
         <section className="form-register">
      <form onSubmit={saveInfo}>
        <label>TITULO</label>
        <input
          className="controls"
          id="title"
          type="text"
          name="project"
          placeholder="Titulo del Proyecto"
         
        />

        <label>DESCRIPCION</label>
        <textarea
          className="controls"
          id="description"
          name="description"
          placeholder="Descripcion"
        
        />

        <div>
          <label>RESUMEN</label>
          <input
            className="controls"
            id="place"
            type="text"
            name="location"
            placeholder="Ubicacion"
            
          />
        </div>
        <input
          className="controls"
          type="text"
          id="type"
          name="type"
          placeholder="Tipo"
        />
        <input
          className="controls"
          type="number"
          id="area"
          name="area"
          placeholder="m2"
        />
        <input
          className="controls"
          type="number"
          name="rooms"
          id="rooms"
          placeholder="Cantidad Espacios"
        />
        <input
          className="controls"
          type="number"
          name="badRoms"
          id="bathrooms"
          placeholder="Cantidad Baños"
        />
        <input
          className="controls"
          type="text"
          id="garage"
          placeholder="Garaje"
        />
        <input
          className="controls"
          type="number"
          id="year"
          placeholder="Año de construccion"
        />
        <br />
        <label>PORTADA</label>
        <input
          className="controls"
          type="file"
          accept="image/*"
          id="image"
          placeholder="Portada"
          onChange={fileHandler}
        />
        <br />
        {/* <label>IMAGENES</label>
        <input
          className="controls"
          type="file"
          // value={images}
          name="image"
          accept="image/*"
          placeholder="Imagenes"
          onChange={handleImgs}
          multiple
        /> */}

        <input className="botons" type="submit" value="Registrar" />
      </form>
      </section>
    </div>
  );
}

export default Form2;
