import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

export default function detalhesAnunciantes() {
    const router = useRouter();
    const { anunciante } = useLocalSearchParams();
    const anuncianteData = anunciante ? JSON.parse(anunciante) : null;

    return (
        <View style={styles.container}>
            {anuncianteData ? (
                <>
                    <Image
                        source={{ uri: anuncianteData.profilePicture }}
                        style={styles.profilePicture}
                    />
                    <Text style={styles.label}>
                        <Text style={styles.bold}>Nome: </Text>{anuncianteData.nomeFantasia}
                    </Text>
                    { <Text style={styles.label}>
                        <Text style={styles.bold}>Email: </Text>{anuncianteData.email}
                    </Text> }
                </>
            ) : (
                <Text>Erro ao carregar os dados do anunciante.</Text>
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => router.back()} style={styles.buttonVoltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 30,
    },
    label: {
        fontSize: 20,
        marginBottom: hp('3%'),
    },
    bold: {
        fontSize: hp('2.8%'),
        fontWeight: 'bold',
    },
    link: {
        color: '#25D366',
        width: wp('50%'), 
        fontSize: hp('2.2%'), 
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#EFC51B',
        alignSelf: 'center',
        marginBottom: hp('3%'),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    buttonText: {
        fontSize: hp(2.5),
        color: '#000000',
    },
    buttonVoltar: {
        width: '50%',
        backgroundColor: '#EFC51B',
        paddingVertical: hp('1.5%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
