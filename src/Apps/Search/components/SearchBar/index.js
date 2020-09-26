import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

import { useStateValue } from "../../../../StateProvider";
import { actionTypes } from "../../../../reducer";

import { ReactComponent as SearchIcon } from "../../../../Assets/Images/SearchIcon.svg";
import { ReactComponent as VoiceIcon } from "../../../../Assets/Images/VoiceIcon.svg";

import { Button, Dialog, IconButton } from "@material-ui/core";

import VoiceTranscript from "./VoiceTranscript";

function SearchBar({ hideButtons = false }) {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState(term);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search/q/all");
  };

  const [openmodal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <form className="search">
      <div className="search__input">
        <VoiceIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* <Divider orientation="vertical" className="verticalDivider" /> */}
        <IconButton onClick={handleClickOpen}>
          <SearchIcon />
        </IconButton>

        <Dialog
          open={openmodal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <VoiceTranscript />
        </Dialog>
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search_buttonsHiddden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHiddden" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
