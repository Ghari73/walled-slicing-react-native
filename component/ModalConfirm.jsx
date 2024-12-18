import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "../context/authContext";

export default function ModalConfirm({ modalVisible, setModalVisible, navigation }) {const {login: setLoginState} = useAuth();
const [errorFetch, setErrorFetch] = useState(null);
const {logout: setLogoutState} = useAuth()
const [loading, setLoading] = useState('')

  const logout = async () => {
      setLoading(true)
      try{
        setLogoutState()
        console.log('poppasdopsaod')

        Alert.alert('Success')
        navigation.navigate('Login2')
      } catch (error){
        setErrorFetch(error)
        Alert.alert(errorFetch.toString())
      }    
  }
  const handleLogout = () => {
    // Logika logout dapat ditambahkan di sini
    logout()
    console.log("User logged out!");
    
    setModalVisible(false); // Tutup modal setelah logout
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)} // Menutup modal jika user menekan tombol "back" di Android
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Konfirmasi Logout</Text>
          <Text style={styles.modalMessage}>
            Apakah Anda yakin ingin keluar?
          </Text>

          <View style={styles.buttonContainer}>
            {/* Tombol Cancel */}
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            {/* Tombol Yes */}
            <TouchableOpacity
              style={[styles.button, styles.yesButton]}
              onPress={handleLogout}
            >
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay transparan
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#E0E0E0",
  },
  yesButton: {
    backgroundColor: "#FF5757",
  },
  cancelText: {
    color: "#333",
    fontWeight: "bold",
  },
  yesText: {
    color: "white",
    fontWeight: "bold",
  },
});
