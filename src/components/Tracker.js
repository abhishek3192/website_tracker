import React, { useState, useEffect } from "react";
import {
  Header,
  HeadingOne,
  HeadingTwo,
} from "../StyledComponents/HeadingOne.style";
import SearchBox from "./SearchBox";
import WebsiteList from "./WebsiteList";

function Tracker() {
  const [url, setUrl] = useState("");
  const [finalData, setFinalData] = useState(
    JSON.parse(localStorage.getItem("trackerData")) || []
  );

  const getUrlData = async (e) => {
    e.preventDefault();
    const urlRegex =
      /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!urlRegex.test(url)) {
      alert("Enter valid  url");
    }
    fetch(`https://api.allorigins.win/get?url=${url}`)
      .then((res) => {
          console.log(res.status);
        res
          .text()
          .then((response) => {
            let myObj = {};
            let domparser = new DOMParser();
            myObj["status_code"] = JSON.parse(response).status.http_code
            let doc = domparser.parseFromString(response, "text/html");
            doc.querySelectorAll("body").forEach((item) => {
              myObj["title"] = item.querySelector("title").textContent || '';
              myObj["url"] = url;
            });
            handleLocalStorage(myObj);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLocalStorage = (myObj) => {
    setUrl('')
    let websiteList = [];
    websiteList.push(myObj);
    let existingEntries = JSON.parse(localStorage.getItem("trackerData"));
    if (existingEntries === null) existingEntries = [];
    localStorage.setItem("data", JSON.stringify(myObj));
    existingEntries.push(myObj);
    localStorage.setItem("trackerData", JSON.stringify(existingEntries));
    setFinalData(existingEntries);
  };

  const handleWebsiteUrl = (event) => {
    setUrl(event.target.value);
  };
 
  return (
    <div style={{marginTop: '20px'}}>
      <Header>
        <HeadingOne>LIVE WEBSITE TRACKING</HeadingOne>
        <HeadingTwo>Current Tracking {finalData.length} websites</HeadingTwo>
      </Header>
        <SearchBox
          handleChange={handleWebsiteUrl}
          url={url}
          handleSubmit={getUrlData}
        />
      <WebsiteList finalData={finalData} />
    </div>
  );
}

export default Tracker;
