import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App(){
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const transactions = [
        { id: '1', name: 'Adityo Gizwanda', type: 'Transfer', amount: -75000, date: '08 December 2024' },
        { id: '2', name: 'Adityo Gizwanda', type: 'Topup', amount: 75000, date: '08 December 2024' },
        { id: '3', name: 'Adityo Gizwanda', type: 'Transfer', amount: -75000, date: '08 December 2024' },
        { id: '4', name: 'Adityo Gizwanda', type: 'Transfer', amount: -75000, date: '08 December 2024' },
      ];

      const renderTransaction = ({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.transactionItem}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.circlePlaceholder} />
                <View>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
                </View>
            </View> 
            <Text style={[styles.transactionAmount, { color: item.amount > 0 ? 'green' : 'red' }]}>
              {item.amount > 0 ? `+ ${item.amount.toLocaleString()}` : `- ${Math.abs(item.amount).toLocaleString()}`}
            </Text>
          </View>
        </View>
      );

    return (
        <SafeAreaProvider>
             <View style={styles.header}>
              <View style={styles.profile}>
                <Image source={require('./assets/syahdi.png')} style={styles.profileImage} />
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontWeight: 'bold' }}>Syahdi</Text>
                  <Text>Personal Account</Text>
                </View>
                <View style={{ flex: 1 }} />
                <Image source={require('./assets/Vector.png')} style={{ width: 20, height: 20 }} />
              </View>
            </View>

            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={renderTransaction}
                ListHeaderComponent={
                <View style= {styles.container}>
                    <View style={styles.greeting}>
                    <View>
                        <Text style={styles.greetingText}>Good Morning</Text>
                        <Text style={styles.checkAllText}>Check all your incoming and outgoing transactions here</Text>
                    </View>
                    <Image source={require('./assets/Group.png')} />
                    </View>

                    <View style={styles.accountInfo}>
                    <Text style={styles.accountLabel}>Account No.</Text>
                    <Text style={styles.accountNumber}>100899</Text>
                    </View>

                    <View style={styles.balanceActionContainer}>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balanceLabel}>Balance</Text>
                        <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.balanceAmount}>
                            {isBalanceVisible ? 'Rp 10.000.000' : '*********'}
                        </Text>
                        <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
                            <Ionicons style={{margin: 5}}
                            name={isBalanceVisible ? 'eye-outline' : 'eye-off-outline'}
                            size={20}
                            color="#969696"
                            />
                        </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.button}>
                        <Ionicons name="add" size={24} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Ionicons name="paper-plane" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    </View>

                    <Text style={styles.transactionHistoryLabel}>Transaction History</Text>
                </View>
                }
            />
    </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafbfd',
        paddingHorizontal: 20,
        paddingBottom: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 30
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      greeting: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
      },
      greetingText: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      checkAllText:{
        paddingTop:15,
        width:200
      },
      accountInfo: {
        backgroundColor: '#19918F',
        padding: 15,
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      accountLabel: {
        color: 'white',
      },
      accountNumber: {
        fontWeight: 'bold',
        color: 'white'
      },
      balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      balanceLabel: {
        marginRight: 10,
        color: '#555',
      },
      balanceAmount: {
        fontWeight: '600',
        fontSize: 24,
      },
      actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      addButton: {
        backgroundColor: '#4CAF50',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      addButtonText: {
        color: '#FFF',
        fontSize: 24,
      },
      sendButton: {
        backgroundColor: '#008CBA',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      sendButtonText: {
        color: '#FFF',
        fontSize: 18,
      },

      balanceContainer: {
        marginVertical: 10,
      },

      balanceActionContainer:{
        marginVertical: 20,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
      actions: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#009688',
        width: 45,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
      },

      transactionHistory: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    transactionHistoryLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    circlePlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#dfe6e9',
        marginRight: 15
    },
    transactionDetails: {
        flex: 1,
    },
    transactionName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    transactionType: {
        fontSize: 12,
        color: 'gray',
    },
    transactionDate: {
        fontSize: 12,
        color: 'gray',
    },
    transactionAmount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    transfer: {
        color: 'red',
    },
    topup: {
        color: 'green',
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
  });