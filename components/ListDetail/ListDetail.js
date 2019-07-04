import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, WebView, Modal, TouchableHighlight } from 'react-native';

class ListDetail extends React.Component {
    state = {
        modalVisible: false,
        postURL: {uri: ''},
    }

    onPressItem = () => {
        const { data } = this.props

        this.setState({
            modalVisible: true,
            postURL: {uri: data.url},
        })
    }

    onModalClose = () => {
        this.setState({
            modalVisible: false,
            postURL: {uri: ''},
        })
    }

    render() {
        const { data } = this.props
        const imageURL = {
            uri: data.thumbnail === 'self' ? 'self' : data.thumbnail
        }

        return (
            <TouchableOpacity style = {styles.container} onPress={this.onPressItem}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <TouchableHighlight
                        style={styles.webContainer}
                        onPress={this.onModalClose}>
                        <Text style={styles.close}>Close</Text>
                    </TouchableHighlight>
                    <WebView 
                        source={this.state.postURL}
                    />
                </Modal>
                <View style = {styles.avatarContainer}>
                    <Image style={styles.avatar} source={imageURL}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.date}><Text>{'2019/7/4'}</Text></View>
                    <View style={styles.title}><Text style={styles.title}>{data.title}</Text></View>
                    <View style={styles.infoSection}>
                        <View style={styles.infoItem}><Text>{ data.author }</Text></View>
                        <View style={styles.infoItem}><Text>{ data.score }</Text></View>
                        <View style={styles.infoItem}><Text>{ data.name }</Text></View>
                    </View>
                </View>   
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    webContainer: {
        marginTop: 20,
    },
    close: {
        fontSize: 16,
        textAlign: 'right',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    avatarContainer: {
        width: 140,
        height: 140,
    },
    avatar: {
        width: 140,
        height: 140,
        backgroundColor: '#444',
        borderRadius: 10,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
    },
    date: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        flex: 2,
        fontSize: 16,
    },
    infoSection: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    infoItem: {
        flex: 1,
    },
});

export default ListDetail