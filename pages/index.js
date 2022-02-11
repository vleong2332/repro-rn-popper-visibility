import { useState } from "react";
import { StyleSheet, Text, View, Modal, Button, Pressable } from 'react-native';
import { Popover } from 'react-native-popper'

export default function App(props) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.text}>
          React Native for Web & Next.js
        </Text>

        <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
          A universal link
        </Text>

        <View style={styles.textContainer}>
          <Text accessibilityRole="header" aria-level="2" style={styles.text}>
            Subheader
          </Text>
        </View>

        <Button onPress={() => setVisible(true)} title="Show Modal" />
      </View>

      <Modal transparent={true} visible={visible}>
        <View style={{ flex: "1 1 auto", backgroundColor: "white" }}>
          <Text>This is a modal</Text>
          <Popover
            trigger={
              <Pressable>
                <Text>Press me</Text>
              </Pressable>
            }
          >
            <Popover.Backdrop />
            <Popover.Content>
              <Popover.Arrow />
              <Text>Hello World</Text>
            </Popover.Content>
          </Popover>
          <Button title="Close Modal" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})
