import { Box, Button, Center } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../services/Context";

const index = (props) => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <Center flex={1} px="3">
      <Box
        bg="secondary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
        padding={5}
        borderRadius={5}
      >
        Hello,{user.fullName} Welcome to Native Base
      </Box>
      <Button
        marginTop={10}
        onPress={() => props.navigation.navigate("ChatLobby")}
      >
        GO to Chat
      </Button>
      <Button marginTop={10} onPress={logOut}>
        LogOut
      </Button>
    </Center>
  );
};

export default index;
