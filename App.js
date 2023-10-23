import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./screens/Main";
import ChangePwd from "./screens/ChangePwd";
import FindId from "./screens/FindId";
import UserInfo from "./screens/UserInfo";
import ExpenseList from "./screens/ExpenseList";
import CardRegist from "./screens/CardRegist";
import Logo from "./components/Logo";

//두 컴포넌트에 대한  액세스를 제공하는 객체
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="UserInfo"
        component={UserInfo}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="ExpenseList"
        component={ExpenseList}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="CardRegist"
        component={CardRegist}
        options={{ headerShown: false }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer
        theme={{
          colors: {
            background: "#f8f8f8",
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f8f8f8",
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="로그인"
            component={Login}
            options={{
              headerTitle: () => <Logo />,
            }}
          />
          <Stack.Screen name="회원가입" component={Signup} />
          <Stack.Screen name="아이디 찾기" component={FindId} />
          <Stack.Screen name="비밀번호 변경" component={ChangePwd} />
          <Stack.Screen
            name="HiFive"
            component={BottomNav}
            options={{
              headerTitle: () => <Logo name={HiFive} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
