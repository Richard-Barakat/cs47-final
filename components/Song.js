import { StyleSheet, Text, View, Dimensions, Image, Pressable } from "react-native" 
import { Themes } from "../assets/Themes";
import { Ionicons } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Song({ item, navigation }) {
    return (
        <View style ={styles.Container}>
            <Pressable onPress={() => navigation.navigate('PreviewScreen', {url: item.previewUrl})}>
                <Ionicons style={styles.PlayBox} name="play-circle" size={21} color={Themes.colors.spotify} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('DetailsScreen', {url: item.externalUrl})}>
                <View style={styles.SongBox}>
                    <Image style={styles.AlbumImage} source={{uri: item.imageUrl}} />
                    <View style={styles.SongTitleArtistBox}>
                        <Text numberOfLines={1} style={styles.SongTitle}>{item.songTitle}</Text>
                        <Text numberOfLines={1} style={styles.SongArtist}>{item.songArtists[0].name}</Text>
                    </View>
                    <View style={styles.AlbumNameBox}><Text numberOfLines={1} style={styles.SongAlbum}>{item.albumName}</Text></View>
                    <View style={styles.DurationBox}><Text style={styles.SongDuration}>{convertMillisToTime(item.duration)}</Text></View>
                </View>
            </Pressable>
        </View>
    );
};

const convertMillisToTime = (millis) => {
    let time = (millis/1000) / 60
    let minutes = Math.floor(time)
    let seconds = Math.round((time - minutes) * 60)
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        alignItems: "center"
    },
    SongBox: {
        flexDirection: "row",
        paddingTop: windowHeight * 0.0125,
        paddingBottom: windowHeight * 0.0125,
        width: windowWidth,
        paddingRight: windowWidth * 0.01
    },
    SongTitleArtistBox: {
        flexDirection: "column",
        justifyContent: "center",
        width: windowWidth * 0.35,
        paddingLeft: windowWidth * 0.02,
        paddingRight: windowWidth * 0.025
    },
    PlayBox: {
        paddingLeft: windowWidth * 0.02,
        paddingRight: windowWidth * 0.025
    },
    AlbumNameBox: {
        flexDirection: "column",
        justifyContent: "center",
        width: windowWidth * 0.29,
        paddingRight: windowWidth * 0.015
    },
    DurationBox: {
        flexDirection: "column",
        justifyContent: "center",
    },
    AlbumImage: {
        height: windowWidth * 0.15,
        width: windowWidth * 0.15,
        
    },
    SongTitle: {
        color: "white",
        fontWeight: "bold",
    },
    SongArtist: {
        color: "white",
    },
    SongAlbum: {
        color: "white",
    },
    SongDuration: {
        color: "white",
    }
  });
