import React from "react";
import { SuccessButton, ErrorButton } from "../StyledComponents/Button.style";
import { HeadingOne } from "../StyledComponents/HeadingOne.style";

function WebsiteList({ finalData }) {
   
  return (
    <div style={{ marginTop: "50px" }}>
      <HeadingOne>WEBSITES</HeadingOne>
      <div className="list-group">
        {finalData &&
          Array.isArray(finalData) &&
          finalData.length > 0 &&
          finalData.map((item, id) => {
            return (
              <div key={id}>
                <li
                  className="list-group-item list-group-item-action flex-column"
                  style={{ border: "none", borderBottom: "1px solid #B5B5B5" }}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-0">{item.title}</h5>
                    {
                        item.status_code === 200 ? <SuccessButton>LIVE</SuccessButton> : <ErrorButton>Error</ErrorButton>
                    }
                  </div>
                  <a
                  style={{cursor: 'pointer', color: '#00466E'}}
                  >
                    <small>{item.url}</small>
                  </a>
                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WebsiteList;
