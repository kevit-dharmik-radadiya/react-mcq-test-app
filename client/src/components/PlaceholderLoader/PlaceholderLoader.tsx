import { Box } from "@mui/material";
import ContentLoader from "react-content-loader";

const PlaceholderLoader = () => {
  return (
    <Box
      sx={{
        maxWidth: "270px",
        width: "100%",
        boxShadow: "0 0 10px #cbcbcb",
        borderRadius: "10px",
      }}
    >
      <ContentLoader
        speed={2}
        width={270}
        height={133}
        viewBox="0 0 270 133"
        backgroundColor="#00a78321"
        foregroundColor="#00a78380"
      >
        <rect x="20" y="27" rx="5" ry="5" width="130" height="20" />
        <rect x="20" y="55" rx="5" ry="5" width="50" height="22" />
        <circle cx="215" cy="49" r="35" />
        <rect x="20" y="85" rx="3" ry="3" width="17" height="20" />
        <rect x="46" y="85" rx="3" ry="3" width="17" height="20" />
        <rect x="70" y="85" rx="3" ry="3" width="34" height="20" />
        <rect x="195" y="92" rx="3" ry="3" width="17" height="20" />
        <rect x="220" y="92" rx="3" ry="3" width="17" height="20" />
      </ContentLoader>
    </Box>
  );
};

export default PlaceholderLoader;
