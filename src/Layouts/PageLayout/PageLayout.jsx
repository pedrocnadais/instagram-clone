import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../../Components/SideBar/Sidebar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* left sidebar PROFILE/FRIENDS/COMMUNITIES */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* right sidebar FRIENDS BOX/COMMUNITIES BOX */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
