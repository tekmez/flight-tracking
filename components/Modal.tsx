import {
  Modal as RNModal,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { BlurView } from "expo-blur";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <RNModal visible={visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <BlurView
          intensity={Platform.OS === "ios" ? 20 : 10}
          className="flex-1"
          tint="dark"
          experimentalBlurMethod="dimezisBlurView"
        >
          <View className="flex-1 justify-center items-center p-4 bg-[#37415199] ">
            {children}
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export default Modal;
