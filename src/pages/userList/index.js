import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import { addUser, getUsers, deleteUser } from "../../utils/dbFunctions";
import FilterForm from "../../components/FilterForm";
import "./index.css";

const UserList = () => {
  useEffect(async () => {
    const users = await getUsers();
    setAllUsers(users);
  }, []);

  const initialUser = {
    name: "",
    lastName: "",
    identification: "",
    rol: "",
    state: "",
    password: "",
    phone: "",
    email: "",
  };

  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState(initialUser);
  const [allUser, setAllUsers] = useState([]);

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await addUser(newUser);
    if (!response.data) {
      alert("Error al agregar el nuevo usuario, email repetido");
    } else {
      const newUsers = await getUsers();

      setAllUsers(newUsers);
      setOpenModal(!openModal);
    }
  };

  const deleteElement = async (id) => {
    const response = await deleteUser(id);
    const newUsers = await getUsers();
    setAllUsers(newUsers);
  };

  return (
    <div className="list-container">
      <div className="list-actions">
        <div className="list-title">
          <span>Usuarios existentes</span>
          <button
            onClick={() => setOpenModal(!openModal)}
            className="list-title-button"
          >
            Crear
          </button>
        </div>
        <div className="list-table">
          <Table deleteData={deleteElement} data={allUser}></Table>
        </div>
        <div>
          {openModal && (
            <div className="modal-form">
              <div className="form-user">
                <div className="title-modal">
                  <span>Agregar nuevo usuario</span>
                  <button onClick={() => setOpenModal(!openModal)}>X</button>
                </div>
                <form onSubmit={onSubmit} className="form-user-inputs">
                  <div className="input-container">
                    Nombre
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="input-container">
                    Apellidos
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="lastName"
                    />
                  </div>
                  <div className="input-container">
                    Identificación (C.C)
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="identification"
                    />
                  </div>
                  <div className="input-container">
                    Rol asociado
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="rol"
                    />
                  </div>
                  <div className="input-container">
                    Estado
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="state"
                    />
                  </div>
                  <div className="input-container">
                    Contraseña
                    <input
                      onChange={handleInputChange}
                      type="password"
                      name="password"
                    />
                  </div>
                  <div className="input-container">
                    Telefono
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="phone"
                    />
                  </div>
                  <div className="input-container">
                    Correo electrónico
                    <input
                      onChange={handleInputChange}
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="action-button-container">
                    <input
                      type="submit"
                      className="accept-button"
                      value="Aceptar"
                    />
                    <div>
                      <button
                        onClick={() => setOpenModal(!openModal)}
                        className="cancel-button"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <FilterForm></FilterForm>
    </div>
  );
};

export default UserList;
