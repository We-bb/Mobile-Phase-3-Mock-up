import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function GameScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            <Text style={styles.title}>4Line Mobile</Text>

            <View style={styles.boardWrapper}>
                <View style={styles.board}>
                    {[...Array(6)].map((_, rowIdx) => (
                        <View key={rowIdx} style={styles.boardRow}>
                            {[...Array(7)].map((_, colIdx) => (
                                <View key={colIdx} style={styles.cell} />
                            ))}
                        </View>
                    ))}
                </View>

                <View style={styles.teamButtons}>
                    <TouchableOpacity style={[styles.teamButton, styles.orangeButton]}>
                        <Text style={styles.buttonText}>Orange Team</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.teamButton, styles.redButton]}>
                        <Text style={styles.buttonText}>Red Team</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const BOARD_WIDTH = 280;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b1a2b",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 20,
        padding: 10,
        zIndex: 10,
    },
    backButtonText: {
        color: "white",
        fontSize: 28,
    },
    title: {
        fontSize: 32,
        color: "white",
        fontWeight: "bold",
        marginBottom: 40,
    },
    boardWrapper: {
        width: BOARD_WIDTH,
        alignItems: "center",
    },
    board: {
        backgroundColor: "#2c2f45",
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    boardRow: {
        flexDirection: "row",
    },
    cell: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#0b1a2b",
        margin: 5,
    },
    teamButtons: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
    },
    teamButton: {
        flex: 1,
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    orangeButton: {
        backgroundColor: "#fca311",
    },
    redButton: {
        backgroundColor: "#d62828",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
