import { StyleSheet, Text, Pressable, Dimensions, Image, View } from "react-native";
import { Themes } from "../assets/Themes";
import { Images } from "../assets/Themes";

// get screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SpotifyAuthButton = ({ authenticationFunction }) => {
    return (
      <Pressable style={styles.authButton} onPress={authenticationFunction}>
        <View style={styles.ButtonBox}>
          <Image source={Images.spotify} style={styles.icon}/>
          <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 8,
    borderRadius: "100%",
    width: windowWidth * 0.56
  },
  authText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold"
  },
  icon: {
    height: windowWidth * 0.06,
    width: windowWidth * 0.06,
  },
  ButtonBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  }
});

export default SpotifyAuthButton;