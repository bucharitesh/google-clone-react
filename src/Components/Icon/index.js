import React from "react";

import { ReactComponent as GoogleIcon } from "../../Assets/Images/GoogleIcon.svg";
import { ReactComponent as GoogleDriveIcon } from "../../Assets/Images/GoogleDriveIcon.svg";
import { ReactComponent as GoogleMapsIcon } from "../../Assets/Images/GoogleMapsIcon2.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Images/SearchIcon.svg";
import { ReactComponent as VoiceIcon } from "../../Assets/Images/VoiceIcon.svg";
import { ReactComponent as PlayStoreIcon } from "../../Assets/Images/PlayStoreIcon2.svg";

const icons = {
  googleLogo: GoogleIcon,
  googleDriveLogo: GoogleDriveIcon,
  googleMapsLogo: GoogleMapsIcon,
  searchIcon: SearchIcon,
  voiceIcon: VoiceIcon,
  playStoreLogo: PlayStoreIcon,
};

const Icon = ({ icon, size }) => {
  const IconComponent = icons[icon];

  return <IconComponent height={size} width={size} aria-hidden />;
};

export default Icon;
