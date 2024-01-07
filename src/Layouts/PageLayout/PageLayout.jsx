import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* Sidebar on the left */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* page content on thr right */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "clac(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
