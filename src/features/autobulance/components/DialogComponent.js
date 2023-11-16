import Dialog from "react-native-dialog";
import { Platform, StyleSheet, View, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DialogComponent = ({
  visible,
  title,
  description,
  content,
  onClose,
  onCancel,
}) => {
  return (
    <Dialog.Container
      contentStyle={styles.contentStyle}
      footerStyle={styles.footerStyle}
      visible={visible}
    >
      <Dialog.Title
        style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
      >
        {title}
      </Dialog.Title>

      <View
        style={{
          alignItems: "flex-start",
          width: "100%",
          marginVertical: 5,
          marginHorizontal: 5,
        }}
      >
        {content}
      </View>

      <Dialog.Button
        style={[styles.cancelButtonStyle]}
        label="Cancel"
        onPress={onCancel}
      />
      <Dialog.Button
        style={styles.confirmButtonStyle}
        label="Save"
        onPress={onClose}
      />
    </Dialog.Container>
  );
};
const styles = StyleSheet.create({
  contentStyle: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footerStyle: {
    margin: 15,
    marginHorizontal: 20,
    justifyContent: "flex-end",
  },
  confirmButtonStyle: {
    color: "white",
    fontWeight: "bold",
    width: windowWidth * 0.3,
    fontSize: 18,
    backgroundColor: "#22A699",
    margin: 1,
    padding: 10,
    borderRadius: 6,
  },
  cancelButtonStyle: {
    color: "#22A699",
    fontWeight: "bold",
    width: windowWidth * 0.3,
    fontSize: 18,
    borderColor: "#22A699",
    borderWidth: 2,
    margin: 1,
    padding: 9,
    borderRadius: 6,
  },
});
export default DialogComponent;
