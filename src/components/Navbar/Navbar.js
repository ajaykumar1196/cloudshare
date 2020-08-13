import React from 'react';

function Navbar(){
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <svg width="30" height="30" viewBox="0 0 182 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 9H104.081C142.144 9 173 39.8924 173 78C173 116.108 142.144 147 104.081 147H80.6486" stroke="#2C7BE5" stroke-width="17" stroke-linecap="round"/>
                        <path d="M35.101 119H103.788C126.549 119 145 100.644 145 78C145 55.3563 126.549 37 103.788 37H9" stroke="#2C7BE5" stroke-width="17" stroke-linecap="round"/>
                        <path d="M104.2 64C111.822 64 118 70.268 118 78C118 85.732 111.822 92 104.2 92H49" stroke="#2C7BE5" stroke-width="17" stroke-linecap="round"/>
                        <line x1="75.5" y1="65.5" x2="65.5" y2="65.5" stroke="#2C7BE5" stroke-width="17" stroke-linecap="round"/>
                    </svg>
                    <span className="ml-2">Cloudshare</span>
                </a>
                <div className=" d-md-flex dropdown">
                 <button className="btn-account" type='button' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="account-summary d-none d-md-block d-lg-block mr-md-1">
                            <span className="account-name">Beni Arisandi</span>
                        </span>
                        <span className="mx-lg-2 mx-md-2 user-avatar user-avatar-md">
                            <img src="https://i.pravatar.cc/300" alt="avatar" />
                        </span>
                 </button>

                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                     <a className="dropdown-item" href="/profile">Profile</a>
                     <hr class="dropdown-divider"></hr>
                     <a className="dropdown-item" href="/signout">Sign Out</a>
                 </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;
