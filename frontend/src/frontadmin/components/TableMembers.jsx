import axios from "axios";
import propTypes from "prop-types";
import Swal from "sweetalert2";
import "../../assets/styles/TableMembers.css";

export default function TableMembers({ data }) {
  const onMembersDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/member/${id}`);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Le contenu a bien été supprimé",
      showConfirmButton: false,
      timer: 1500,
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <table id="members-table">
        <thead>
          <tr>
            <th>prénom</th>
            <th>nom</th>
            <th>email</th>
            <th>adresse</th>
            <th>téléphone</th>
            <th>montant d'adhésion</th>
            <th>newsletter</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line react/prop-types */}
          {data.map((list) => (
            <tr key={list.id}>
              <td>{list.name}</td>
              <td>{list.lastName}</td>
              <td>{list.email}</td>
              <td>{list.address}</td>
              <td>{list.phone}</td>
              <td>{list.cotisation}</td>
              <td>{list.newsletter === 1 ? "oui" : "non"}</td>
              <td>
                <button
                  type="button"
                  className="btn-deletemember"
                  onClick={(e) => onMembersDelete(list.id, e)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableMembers.propTypes = {
  data: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    lastname: propTypes.string,
    address: propTypes.string,
    phone: propTypes.number,
    cotisation: propTypes.number,
    newsletter: propTypes.number,
  }),
};

TableMembers.defaultProps = {
  data: propTypes.shape({
    id: 1,
    name: "toto",
    lastname: "titi",
    address: "rue baron",
    phone: "06.06.06.06.06",
    cotisation: "08.07.2022",
    newsletter: 1,
  }),
};
