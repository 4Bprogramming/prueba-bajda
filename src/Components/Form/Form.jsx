import React, { useState, useEffect } from "react";
import "./Form.css";
import { uid } from "uid";
// import {
//   query,
//   collection,
//   onSnapshot,
//   updateDoc,
//   doc,
//   addDoc,
//   deleteDoc,
// } from "firebase/firestore";
import { db, uploadFile } from "../../firebase/credential";
import {
  ref,
  set,
  query,
  onValue,
  orderByKey,
  remove,
} from "firebase/database";

function Form() {
  
  const [showError, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [place, setPlace] = useState();
  const [type, setType] = useState();
  const [area, setArea] = useState();
  const [rooms, setRooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [garage, setGarage] = useState();
  const [images, setImages] = useState();
  const [year, setYear] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleImg = async (e) => {
    try {
      let url = await uploadFile(e);
      setImage(url);
    } catch (error) {
      console.log("Error image");
    }
    // setImage(e.target.value);
  };

  const handlePlace = (e) => {
    setPlace(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleArea = (e) => {
    setArea(e.target.value);
  };

  const handleRooms = (e) => {
    setRooms(e.target.value);
  };

  const handleBath = (e) => {
    setBathrooms(e.target.value);
  };

  const handleGara = (e) => {
    setGarage(e.target.value);
  };

  const handleImgs = async (e) => {
    try {
      let urls = await uploadFile(e);
      setImages(urls);
    } catch (error) {
      console.log("Error image");
    }
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const resetFields = () => {
    setArea("");
    setBathrooms("");
    setDescription("");
    setGarage("");
    setImage("");
    setImages("");
    setPlace("");
    setRooms("");
    setTitle("");
    setType("");
    setYear("");
  };

  function isValidate() {
    if (
      area === "" ||
      bathrooms === "" ||
      description === "" ||
      garage === "" ||
      image === "" ||
      images === "" ||
      place === "" ||
      rooms === "" ||
      title === "" ||
      type === "" ||
      year === ""
    ) {
      return alert("FALTAN DATOS");
    } else {
      return true;
    }
  }

  const handleProject = (e) => {
    const uuid = uid();
    if (isValidate()) {
      set(ref(db, `/projects/${uuid}`), {
        id: uuid,
        area,
        bathrooms,
        description,
        garage,
        image:"",
        images:"",
        place,
        rooms,
        title,
        type,
        year,
      });
      resetFields();
    } else {
      setError("Introduzca sus datos");
      console.log("validation error");
    }
  };

  const fetchUser = () => {
    console.log("Fetching all Users");

    var withdrawRef = query(ref(db, `/projects/`), orderByKey());
    onValue(withdrawRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setProjects([]);
        Object.values(data).map((project) => {
          setProjects((oldArray) => [...oldArray, project]);
        });
      }
    });
  };

  const handleUserUpdate = (project) => {
    remove(ref(db, `/projects/${project.id}`));
  };

  const handledeleteProject = (project) => {
    remove(ref(db, `/projects/${project.id}`));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <section className="form-register">
        <h4>Formulario Registro</h4>
        <form>
          <label>TITULO</label>
          <input
            className="controls"
            value={title}
            type="text"
            name="project"
            placeholder="Titulo del Proyecto"
            onChange={handleTitle}
          />

          <label>DESCRIPCION</label>
          <textarea
            className="controls"
            value={description}
            name="description"
            placeholder="Descripcion"
            onChange={handleDescription}
          />

          <div>
            <label>RESUMEN</label>
            <input
              className="controls"
              value={place}
              type="text"
              name="location"
              placeholder="Ubicacion"
              onChange={handlePlace}
            />
          </div>
          <input
            className="controls"
            type="text"
            value={type}
            name="type"
            placeholder="Tipo"
            onChange={handleType}
          />
          <input
            className="controls"
            type="number"
            value={area}
            name="area"
            placeholder="m2"
            onChange={handleArea}
          />
          <input
            className="controls"
            type="number"
            name="rooms"
            value={rooms}
            placeholder="Cantidad Espacios"
            onChange={handleRooms}
          />
          <input
            className="controls"
            type="number"
            name="badRoms"
            value={bathrooms}
            placeholder="Cantidad Baños"
            onChange={handleBath}
          />
          <input
            className="controls"
            type="text"
            name="garage"
            value={garage}
            placeholder="Garaje"
            onChange={handleGara}
          />
          <input
            className="controls"
            type="number"
            name="year"
            value={year}
            placeholder="Año de construccion"
            onChange={handleYear}
          />
          <br />
          <label>PORTADA</label>
          <input
            className="controls"
            type="file"
            value={image}
            accept="image/*"
            name="imagePrincipal"
            placeholder="Portada"
            onChange={handleImg}
          />
          <br />
          <label>IMAGENES</label>
          <input
            className="controls"
            type="file"
            value={images}
            name="image"
            accept="image/*"
            placeholder="Imagenes"
            onChange={handleImgs}
          />

          <input
            onClick={(e) => {
              handleProject(e);
            }}
            className="botons"
            type="submit"
            value="Registrar"
          />
        </form>
      </section>
    </div>
  );
}

export default Form;
