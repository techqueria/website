import React from "react";

function truncate(passedString) {
  return passedString.substring(0, 150);
}
export default function Eventcard({photo_url, name, event_url, description, created}) {
  return (
    <div className="column is-one-third-desktop is-half-tablet">
      <a href={event_url} rel="noopener" target="_blank">
        <div className="card card-equal-height">
          <div className="card-image">
            <figure className="image">
              <img
                src={photo_url}
                data-src={photo_url}
                alt={name} className="lozad card-image--figure"/>
            </figure>
          </div>
          <header className="card-header">
            <h3 className="card-header-title">
              {name}
            </h3>
          </header>
          <div className="card-content">
            <div
              className="content">
              <p>
                {description &&
                  truncate(description)
                }
              </p>
              {created &&
                <p className="has-text-weight-light mt-sm has-text-dark is-size-7">{created} </p>
              }
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
