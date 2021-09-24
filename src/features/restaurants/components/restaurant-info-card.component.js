import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import styled from "styled-components";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "No Name(Dokan gayeb!)",
    icon,
    photo = [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
    ],
    address = "99, random, street, of the Country",
    isOpenNow = false,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <View style={styles.cardContainer}>
      <Card elevation={5}>
        <Card.Cover key={name} source={{ uri: photo[0] }} />
        <Card.Content>
          <Title>{name}</Title>
          <Text>Rating: {rating}/5 </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 11,
  },
});
