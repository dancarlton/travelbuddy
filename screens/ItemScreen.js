import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if (!data) {
    // Handle case when data is missing or undefined
    return (
      <View>
        <Text>No data available</Text>
      </View>
    );
  }

  console.log(data);
  return (
    <View>
      <Text>ItemScreen</Text>
    </View>
  );
};

export default ItemScreen;
