import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";

import { theme } from "../../../infrustructure/theme";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "No Name (Dokan gayeb!)",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
    ],
    address = "99, random, street, of the Country",
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = false,
  } = restaurant;

  const RatingArray = Array.from(new Array(Math.floor(rating)));
  const NonRatingArray = Array.from(new Array(Math.floor(6 - rating)));

  return (
    <View style={styles.cardContainer}>
      <Card elevation={5}>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Title style={styles.TitleStyle}>{name}</Title>
          <View style={styles.ratingContainer}>
            {RatingArray.map(() => (
              <Icon
                name="star"
                color={theme.colors.ui.tertiary}
                key={Math.random(1)}
                size={22}
              />
            ))}
            {NonRatingArray.map(() => (
              <Icon
                name="staro"
                key={Math.random(1)}
                color={theme.colors.ui.secondary}
                size={22}
              />
            ))}

            <View style={styles.closedStyles}>
              {isOpenNow && (
                <Image
                  style={styles.imageStyle}
                  source={require("../../../../assets/open.png")}
                />
              )}
              {isClosedTemporarily && !isOpenNow && (
                <Image
                  style={styles.tempImageStyle}
                  source={require("../../../../assets/tempTime.png")}
                />
              )}
              {!isOpenNow && (
                <Image
                  style={styles.imageStyle}
                  source={require("../../../../assets/closed.png")}
                />
              )}
            </View>
          </View>
          <Paragraph style={styles.addressStyle}>{address}</Paragraph>
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
    alignItems: "center",
  },
  ratingStyle: {
    paddingRight: theme.sizes.one,
    fontFamily: theme.fonts.heading,
  },
  addressStyle: {
    color: theme.colors.ui.secondary,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  tempImageStyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  closedStyles: {
    flexDirection: "row",
    marginLeft: "35%",
    alignItems: "center",
  },
});
