const CameraBottomTabButton = ({ children, onPress }) => (
    <TouchableOpacity className="absolute -top-30 justify-center items-center shadow-lime-500 shadow-color-7F5DF0 shadow-offset-0-10 shadow-opacity-25 shadow-radius-3.5 elevation-5 transform-translate-y-10" onPress={onPress}>
        <View className="w-{70} h-{35} rounded-{35/2}">
            {children}
        </View>
    </TouchableOpacity>
);