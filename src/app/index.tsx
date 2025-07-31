import { View, StatusBar } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { Button } from "@/components/Button";
import { router } from "expo-router";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6,184,90" },
  output: { label: "Saídas", value: "-R$ 883,65" },
};

const targets = [
  {
    id: "1",
    name: "Apple watch",
    current: "R$ 580,00",
    percentage: "50%",
    target: "R$ 1.790,00",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergonômica",
    current: "R$ 900,00",
    percentage: "75%",
    target: "R$ 1.200,00",
  },
  {
    id: "3",
    name: "Fazer uma viagem para o Rio de Janeiro",
    current: "R$ 1200,00",
    percentage: "75%",
    target: "R$ 3.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
