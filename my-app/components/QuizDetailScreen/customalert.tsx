import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { customAlertCSS } from './QuizDetailScreenCSS/customalert';

interface CustomAlertProps {
  isVisible: boolean;
  title: string;
  messages: string[];
  onConfirm: () => void;
  onCancel: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  isVisible,
  title,
  messages,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onCancel}>
      <View style={customAlertCSS.modalContainer}>
        <Text style={customAlertCSS.title}>{title}</Text>
        {messages.map((message, index) => (
          <Text key={index} style={customAlertCSS.message}>
            {message}
          </Text>
        ))}
        <View style={customAlertCSS.buttonContainer}>
          <TouchableOpacity style={customAlertCSS.button} onPress={onConfirm}>
            <Text style={customAlertCSS.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={customAlertCSS.button} onPress={onCancel}>
            <Text style={customAlertCSS.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};



export default CustomAlert;
