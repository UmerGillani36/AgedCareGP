import { Stack } from "expo-router";
import Header from "../../components/Header/Header";

export default function Layout() {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen
        name="home"
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="complete"
        options={{
          header: () => <Header />,
        }}
      />
    </Stack>
  );
}
