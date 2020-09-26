import React from "react";

import { ReactComponent as GoogleIcon } from "../../Assets/Images/GoogleIcon.svg";
import { ReactComponent as GoogleDriveIcon } from "../../Assets/Images/GoogleDriveIcon.svg";
import { ReactComponent as GoogleMapsIcon } from "../../Assets/Images/GoogleMapsIcon2.svg";

const icons = {
  googleLogo: GoogleIcon,
  googleDriveLogo: GoogleDriveIcon,
  googleMapsLogo: GoogleMapsIcon,
};

const Icon = ({ icon, size }) => {
  const IconComponent = icons[icon];

  return <IconComponent height={size} width={size} aria-hidden />;
};

export default Icon;
