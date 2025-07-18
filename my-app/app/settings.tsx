import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
    const router = useRouter();

    const [soundEnabled, setSoundEnabled] = useState(true);
    const [colorBlindMode, setColorBlindMode] = useState(false);
    const [volume, setVolume] = useState(0.5);

    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>

            <View style={styles.settingRow}>
                <Text style={styles.label}>Language</Text>
            </View>

            <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={styles.settingRow}>
                    <Text style={styles.label}>Enable Sound</Text>
                    <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
                </View>

                <View style={styles.settingRow}>
                    <Text style={styles.label}>Volume</Text>
                    <Slider
                        style={styles.slider}
                        value={volume}
                        onValueChange={setVolume}
                        minimumValue={0}
                        maximumValue={1}
                        step={0.01}
                        minimumTrackTintColor="#fca311"
                        maximumTrackTintColor="#888"
                        thumbTintColor="#fca311"
                    />
                </View>

                <View style={styles.settingRow}>
                    <Text style={styles.label}>Color Blind Mode</Text>
                    <Switch value={colorBlindMode} onValueChange={setColorBlindMode} />
                </View>

                <View style={styles.settingRow}>
                    <Text style={styles.label}>Theme</Text>
                </View>

                <View style={styles.rulesBox}>
                    <Text style={styles.rulesTitle}>📜 Game Rules</Text>
                    <Text style={styles.rulesText}>
                        • Take turns dropping a token into one of 7 columns.{"\n"}
                        • First to connect 4 tokens in a row (vertically, horizontally, or diagonally) wins.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b1a2b",
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: 0,
        padding: 10,
    },
    backButtonText: {
        color: "white",
        fontSize: 28,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
    },
    scroll: {
        width: "100%",
    },
    settingRow: {
        backgroundColor: "#2c2f45",
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label: {
        color: "white",
        fontSize: 16,
    },
    slider: {
        width: 150,
        height: 40,
    },
    rulesBox: {
        backgroundColor: "#2c2f45",
        borderRadius: 12,
        padding: 20,
        marginTop: 10,
    },
    rulesTitle: {
        color: "#fca311",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    rulesText: {
        color: "white",
        fontSize: 14,
        lineHeight: 20,
    },
});
