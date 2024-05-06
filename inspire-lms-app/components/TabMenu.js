import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const TabMenu = ({ tabs, selectedTab, onSelect }) => {
    return (
        <View style={styles.tabMenu}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.tab, selectedTab === index && styles.selectedTab]}
                    onPress={() => onSelect(index)}
                >
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingBottom: 10,
        top: '87%'
    },
    tab: {
        paddingVertical: 10,
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#8F6ED5',
    },
    tabText: {
        color: 'black',
        fontWeight: 'bold',
    }
});
export default TabMenu;