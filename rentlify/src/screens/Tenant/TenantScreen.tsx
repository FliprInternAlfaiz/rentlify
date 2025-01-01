import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TenantScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to the Tenant Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: '600', color: '#333' },
});

export default TenantScreen;
