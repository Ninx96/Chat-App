import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../services/Context";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from "native-base";
import { Formik } from "formik";
import { SignInSchema } from "../../validations/SignIn";

const SignIn = (props) => {
  const { logIn } = useContext(AuthContext);
  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            const userData = {
              id: (100 * Math.random()).toFixed(0),
              fullName: values.email,
              avatarUrl: "https://placeimg.com/140/140/people",
              //
              timeStamp: "12:47 PM",
              recentText: "I will call today.",
            };
            logIn({
              user: userData,
              userToken: (100 * Math.random()).toFixed(0),
              userType: "Admin",
            });
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <VStack space={3} mt="5">
              <FormControl isInvalid={errors.email && touched.email} isRequired>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input
                  borderColor="#555"
                  size="xl"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.password && touched.password}
                isRequired
              >
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  borderColor="#555"
                  size="xl"
                  type="password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Link>
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={handleSubmit}
                isLoading={isSubmitting}
              >
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  I'm a new user.{" "}
                </Text>
                <Link
                  _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                  onPress={() => props.navigation.navigate("SignUp")}
                >
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          )}
        </Formik>
      </Box>
    </Center>
  );
};

export default SignIn;
