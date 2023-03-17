import { FlatList, StyleSheet, Text, View, Dimensions, Image } from "react-native" 
import Song from "./Song";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SongList = ({ tracks, navigation }) => {
    return (
        <FlatList style={styles.List}
          data={tracks}
          renderItem={({ item }) => {
            return  <Song item={item} navigation={navigation}/>
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    List: {
        paddingTop: 0,
    }
  });

export default SongList