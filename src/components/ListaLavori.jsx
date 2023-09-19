import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeJobs } from "../redux/action";

const ListaLavori = () => {
  const jobs = useSelector((state) => state.jobs.content);
  const dispatch = useDispatch();

  return (
    <>
      <h1>LAVORI</h1>
      <Link to="/">
        <Button className="text-light" variant="info">
          torna alla home
        </Button>
      </Link>
      {jobs.map((job, i) => {
        return (
          <li key={`job-${i}`}>
            {job.title} | {job.job_type} |<Link to={`/${job.company_name}`}>{job.company_name}</Link>
            <Button className="ms-2 text-light" variant="danger" onClick={() => dispatch(removeJobs(i))}>
              <i className="bi bi-trash3"></i>
            </Button>
          </li>
        );
      })}
    </>
  );
};

export default ListaLavori;
