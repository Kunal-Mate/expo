import { Stack } from "expo-router";

const StackLayout = () => {
    return(
        <Stack >
            <Stack.Screen name = "Login"/>
            <Stack.Screen name = "Register"/>
        </Stack>
    )
}