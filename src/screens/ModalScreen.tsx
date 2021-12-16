import React, {useState} from 'react';
import {Button, Modal, StyleSheet, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Abrir Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View style={modal.modalContainer}>
          <View style={modal.modalContent}>
            <HeaderTitle title="Modal" />
            <Button title="Fechar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  modalContent: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
    borderRadius: 5,
  },
});
