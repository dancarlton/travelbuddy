import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Enjoy the Trip with</Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3c6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Circle Section */}

      <View className="h-[400px] w-[400px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="h-[400px] w-[400px] bg-[#e99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image Container */}

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing={"ease-in-out"}
            iterationCount={"infin"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
