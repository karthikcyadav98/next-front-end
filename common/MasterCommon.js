import React, { Component } from "react";
import { Button } from "semantic-ui-react";

const ButtonCustom = props => (
  <div>
    <Button
      content={props.content}
      primary
      style={{ borderRadius: props.borderRadius }}
      onClick={props.onClick}
    />
  </div>
);

const P = props => (
  <p
    style={{
      color: props.color,
      fontSize: props.fontSize,
      textAlign: props.textAlign
    }}
  >
    {props.title}
    {console.log("aaya", props)}
  </p>
);

const CustomText = props => (
  <p
    style={{
      color: props.color,
      fontSize: props.fontSize,
      textAlign: props.textAlign,
      fontWeight: props.fontWeight,
      textTransform: props.textTransform,
      lineHeight: props.lineHeight,
      margin: props.margin
    }}
  >
    {props.title}
  </p>
);
const ColorText = props => (
  <p
    style={{
      color: props.colorMain,
      fontSize: props.fontSizeMain,
      textAlign: props.textAlignMain,
      fontWeight: props.fontWeightMain,
      textTransform: props.textTransformMain,
      lineHeight: props.lineHeightMain
    }}
  >
    {props.titleMain}
    <br />
    <b
      style={{
        color: props.colorMain2,
        fontSize: props.fontSizeMain2,
        textAlign: props.textAlignMain2,
        fontWeight: props.fontWeightMain2,
        textTransform: props.textTransformMain2,
        lineHeight: props.lineHeightMain2
      }}
    >
      {props.titleMain2}
    </b>
    <br />
    <b
      style={{
        color: props.colorMain3,
        fontSize: props.fontSizeMain3,
        textAlign: props.textAlignMain3,
        fontWeight: props.fontWeightMain3,
        textTransform: props.textTransformMain3,
        lineHeight: props.lineHeightMain3,
        fontFamily: props.fontFamilyMain3
      }}
    >
      {props.titleMain3}
    </b>
  </p>
);

const CustomDivider = props => <h1 style={{ marginTop: props.marginTop }}></h1>;

export { P, ButtonCustom, CustomText, ColorText, CustomDivider };
