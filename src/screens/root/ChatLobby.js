import {
  Avatar,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../services/Context";
import socket from "../../services/Socket";

const ChatLobby = (props) => {
  const { user } = useContext(AuthContext);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    socket.auth = user;
    socket.connect();

    socket.on("users", (users) => {
      const Uidx = users.findIndex((usr) => usr.id === user.id);
      users.splice(Uidx, 1);
      setUsersList(users);
    });

    socket.on("connect_error", (err) => {
      alert(err.message);
    });

    return () => {};
  }, []);

  return (
    <Box
      mt={20}
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Chats
      </Heading>
      <FlatList
        data={usersList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              props.navigation.navigate("ChatRoom", { item });
            }}
          >
            {({ isHovered, isFocused, isPressed }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: item.avatarUrl,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.online ? "Online" : "Offline"}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>
            )}
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default ChatLobby;
