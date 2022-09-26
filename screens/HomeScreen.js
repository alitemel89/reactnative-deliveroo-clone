import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, SafeAreaView, View, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faSearch, faSliders, faUser } from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

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
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements from our partners"
                />

                <FeaturedRow
                    id="1234"
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts"
                />

                <FeaturedRow
                    id="123456"
                    title="Offers near you!"
                    description="Why not support your local restaurant tonight"
                />

            </ScrollView>


        </SafeAreaView>
    )
}

export default HomeScreen;