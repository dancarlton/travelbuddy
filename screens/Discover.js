import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  type,
  setType,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, Party, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { PartyIcon } from "../assets/app-icons/party.png";

// Use the PartyIcon as an image source or wherever it's needed in your code

const Discover = () => {
  const navigation = useNavigation();

  const [first, setfirst] = useState("restaurants");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* First Section */}

      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the Beauty Today</Text>
        </View>

        {/* Corner Icon */}

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      {/* Search Bar */}

      <View className="flex-row items-center bg-white max-4 rounded-xl py-1 pl-1 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyD-wGWMsCmv1i8bQtCEQEyj9KOltvhvF-k",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}

      <ScrollView>
        <View className="flex-row items-center justify-center px-8 mt-8">
          <MenuContainer
            key={"hotel"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"partyicon"}
            title="PartyIcon"
            imageSrc={PartyIcon}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
