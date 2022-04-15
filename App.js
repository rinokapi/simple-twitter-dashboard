import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { ScrollView } from "react-native-web";

const DATA = [
	{
		id: "1",
		profil:
			"https://pbs.twimg.com/profile_images/1393192150049824772/L18RwzBQ_400x400.jpg",
		user: "rikap",
		uname: "rikap2k",
		time: "20m",
		text: `HTML is one of the most fundamental skills to learn for web development. ${"\n\n"}But what does HTML do? Where did it come from? ${"\n\n"}In this tutorial, @DeniseLemonaki explains what HTML is, how	to create simple bolierplate, and some basic syntax to get you started.`,
		image:
			"https://pbs.twimg.com/card_img/1514270832184373249/H5iQOtpM?format=jpg&name=small",
	},
	{
		id: "2",
		profil:
			"https://pbs.twimg.com/profile_images/1377353524661604356/DIMdJND1_400x400.jpg",
		user: "Quincy Larson",
		uname: "ossia",
		time: "22h",
		text: `I'm proud to announce that freeCodeCamp is now one of the 1,000 most-used websites on Earth.

A learning website? Where people wrack their brains to get smarter? Popular? Yes.
		
Thanks to all you volunteers and donors who make this possible. This community is just getting started.`,
		image:
			"https://pbs.twimg.com/media/FN5dNbMWYAgTTSg?format=jpg&name=4096x4096",
	},
	{
		id: "3",
		profil:
			"https://pbs.twimg.com/profile_images/829865693185138688/D1y2Ciyn_400x400.jpg",
		user: "bank mandiri",
		uname: "bankmandiri",
		time: "1h",
		text: `Khusus untuk Sahabat pemegang Kartu Debit Mandiri Prioritas dan Mandiri Private, dapatkan promo Buy 1 Get 1 Free tiket nonton di The Premiere Cinema XXI.

Berlaku setiap hari Jumat dan Sabtu hingga 30 Juni 2022. Info selengkapnya, klik http://bmri.id/thepremierepp
		
#mandiripromo`,
		image:
			"https://pbs.twimg.com/media/FQYHVGKVsAM2nQf?format=jpg&name=900x900",
	},
	{
		id: "4",
		profil:
			"https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg",
		user: "GitHub",
		uname: "github",
		time: "Apr 14",
		text: `Join 
@blackgirlbytes
and 
@colbyfayock
for Open Source Friday as they explore:
		
✅ building Netlify Cloudinary Plugin
✅Using AI with Google Vision & 
@Cloudinary
		
✅Personalizing Social Media Cards with Next.js and 
@Cloudinary
		
		
RSVP: https://meetup.com/github/events/285229645/
		`,
		image: "https://pbs.twimg.com/media/FQQfz9xX0Aou10o?format=jpg&name=small",
	},
	{
		id: "5",
		profil:
			"https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg",
		user: "Node.js",
		uname: "nodejs",
		time: "Apr 20",
		text: `Node.js is pretty awesome, right?

If you are looking to increase your Node.js skills, take advantage of the 
@OpenJSF
spring savings promotion: 50% off all certifications, exams, and bundles, 1 week only, thru April 19`,
		image:
			"https://pbs.twimg.com/card_img/1513757715507539969/eRKfs8kM?format=png&name=360x360",
	},
	{
		id: "6",
		profil:
			"https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg",
		user: "TypeScript",
		uname: "tyoescript",
		time: "Jan 18",
		text: `Happy 25 years to @VisualStudio, the editor where we got our start! 🎂❤️ MyVSStory`,
		image:
			"https://pbs.twimg.com/card_img/1511829687093575680/EDAZnvXe?format=jpg&name=small",
	},
];

const Item = ({ item }) => (
	<View style={styles.tweet}>
		<Image style={styles.profil} source={{ uri: item.profil }} />
		<View style={styles.item}>
			<View style={styles.title}>
				<View style={{ flexDirection: "row" }}>
					<Text style={styles.user}>{item.user}</Text>
					<Image
						style={{ height: "15.31px", width: "15.31px", marginLeft: 2 }}
						source={{
							uri: "https://img.icons8.com/color/344/verified-badge.png",
						}}
					/>
					<Text style={styles.uname}>@{item.uname}</Text>
					<Text style={styles.dot}>.</Text>
					<Text style={styles.time}>{item.time}</Text>
				</View>
				<View>
					<TouchableOpacity>
						<Svg viewBox="0 0 24 24" height="17.5px" width="17.5px">
							<Circle cx="5" cy="12" r="2" fill="rgb(83, 100, 113)"></Circle>
							<Circle cx="12" cy="12" r="2" fill="rgb(83, 100, 113)"></Circle>
							<Circle cx="19" cy="12" r="2" fill="rgb(83, 100, 113)"></Circle>
						</Svg>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.article}>
				<Text>{item.text}</Text>
				<Image
					style={styles.image}
					source={{
						uri: item.image,
					}}
				/>
				<View style={styles.button}>
					<TouchableOpacity>
						<Image
							style={{ height: "17.5px", width: "17.5px" }}
							source={{
								uri: "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-comment-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png",
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							style={{ height: "17.5px", width: "17.5px" }}
							source={{
								uri: "https://img.icons8.com/material-outlined/344/retweet.png",
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							style={{ height: "17.5px", width: "17.5px" }}
							source={{
								uri: "https://img.icons8.com/material-outlined/344/filled-like.png",
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							style={{ height: "17.5px", width: "17.5px" }}
							source={{
								uri: "https://img.icons8.com/material-outlined/344/share.png",
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	</View>
);

const App = () => {
	const renderItem = ({ item }) => <Item item={item} />;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight || 0,
	},
	tweet: {
		flexDirection: "row",
		paddingTop: 11,
		borderBottomWidth: 1,
		borderBottomColor: "rgb(239, 243, 244)",
		paddingLeft: 15,
		paddingRight: 15,
	},
	profil: {
		borderRadius: 50,
		width: 46,
		height: 46,
		marginRight: 11,
	},
	item: {
		fontSize: 14,
		paddingBottom: 11,
		flex: 1,
		lineHeight: 19,
	},
	title: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 4,
		flex: 1,
	},
	user: {
		fontWeight: "700",
	},
	uname: {
		color: "rgb(83, 100, 113)",
		marginLeft: 4,
	},
	dot: {
		color: "rgb(83, 100, 113)",
		marginLeft: 4,
		marginRight: 4,
	},
	time: {
		color: "rgb(83, 100, 113)",
	},
	image: {
		height: "156.531px",
		width: "299px",
		marginTop: 15,
		borderRadius: 16,
		borderColor: "rgb(207, 217, 222)",
		borderWidth: 1,
	},
	button: {
		flexDirection: "row",
		marginTop: 12,
		justifyContent: "space-between",
	},
});

export default App;
