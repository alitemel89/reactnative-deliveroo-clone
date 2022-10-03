import { faLocation, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { urlFor } from '../sanity';


const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow-md">
            <Image source={{
                uri: urlFor(imgUrl).url(),
            }}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <FontAwesomeIcon icon={faStar} color="#16a34a" size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> {'\u2B24'} {genre}
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <FontAwesomeIcon icon={faLocation} size={22} color="#ccc" />
                    <Text className="text-xs text-gray-500">Nearby {'\u2B24'} {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


export default RestaurantCard;
