import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import logo from "../assets/SN.png";
import { useNavigation } from '@react-navigation/native';

const WhatWeDo = () => {
    const [showConsulting, setShowConsulting] = useState(false);
    const [showEngineering, setShowEngineering] = useState(false);
    const [showOperations, setShowOperations] = useState(false);
    const [showOptimization, setShowOptimization] = useState(false);
    const [showInfrastructure, setShowInfrastructure] = useState(false);
    const [showDataOps, setShowDataOps] = useState(false);
    const [showDevOps, setShowDevOps] = useState(false);

    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('MainScreen');
    };

    const handleDropdownSelect = (index, value) => {
        if (value === 'Leadership Page') {
            navigation.navigate('LeadershipPage');
        }

        if (value === 'What we do') {
            navigation.navigate('WhatWeDo');
        }
    };

    const toggleShowConsulting = () => {
        setShowConsulting(!showConsulting);
    };

    const toggleShowEngineering = () => {
        setShowEngineering(!showEngineering);
    };

    const toggleShowOperations = () => {
        setShowOperations(!showOperations);
    };

    const toggleShowOptimization = () => {
        setShowOptimization(!showOptimization);
    };

    const toggleShowInfrastructure = () => {
        setShowInfrastructure(!showInfrastructure);
    };

    const toggleShowDataOps = () => {
        setShowDataOps(!showDataOps);
    };

    const toggleShowDevOps = () => {
        setShowDevOps(!showDevOps);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleLogoPress} style={styles.imgPlace}>
                <Image source={logo} style={styles.logo} />
            </Pressable>
            <View style={styles.dropdownContainer}>
                <ModalDropdown
                    options={['Leadership Page', 'What we do', 'Social media', 'Industries']}
                    defaultValue="Menu"
                    textStyle={{ fontSize: 16 }}
                    dropdownTextStyle={{ fontSize: 20, backgroundColor: '#b3a900', color: 'black', fontWeight: 'bold' }}
                    onSelect={handleDropdownSelect}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <SectionHeading title="CONSULTING" showMore={showConsulting} onPress={toggleShowConsulting} />
                {showConsulting && (
                    <Text style={styles.additionalText}>
                        We deliver output, not just reports. You get hands-on experts well versed in their areas of expertise
                        and motivated to build your future leveraging cloud technologies.
                    </Text>
                )}

                <SectionHeading title="ENGINEERING" showMore={showEngineering} onPress={toggleShowEngineering} />
                {showEngineering && (
                    <Text style={styles.additionalText}>
                        We champion software craftsmanship and build robust software that scales in the cloud. Not all software developers are good in cloud. But for us, all our cloud consultants must first be good software developers!
                    </Text>
                )}

                <SectionHeading title="OPERATIONS" showMore={showOperations} onPress={toggleShowOperations} />
                {showOperations && (
                    <Text style={styles.additionalText}>
                        We implement such enterprise software development practices that help us to scale and run an eco-system of high performance from wherever we work.
                    </Text>
                )}

                <SectionHeading title="Optimization" showMore={showOptimization} onPress={toggleShowOptimization} />
                {showOptimization && (
                    <Text style={styles.additionalText}>
                        Culture of embedding security and process optimizations that are powered by statistical data & analytics. We put such machine learning models put to production that drive your business. And we optimize your cloud utilisation for cost and performance.
                    </Text>
                )}

                <SectionHeading title="Infrastructure" showMore={showInfrastructure} onPress={toggleShowInfrastructure} />
                {showInfrastructure && (
                    <Text style={styles.additionalText}>
                        On-premise Vs Hybrid Vs Cloud Native ? We research and study your business needs, technology services roadmap, commercials, performance SLAs and vendor dependency index to then recommend the cloud infrastructure that best suits your needs
                    </Text>
                )}

                <SectionHeading title="DataOps" showMore={showDataOps} onPress={toggleShowDataOps} />
                {showDataOps && (
                    <Text style={styles.additionalText}>
                        Should you choose DBaaS (Database as a Service)? Do you need an AI and Machine learning workbench or a data warehouse? We analyse the volume, veracity and velocity of your data and then recommend the best fit data architecture and topology for your needs
                    </Text>
                )}

                <SectionHeading title="DevOps & AIOps" showMore={showDevOps} onPress={toggleShowDevOps} />
                {showDevOps && (
                    <Text style={styles.additionalText}>
                        How to transform and enable push button deployments? Implementing self healing and other AIOps capabilities? We guide you on leading DevOps & observability patterns and calculate their impact on your business to decide relevant adoption
                    </Text>
                )}
            </ScrollView>
        </View>
    );
};

const SectionHeading = ({ title, showMore, onPress }) => {
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{title}</Text>
                <Pressable onPress={onPress}>
                    <Text style={styles.plusMinus}>{showMore ? '-' : '+'}</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a68350',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgPlace: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
    logo: {
        width: 300,
        height: 80,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 9,
    },
    card: {
        flex:2,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        height:80,
        margin: 16,
        padding:15,

        alignItems: 'center',
        justifyContent:'center'
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    plusMinus: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 10,
        marginRight: 10,
    },
    additionalText: {
        fontSize: 20,
        lineHeight: 24,
        padding:15
    },
    scrollViewContent: {
        paddingTop: 100, // Adjust according to your design to ensure the content starts below the logo image
    },
});

export default WhatWeDo;
