import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { theme } from "../../../infrustructure/theme";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "No Name (Dokan gayeb!)",
    icon,
    photo = [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
    ],
    address = "99, random, street, of the Country",
    isOpenNow = false,
    rating = 3.2,
    isClosedTemporarily = true,
  } = restaurant;

  const RatingArray = Array.from(new Array(Math.floor(rating)));
  const NonRatingArray = Array.from(new Array(Math.floor(6 - rating)));

  return (
    <View style={styles.cardContainer}>
      <Card elevation={5}>
        <Card.Cover key={name} source={{ uri: photo[0] }} />
        <Card.Content>
          <Title style={styles.TitleStyle}>{name}</Title>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingStyle}>({rating})</Text>
            {RatingArray.map(() => (
              <Text key={Math.random(1)} style={styles.ratingStyle}>
                X
              </Text>
            ))}
            {NonRatingArray.map(() => (
              <Text key={Math.random(1)} style={styles.ratingStyle}>
                _
              </Text>
            ))}
          </View>
          <Paragraph>{address}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: theme.sizes.one,
  },
  TitleStyle: {
    fontFamily: theme.fonts.heading,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  ratingStyle: {
    paddingRight: theme.sizes.two,
    fontFamily: theme.fonts.heading,
  },
});
