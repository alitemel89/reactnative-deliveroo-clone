import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { Text, SafeAreaView, View, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faSearch, faSliders, faUser } from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
            }
          }
        `).then((data) => {
            setFeaturedCategories(data)
        })

    }, []);

    
    return (
        <SafeAreaView className="bg-white pt-5 my-4">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: "https://links.papareact.com/wru"
                }}
                    className="h-7 w-7 bg-gray-200 rounded-full p-4"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <FontAwesomeIcon icon={faChevronDown} color="#00CCBB" size={20} />
                    </Text>
                </View>
                <FontAwesomeIcon icon={faUser} color="#00CCBB" size={25} />

            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <FontAwesomeIcon icon={faSearch} size={25} color="#ccc" />
                    <TextInput placeholder='Restaurants' keyboardType='default' />
                </View>
                <FontAwesomeIcon icon={faSliders} color="#00CCBB" size={25} />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}>
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>


        </SafeAreaView>
    )
}

export default HomeScreen;