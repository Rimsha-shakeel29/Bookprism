import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
export const Menudata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/accountinfo",
  },
  {
    title: "Upload",
    icon: <CloudUploadIcon />,
    link: "/UploadBook",
  },
  {
    title: "My Books",
    icon: <LibraryBooksIcon />,
    link: "/",
  },
];
