import React, { useMemo } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { globalstyles } from '@/styles/global';
import { cardstyles } from '@/styles/card';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Homecard = React.memo(() => {
    const images = useMemo(() => [
        require('../../assets/images/homeImages/1.png'),
        require('../../assets/images/homeImages/2.png'),
        require('../../assets/images/homeImages/3.png'),
    ], []);

    return (
        <View style={[globalstyles.Container3, { justifyContent: 'space-between' }]}>
            {images.map((image, index) => (
                <TouchableOpacity key={index} style={[cardstyles.Card, { height: responsiveHeight(20), width: responsiveWidth(30) }]}>
                    <Image source={image} style={cardstyles.cardImage} />
                </TouchableOpacity>
            ))}
        </View>
    );
});

export default Homecard;
