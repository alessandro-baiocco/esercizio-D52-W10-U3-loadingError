import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FAVORITES, removeFavorites } from "../redux/action";

const Favorites = () => {
  const jobs = useSelector((state) => state.favorites.content);
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
            <Button
              className="ms-2 text-light"
              variant="danger"
              onClick={() => dispatch(removeFavorites(job.company_name))}
            >
              <i className="bi bi-trash3"></i>
            </Button>
          </li>
        );
      })}
    </>
  );
};

export default Favorites;
