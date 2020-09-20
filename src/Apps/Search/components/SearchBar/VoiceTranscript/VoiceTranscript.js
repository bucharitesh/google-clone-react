import React, { useState } from "react";
import "./VoiceTranscript.css";

import { useSpeechRecognition } from "react-speech-kit";

import { DialogContentText, DialogContent } from "@material-ui/core";

import MicIcon from "@material-ui/icons/Mic";

import { useHistory } from "react-router-dom";

import { useStateValue } from "../../../../../StateProvider";
import { actionTypes } from "../../../../../reducer";

function VoiceTranscript() {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const search = (e) => {
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: value,
    });

    history.push("/search/q/all");
  };

  return (
    <div>
      <DialogContent>
        <DialogContentText>
          <div className="voiceTranscript__Container">
            <div className="voiceTranscript__Box">
              <h1>Speak Now...</h1>
              <form>
                <input
                  className="voiceTranscript__Text"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  disabled
                />
                {/* <button type="submit" onClick={search}>submit</button> */}
              </form>
            </div>
            <div className="rec-button rec-effect-1">
              <button
                className="rec-icon"
                onMouseDown={listen}
                onMouseUp={() => {
                  stop();
                  if (value !== "") {
                    setTimeout(function () {
                      search();
                    }, 300);
                  }
                }}
              >
                <MicIcon fontSize="large" />
              </button>
            </div>
            {listening && (
              <div className="reclistening_text">Go ahead I'm listening</div>
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}

export default VoiceTranscript;
