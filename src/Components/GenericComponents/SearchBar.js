import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { searchStyles } from "../../Styles/commonStyles";
import { useStores } from "../../stores";
import { TextField } from "@mui/material";
import SvgIcon from "../../Utils/SvgIcon";
import Images from "../../Utils/Images";
import { withRouter } from "react-router-dom";

const SearchBar = observer((props) => {
  //Initialising state variables
  const {
    classes,
    propStore,
    placeholder,
    searchText,
    setSearchText,
    onSearch,
  } = props;
  //Mobx store

  return (
    <React.Fragment>
      <TextField
        onDrop={(e) => e.preventDefault()}
        autoFocus={true}
        variant="filled"
        placeholder={placeholder}
        value={searchText}
        onKeyDown={(e) => onSearch(e)}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          disableUnderline: true,
          startAdornment: <SvgIcon src={Images.search} />,
          endAdornment: (
            <div className="rowFlex" style={{ minWidth: "fit-content" }}>
              {searchText !== undefined && searchText !== "" ? (
                <div
                  onClick={() => setSearchText("")}
                  className={`xsFont colFlex flexCenter pointer ${classes.cancelSearch}`}
                >
                  X&nbsp;&nbsp;
                </div>
              ) : null}
            </div>
          ),
          classes: { root: classes.searchField, input: classes.searchInput },
        }}
        style={{ visibility: props.visibility, flex: "1" }}
      />
    </React.Fragment>
  );
});

export default withStyles(searchStyles)(withRouter(SearchBar));
