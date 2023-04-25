import * as Location from 'expo-location';

export const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  return { latitude, longitude };
};