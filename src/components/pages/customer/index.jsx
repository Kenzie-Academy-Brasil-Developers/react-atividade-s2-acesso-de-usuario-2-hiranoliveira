import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../Members";

const Customer = () => {
  const { id } = useParams();
  const member = members.find((mbr) => mbr.id === id);
  return (
    <>
      <div>
        <h1>Detalhes do cliente</h1>

        <p>Nome: {member && member.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
};

export default Customer;
