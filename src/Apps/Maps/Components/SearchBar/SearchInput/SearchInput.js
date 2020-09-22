import React from "react";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import { ReactComponent as SearchIcon } from "../../../../../Assets/Images/SearchIcon.svg";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";

function SearchInput({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const clearButton = (e) => {
    setValue("");
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <Combobox className="mapsSearch" onSelect={handleSelect}>
      <ComboboxInput
        className="mapsSearch__input"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search your location"
      />
      {value ? (
        <IconButton onClick={clearButton}>
          <ClearIcon className="Icon" />
        </IconButton>
      ) : null}
      {!value ? <SearchIcon className="Icon" /> : null}
      <ComboboxPopover className="mapsSearch__optionsPopover">
        <ComboboxList className="mapsSearch__optionsUL">
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption
                key={id}
                value={description}
                className="mapsSearch__optionsLI"
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default SearchInput;
