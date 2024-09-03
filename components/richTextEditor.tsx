import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const RichTextEditor = ({ edittoRef, onChange }) => {
  return (
    <View className="min-h-[285px]">
      <RichToolbar
        editor={edittoRef}
        actions={[
          actions.insertImage,
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.keyboard,
          actions.setStrikethrough,
          actions.setUnderline,
          actions.removeFormat,
          actions.insertVideo,
          actions.checkboxList,
          actions.undo,
          actions.redo,
          actions.heading1,
          actions.heading4,
        ]}
        className="rounded-tl-lg rounded-tr-lg bg-gray-300"
        selectedIconTint="blue"
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H1</Text>
          ),
          [actions.heading4]: ({ tintColor }) => (
            <Text style={{ color: tintColor }}>H4</Text>
          ),
        }}
      />
      <RichEditor
        ref={edittoRef}
        placeholder="Enter your name"
        onChange={onChange}
        className="min-h-[240px] flex-1 border bg-white p-1 border-gray-200 border-t-0 rounded-bl-lg rounded-br-lg "
      />
    </View>
  );
};

export default RichTextEditor;

const styles = StyleSheet.create({});
