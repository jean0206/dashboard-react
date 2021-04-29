import React, { useState } from "react";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Table = ({ data, deleteData }) => {
  return (
    <div className="table-container">
      {data && (
        <table className="content-table">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Identificación (C.C)</th>
              <th>Rol asociado</th>
              <th>Estado</th>
              <th>Telefono</th>
              <th>Correo electronico</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.identification}</td>
                <td>{user.rol}</td>
                <td>{user.state}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <FontAwesomeIcon
                    className="edit-icon"
                    color="#1d43ad"
                    size="lg"
                    icon={faPencilAlt}
                  />
                  <FontAwesomeIcon
                    onClick={() => deleteData(user.id)}
                    className="delete-icon"
                    color="#1d43ad"
                    size="lg"
                    icon={faTrash}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
