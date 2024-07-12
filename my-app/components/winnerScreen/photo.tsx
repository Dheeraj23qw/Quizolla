import React, { useMemo } from 'react';
import { View, Image, Text } from 'react-native';
import { useUser } from '@clerk/clerk-react';
import { winnerstyles } from './winnerScreenCSS';
import { congratulationMessages, condolenceMessages } from '@/constants/message';

interface PhotoProps {
  isWinner: boolean;
}

const Photo: React.FC<PhotoProps> = ({ isWinner }) => {
  const { user } = useUser();

  const getRandomMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * (isWinner ? congratulationMessages.length : condolenceMessages.length));
    const userName = user?.fullName || 'Winner'; 
    const messages = isWinner ? congratulationMessages : condolenceMessages;
    return messages[randomIndex].replace('{name}', userName);
  }, [isWinner, user?.fullName]);

  return (
    <View style={winnerstyles.photoContainer}>
      <View style={winnerstyles.photoCard}>
        <View style={winnerstyles.overlay}>
          <Image 
            source={{ uri: user?.imageUrl }}
            style={winnerstyles.circularImage}
          />
        </View>
      </View>
      <Text style={winnerstyles.congratulationMessage}>{getRandomMessage}</Text>
    </View>
  );
}

export default Photo;
