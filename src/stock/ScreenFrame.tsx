import React, {PropsWithChildren} from "react";
import {StatusBar} from "react-native";

interface Props {
  barStyle?: "default" | "dark-content" | "light-content";
}

export default function ScreenFrame<T>(props: PropsWithChildren<Props & T>) {
  return (
    <>
      <StatusBar barStyle={props.barStyle || "default"} />
      {props.children}
    </>
  );
}
