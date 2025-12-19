import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../Button';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type Props = {
  onClose: () => void;
  onConfirmSearch: (term: string) => void;
}

const SearchModal: React.FC<Props> = ({
  onClose, onConfirmSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <Modal
      animationType='fade'
      transparent
      visible
      onRequestClose={onClose}
    >
      <Pressable onPress={onClose} style={styles.modalBackground}>
        <Pressable style={styles.container}>
          <View style={styles.closeButton}>
            <TouchableOpacity onPress={onClose}>
              <MaterialDesignIcons name='close' size={24} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Search</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSearchTerm}
            value={searchTerm}
            placeholder='Enter search term...'
            placeholderTextColor='gray'
            keyboardType='default'
          />
          <Button
            text='Done'
            containerStyle={styles.button}
            onTap={() => {
              onConfirmSearch(searchTerm);
            }}
          />
        </Pressable>
      </Pressable >
    </Modal >
  );
};

export default SearchModal;
