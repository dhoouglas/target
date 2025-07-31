import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/theme";
import { router } from "expo-router";

type Props = {
  title: string;
  subtitle?: string;
  rightButton?: {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
  };
};

export function PageHeader({ title, subtitle, rightButton, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>

        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            <MaterialIcons
              name={rightButton.icon}
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
