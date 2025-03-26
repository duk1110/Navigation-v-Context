import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchBar}>
        <Ionicons name="location-outline" size={20} color="gray" />
        <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
        <Ionicons name="search-outline" size={20} color="gray" />
      </View>

      <ScrollView>
        {/* Danh mục */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.z3HT7WijhW1DpO18PNF-gQHaE8?rs=1&pid=ImgDetMain' }} style={styles.categoryImage} />
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.sZpWiZ6VPj05M8rHVaqcBgHaJQ?rs=1&pid=ImgDetMain' }} style={styles.categoryImage} />
          <Image source={{ uri: 'https://i.pinimg.com/736x/0e/e8/63/0ee8631c58562b6e29feabcb63731f27.jpg' }} style={styles.categoryImage} />
        </ScrollView>

        {/* Popular Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.items}>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://th.bing.com/th/id/OIP.MjXQ8F5-vQZWZNNcZvitYwHaFj?rs=1&pid=ImgDetMain' }} style={styles.itemImage} />
            <Text>Food 1</Text>
            <Text>$10</Text>
          </View>
          <View style={styles.itemCard}>
            <Image source={{ uri: 'https://th.bing.com/th/id/OIP.WK5Unl0PhyP5XI5rasR7cQHaE8?rs=1&pid=ImgDetMain' }} style={styles.itemImage} />
            <Text>Food 2</Text>
            <Text>$15</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: { flex: 1, marginHorizontal: 10 },
  section: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  filterText: { color: 'orange' },
  viewAllText: { color: 'orange' },
  categories: { flexDirection: 'row' },
  categoryImage: { width: 100, height: 80, borderRadius: 10, marginRight: 10 },
  items: { flexDirection: 'row' },
  itemCard: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginRight: 10 },
  itemImage: { width: 150, height: 100, borderRadius: 10 },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Ionicons name="compass-outline" size={24} color="black" /> }} />
      <Tab.Screen name="Account" component={ProfileScreen} options={{ tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" /> }} />
    </Tab.Navigator>
  );
}