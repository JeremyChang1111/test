import React from 'react'
import { Modal, View, Image, StyleSheet, TouchableOpacity, WebView } from 'react-native'
import { Text, Button } from 'react-native-ui-kitten'
import moment from 'moment'

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
            <TouchableOpacity style={styles.container} onPress={this.onPressItem}>
                <Modal
                    visible={this.state.modalVisible}
                    animationType='fade'
                    animationDuration={600}
                >
                    <WebView source={this.state.postURL}/>
                    <Button title='Close' onPress={this.onModalClose}>Close Me</Button>
                </Modal>
                {/* Each Item of Reddit posts - using flexbox*/}
                <View style={styles.wrapper}>
                    {/* Content of the left panel - image */}
                    <View style={styles.postContainer}>
                        <Image style={styles.post} source={imageURL}/>
                    </View>
                    {/* Content of the right panel - information of post : using flexbox*/}
                    <View style={styles.contentContainer}>
                        {/* Content of date info */}
                        <View style={styles.date}><Text>Created: {moment(data.created).format('YYYY-MM-DD')}</Text></View>
                        {/* Content of title info */}
                        <View style={styles.title}><Text style={styles.title} numberOfLines={3} category='h5'>{data.title}</Text></View>
                        {/* Content of Extra info: using flexbox*/}
                        <View style={styles.infoSection}>
                            {/* flex size: 2 for double the space*/}
                            <View style={styles.infoAuthor}><Text>Author: { data.author }</Text></View>
                            {/* flex size: 1 for single the space*/}
                            <View style={styles.infoScore}><Text>Score: { data.score }</Text></View>
                            <View style={styles.infoComment}><Text>Comments: { data.num_comments }</Text></View>
                        </View>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    postContainer: {
        width: 140,
        height: 140,
    },
    post: {
        width: 140,
        height: 140,
        backgroundColor: '#444',
        borderRadius: 10,
    },
    wrapper: {  
        backgroundColor: '#AAA',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
        height: 100,
        fontSize: 16,
    },
    infoSection: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 2,
    },
    infoAuthor: {
        flex: 2,
    },
    infoScore: {
        flex: 1,
    },
    infoComment: {
        flex: 1,
    }
});

export default ListDetail