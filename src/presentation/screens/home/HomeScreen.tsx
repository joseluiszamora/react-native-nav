import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation, type NavigationProp} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';
import {Text} from 'react-native-reanimated/lib/typescript/Animated';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // navigation.setOptions({
  //   headerLeft: () => (
  //     <Pressable>
  //       <Text>Menu</Text>
  //     </Pressable>
  //   ),
  // });

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
