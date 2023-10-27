import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Dialog from "react-native-dialog";

export const ForgetPasswordDialog = ({
  onCancel = () => {},
  onClose = () => {},
  title = "",
  description = "",
  children,
  visible = true,
}) => {
  return (
    <Dialog.Container
      visible={visible}
      contentStyle={styles.contentStyle}
      footerStyle={styles.footerStyle}
    >
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description} </Dialog.Description>
      {children}
      <Dialog.Button
        label="  Save "
        onPress={onClose}
        style={styles.buttonStyle}
      />
      <Dialog.Button
        label="Cancel"
        onPress={onCancel}
        style={styles.buttonStyle}
      />
    </Dialog.Container>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    borderRadius: 10,
  },
  footerStyle: {
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    fontSize: 15,
  },
});
