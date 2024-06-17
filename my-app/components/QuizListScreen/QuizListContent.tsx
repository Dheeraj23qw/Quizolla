import { Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { QListstyles } from "./QuizListScreenCSS/QListContent";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { useRouter, Link } from "expo-router";

interface Quiz {
  name: string;
  price: number;
  time: string;
  quiz_maker_name: string;
  img: any;
  [key: string]: any; // Index signature
}

const quizes: Quiz[] = [
  {
    name: "General Knowledge Quiz",
    price: 9.99,
    time: "30 minutes",
    quiz_maker_name: "John Doe",
    img: require(`../../assets/images/10.png`),
  },
  {
    name: "History Trivia",
    price: 5.99,
    time: "20 minutes",
    quiz_maker_name: "Jane Smith",
    img: require(`../../assets/images/10.png`),
  },
  {
    name: "Science Quiz",
    price: 7.99,
    time: "25 minutes",
    quiz_maker_name: "David Johnson",
    img: require(`../../assets/images/10.png`),
  },
  {
    name: "Literature Quiz",
    price: 6.99,
    time: "25 minutes",
    quiz_maker_name: "Emily Brown",
    img: require(`../../assets/images/10.png`),
  },
  {
    name: "Mathematics Challenge",
    price: 12.99,
    time: "40 minutes",
    quiz_maker_name: "Michael Wilson",
    img: require(`../../assets/images/10.png`),
  },
  {
    name: "Literature Quiz",
    price: 6.99,
    time: "25 minutes",
    quiz_maker_name: "Emily Brown",
    img: require(`../../assets/images/10.png`),
  },
  {
    name: "Mathematics Challenge",
    price: 12.99,
    time: "40 minutes",
    quiz_maker_name: "Michael Wilson",
    img: require(`../../assets/images/10.png`),
  },
];

const QuizListContent = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: Quiz }) => (
    <View style={QListstyles.cardcontainer}>
      <TouchableOpacity>
        <Image source={item.img} style={{ height: responsiveHeight(8), width: responsiveHeight(8) }} />
      </TouchableOpacity>
      <View>
        <Text style={QListstyles.name}>{item.name}</Text>
        <Text style={QListstyles.quiz_maker_name}>
          by {item.quiz_maker_name}
        </Text>
        <View style={{ flexDirection: 'row', gap: responsiveWidth(8) }}>
          <View style={{ flexDirection: 'row', gap: responsiveWidth(2) }}>
            <FontAwesome6 name="coins" size={responsiveFontSize(1.5)} color="black" />
            <Text style={QListstyles.price}>${item.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: responsiveWidth(2) }}>
            <Feather name="clock" size={responsiveFontSize(1.5)} color="black" />
            <Text style={QListstyles.time}>{item.time}</Text>
          </View>
        </View>
      </View>
      <Link
        href={{
          pathname: '/quizdetail/[quiz]',
          params: item,
        }}
        asChild
      >
        <TouchableOpacity style={QListstyles.iconContainer}>
          <Entypo name="controller-play" size={responsiveHeight(3)} color="black" />
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <FlatList
      data={quizes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={QListstyles.QuizContentContainer}
    />
  );
};

export default QuizListContent;
