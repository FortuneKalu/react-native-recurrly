import { Link } from "expo-router";
import { Text, View } from "react-native";
import SignIn from "./sign-in";

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-in"> Already have an account? Sign In</Link>
    </View>
  );
};

export default SignUp;
