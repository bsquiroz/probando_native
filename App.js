import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    Button,
} from "react-native";

const initialState = {
    name: "",
    age: "",
    user: "",
};

export default function App() {
    const [inputsValues, setInputsValues] = useState(initialState);
    const { name, age, user } = inputsValues;

    const handleInputs = (name, value) => {
        setInputsValues({ ...inputsValues, [name]: value });
    };

    const handleSubmit = () => {
        if (name.trim() === "" || age.trim() === "" || user.trim() === "") {
            return alert("Todos los campos son necesarios");
        }
        alert("Todo se envio correctamente");
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese nombre"
                        onChangeText={(text) => handleInputs("name", text)}
                        value={name}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese edad"
                        onChangeText={(text) => handleInputs("age", text)}
                        value={age}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese usuario"
                        onChangeText={(text) => handleInputs("user", text)}
                        value={user}
                    />
                    <View style={styles.box_img}>
                        <Image
                            source={{
                                uri: "https://i.picsum.photos/id/37/200/200.jpg?hmac=iQLD6vXJYds0UdYxW9UhbkVxORZeEckKL-FVeaMfwF0",
                            }}
                            style={styles.img}
                        />
                    </View>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Text style={styles.name}>Brayan stiven muñoz</Text>
                    <Button onPress={handleSubmit} title="Press Me" />

                    <View style={styles.card}>
                        <View style={styles.cardtitle}>
                            <View style={styles.title1}>
                                <Text>titulo 1</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text>titulo 2</Text>
                            </View>
                        </View>
                        <View style={styles.cardContent1}></View>
                        <View style={styles.cardContent2}></View>
                    </View>

                    <StatusBar style="auto" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardtitle: {
        flex: 1,
        backgroundColor: "#1E3163",
        flexDirection: "row",
    },
    title1: {
        backgroundColor: "#C2F784",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title2: {
        backgroundColor: "#F2BB7B",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cardContent1: {
        flex: 2,
        backgroundColor: "#420516",
    },
    cardContent2: {
        flex: 2,
        backgroundColor: "#E63E6D",
    },
    card: {
        flex: 1,
        backgroundColor: "#6F69AC",
        height: 500,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    content: {
        backgroundColor: "red",
        width: "90%",
    },
    name: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 40,
    },
    input: {
        backgroundColor: "pink",
        height: 40,
        width: "100%",
        marginBottom: 5,
        paddingLeft: 10,
    },
    box_img: {
        backgroundColor: "purple",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});
