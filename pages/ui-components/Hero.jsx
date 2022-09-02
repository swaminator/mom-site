/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Hero(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="100px"
      width="1440px"
      alignItems="center"
      position="relative"
      padding="180px 100px 180px 100px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "Hero")}
    >
      <Flex
        gap="63px"
        direction="column"
        shrink="0"
        height="147px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fresh Prince"
          {...getOverrideProps(overrides, "Dr. Freda Swaminathan")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="35.15625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This is a story all about how my life got flipped turned upside down"
          {...getOverrideProps(
            overrides,
            "Advertising professional, Brand consultant and academician"
          )}
        ></Text>
      </Flex>
      <Image
        width="160px"
        height="160px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        src="https://media.vanityfair.com/photos/618a792eb1dd57b82a037dce/master/w_2560%2Cc_limit/GettyImages-141317655.jpg"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </Flex>
  );
}
