import React, { useMemo } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { homeCardstyles } from './HomeScreenCss/bodyCss';

const Homecard = React.memo(() => {
    const images = useMemo(() => [
        require('../../assets/images/homeImages/1.png'),
        require('../../assets/images/homeImages/2.png'),
        require('../../assets/images/homeImages/3.png'),
    ], []);

    return (
        <View style={homeCardstyles.container}>
            {images.map((image, index) => (
                <TouchableOpacity key={index} style={homeCardstyles.card}>
                    <Image source={image} style={homeCardstyles.cardImage} />
                </TouchableOpacity>
            ))}
        </View>
    );
});


export default Homecard;
