import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="header mt-md-5">
            <div className="header-body">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="header-pretitle">Welcome</h6>
                  <h1 className="header-title">Dashboard</h1>
                </div>
                <div className="col col-md-auto mt-3 mt-md-0">
                  <button className="btn btn-sm btn-block btn-rounded-circle btn-primary lift">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card" data-list='{"valueNames": ["name"]}'>
              <div class="card-header">
                <h4 class="card-header-title">Files</h4>
              </div>

              <div class="card-body">
                <ul class="list-group list-group-lg list-group-flush list">
                  <li class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <a href="#!" class="avatar avatar-lg">
                          <span class="avatar-title rounded bg-white text-secondary">
                            <span class="fe fe-folder"></span>
                          </span>
                        </a>
                      </div>
                      <div class="col ml-n2">
                        <h4 class="mb-1 name">
                          <a href="#!">Screenshot Collection</a>
                        </h4>

                        <p class="card-text small text-muted mb-1">
                          6.9mb directory
                        </p>

                        <p class="card-text small text-muted">
                          Uploaded by Dianna Smiley on{" "}
                          <time datetime="2018-01-03">Jan 3, 2018</time>
                        </p>
                      </div>
                      <div class="col-auto">
                        <a
                          href="#!"
                          class="btn btn-sm btn-light d-none d-md-inline-block"
                        >
                          Download
                        </a>
                      </div>
                      <div class="col-auto">
                        <div class="dropdown">
                          <a
                            href="#!"
                            class="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="#!" class="dropdown-item">
                              Share
                            </a>
                            <a href="#!" class="dropdown-item">
                              Delete
                            </a>
                            <a href="#!" class="dropdown-item">
                              Move
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <a href="#!" class="avatar avatar-lg">
                          <span class="avatar-title rounded bg-white text-secondary">
                            <span class="fe fe-pie-chart"></span>
                          </span>
                        </a>
                      </div>
                      <div class="col ml-n2">
                        <h4 class="mb-1 name">
                          <a href="#!">User test results slides</a>
                        </h4>

                        <p class="card-text small text-muted mb-1">
                          1.1mb PPTX
                        </p>

                        <p class="card-text small text-muted">
                          Uploaded by Dianna Smiley on{" "}
                          <time datetime="2018-01-03">Jan 3, 2018</time>
                        </p>
                      </div>
                      <div class="col-auto">
                        <a
                          href="#!"
                          class="btn btn-sm btn-light d-none d-md-inline-block"
                        >
                          Download
                        </a>
                      </div>
                      <div class="col-auto">
                        <div class="dropdown">
                          <a
                            href="#!"
                            class="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
