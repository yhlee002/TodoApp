/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';

import {
    Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import * as url from 'url';

import AddNewTodoItem from './components/AddNewTodoItem';
import TodoCardList from './components/TodoCardList';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const AppTitle: () => Node = () => {
    const title = 'My TodoList';
    const titleStyle = {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
    };
    return (
        <>
            <Text style={titleStyle}>{title}</Text>
        </>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <AppTitle/>
                    <AddNewTodoItem></AddNewTodoItem>
                    <TodoCardList></TodoCardList>
                </View>
            </ScrollView>
            <View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#484848',
                    backgroundColor: 'transparent',
                }}>설정</Text>
            </View>
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});

export default App;
