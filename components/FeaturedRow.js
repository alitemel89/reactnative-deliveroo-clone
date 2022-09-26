import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <FontAwesomeIcon icon={faArrowRight} size={25} color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pt-4"
            >
            {/* Restaurant Cards */}
            
            </ScrollView>
        </View>
    );
}


export default FeaturedRow;
