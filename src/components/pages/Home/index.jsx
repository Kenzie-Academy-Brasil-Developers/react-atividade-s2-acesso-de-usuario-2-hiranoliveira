import { Link } from "react-router-dom";
const Home = ({ members }) => {
  return (
    <>
      {members.map((mbr) =>
        mbr.type === "pj" ? (
          <Link to={`company/${mbr.id}`}>{mbr.name}</Link>
        ) : (
          <Link to={`customer/${mbr.id}`}>{mbr.name}</Link>
        )
      )}
    </>
  );
};

export default Home;
