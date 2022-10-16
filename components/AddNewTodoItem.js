import React from 'react';
import type {Node} from 'react';
import {Image, Button, TextInput, TouchableOpacity, View} from 'react-native';

const AddNewTodoItem = () => {
    const addProc = function () {
        alert("!");
    }
    return (
        <>
            <View style={styles.newTodoItemContainerStyles}>
                <TextInput
                    style={styles.newTodoItem}
                    placeholder={'추가할 항목을 입력하세요. ✏️'}
                />
                <TouchableOpacity style={styles.addNewItemBtnStyles}>
                    <Button title={"추가"} onPress={addProc}></Button>
                </TouchableOpacity>
                {/*<Image*/}
                {/*    style={styles.addIconStyles}*/}
                {/*    source={require('./assets/images/speech-balloon-48.png')}></Image>*/}
            </View>
        </>
    );
};

const styles = {
    newTodoItemContainerStyles: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 30,
    },
    newTodoItem: {
        borderColor: '#999999',
        borderStyle: 'solid',
        borderRadius: 3,
        fontSize: 18,
        width: '80%',
    },
    addIconStyles: {
        width: 28,
        height: 28,
    },
    addNewItemBtnStyles: {

    }
};

export default AddNewTodoItem;
