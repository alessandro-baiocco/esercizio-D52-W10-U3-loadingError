import { useState } from "react";
import { Container, Row, Col, Form, Button, Placeholder, PlaceholderButton, Alert } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ERROR, getJobs } from "../redux/action";
import setError from "../redux/reducers/error";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.list.content?.data);
  const error = useSelector((state) => state.isError.error);
  const status = useSelector((state) => state.isError.status);
  const loading = useSelector((state) => state.isLoading.loading);
  const dispatch = useDispatch();

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobs(query));

    //   try {
    //     const response = await fetch(baseEndpoint + query + "&limit=20");
    //     if (response.ok) {
    //       const { data } = await response.json();
    //       setJobs(data);
    //     } else {
    //       alert("Error fetching results");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  const jobsNumber = useSelector((state) => state.jobs.content.length);
  const favNumber = useSelector((state) => state.favorites.content.length);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/ListaLavori">
            <Button className="text-light ms-2" variant="info">
              vai alla lista ({jobsNumber})
            </Button>
          </Link>
          <Link to="/preferiti">
            <Button className="text-light ms-2" variant="success">
              preferiti({favNumber})
            </Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
              required
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {error && !loading && (
            <Alert
              variant="danger"
              className="mt-2"
              onClose={() => dispatch({ type: ERROR, payload: false })}
              dismissible
            >
              <Alert.Heading>errore</Alert.Heading>
              <p>oggi festa c'e stato un'errore nel reperimento dei lavori status code : {status}</p>
            </Alert>
          )}
          {loading &&
            [...Array(10).keys()].map((num) => (
              <Row
                className="mx-0 mt-3 p-3"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
                key={`placehold-${num}`}
              >
                <Col xs={9}>
                  <Placeholder bg="info" animation="glow" as="p"></Placeholder>
                </Col>
                <Col xs={3}>
                  <PlaceholderButton variant="info"></PlaceholderButton>
                </Col>
              </Row>
            ))}
          {jobs && !loading && !error && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
