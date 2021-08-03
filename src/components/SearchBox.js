import React, { useState } from "react";
import { AddWebsiteButton } from "../StyledComponents/Button.style";
import { InputField } from "../StyledComponents/Input.style";

function SearchBox({ handleChange, url, handleSubmit }) {
  return (
    <div>
      <InputField
        placeholder="Enter Website URL"
        onChange={handleChange}
        value={url}
      />
      <AddWebsiteButton onClick={handleSubmit}>Add Website</AddWebsiteButton>
    </div>
  );
}

export default SearchBox;
