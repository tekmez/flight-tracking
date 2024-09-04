import { Modal as RNModal, View, Platform } from "react-native";
import { BlurView } from "expo-blur";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <RNModal
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade"
    >
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
    </RNModal>
  );
};

export default Modal;
