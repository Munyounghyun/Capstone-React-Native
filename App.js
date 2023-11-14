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
import { Ionicons } from "@expo/vector-icons";
import CardList from "./screens/CardList";
import CardRegist from "./screens/CardRegist";
import UserContextProvider from "./store/user-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="홈"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
        },
      }}
    >
      <BottomTabs.Screen
        name="이용내역"
        component={ExpenseList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="홈"
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="사용자 정보"
        component={UserInfo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <UserContextProvider>
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
              headerShown: false,
            }}
          >
            <Stack.Screen name="로그인" component={Login} />
            <Stack.Screen name="아이디 찾기" component={FindId} />
            <Stack.Screen name="비밀번호 변경" component={ChangePwd} />
            <Stack.Screen name="회원가입" component={Signup} />
            <Stack.Screen name="HiFive" component={BottomNav} />
            <Stack.Screen name="사용자 정보" component={UserInfo} />
            <Stack.Screen name="카드 리스트" component={CardList} />
            <Stack.Screen name="카드 등록" component={CardRegist} />
            <Stack.Screen name="이용내역" component={ExpenseList} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}
