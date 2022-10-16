import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';

const TodoCardList = () => {
    const todoList = [
        {id: 1, title: '재활용하기', category: 1, created: '2022-10-17 01:18'},
        {id: 2, title: '운동가기', category: 1, created: '2022-10-17 01:18'},
    ];

    const category = [
        {id: 1, title: '개인'},
        {id: 2, title: '업무'},
    ]

    return (
        <>
            <View style={{marginTop: 20, height: 460}}>
                <FlatList data={todoList} renderItem={({item}) =>
                    <View style={styles.todoItemStyles}>
                        <Image
                            style={styles.todoItemImgStyles}
                            source={require('../assets/images/speech-balloon-48.png')}></Image>
                        <Text style={styles.todoItemTitleStyles}>{item.title}</Text>
                        <Text style={styles.todoItemCreatedStyles}>{item.created.split(' ')[0]}</Text>
                    </View>
                }>
                </FlatList>
            </View>
        </>
    );
};

const styles = {
    todoItemStyles: {
        display: 'flex',
        flexDirection: 'row',
        height: 48,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        verticalAlign: 'center',
        paddingLeft: 5,
        backgroundColor: '#3179ff',
        borderRadius: 10,
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: '#e3e3e3',
        // boxShadow: '2px 2px 2px #999999',
    },
    todoItemImgStyles: {
        width: 24,
        height: 24,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 5,
    },
    todoItemTitleStyles: {
        width: 200,
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 48,
        fontSize: 18,
        color: '#FFFFFF',
    },
    todoItemCreatedStyles: {
        paddingLeft: 10,
        paddingRight: 10,
        lineHeight: 48,
        textAlign: 'center',
        color: '#FFFFFF',
    },
};

export default TodoCardList;
