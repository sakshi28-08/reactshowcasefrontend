
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Listing() {
  const [compList, setCompList] = useState([]);

  const getDataFromBackend = () => {
    fetch("http://localhost:5000/component/getall").then((res) => {
      if (res.status === 200) {
        console.log("data fetched");
        res.json().then((data) => {
          console.log(data);
          setCompList(data);
        });
      }
    });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteComponent = (id) => {
    fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        console.log("data deleted");
        getDataFromBackend();
      }
    });
  };

  const displayComponents = () => {
    return compList.map(({ _id, title, description, thumbnail, createdAt }) => (
      <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
        <div className="card mb-5">
          <img
            src={"http://localhost:5000/" + thumbnail}
            className="card-img-top"
            alt="rcsc"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="small">
                <a href="#!" className="text-muted">
                  <h3>Component</h3>
                </a>
              </p>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">
                <span className="fw-bold"></span>
              </p>
              <div className="ms-auto text-primary">
                <i class="fa-regular fa-thumbs-up"></i>
              </div>
            </div>

            <Link className="btn btn-primary" to={'/Viewer/'+_id}>View</Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">{displayComponents()}</div>
        </div>
      </section>
    </div>
  );
}

export default Listing;
