import React from "react";

function Profile() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="header mt-md-5">
            <div class="header-body">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="header-pretitle">Overview</h6>
                  <h1 class="header-title">Profile</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">Basic Information</h4>
            </div>
            <div className="card-body">
              <div class="row justify-content-between align-items-center">
                <div class="col">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <div class="user-avatar">
                        <img src="https://i.pravatar.cc/300" alt="avatar" />
                      </div>
                    </div>
                    <div class="col ml-n2">
                      <h4 class="mb-1">Your avatar</h4>
                      <small class="text-muted">
                        PNG or JPG no bigger than 500px wide and tall.
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <button class="btn btn-primary">Change</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">Password</h4>
            </div>

            <div className="card-body">
              <div class="row justify-content-between">
                <div class="col-12 col-md-9">
                  <p class="text-muted mb-md-0">
                    We will email you a confirmation when changing your
                    password, so please expect that email after submitting.
                  </p>
                </div>
                <div class="col-12 col-md-3">
                  <button class="btn btn-block btn-outline-primary">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">Delete Account</h4>
            </div>

            <div className="card-body">
              <div class="row justify-content-between align-items-center">
                <div class="col-12 col-md-9">
                  <p class="text-danger mb-md-0">
                    Please note, deleting your account is a permanent action and
                    will no be recoverable once completed.
                  </p>
                </div>
                <div class="col-12 col-md-3">
                  <button class="btn btn-block btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
