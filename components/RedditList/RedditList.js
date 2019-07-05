import React from 'react'
import { connect } from 'react-redux'
import { FlatList, ActivityIndicator, View, Text } from 'react-native'
import { getList } from '../../store/actions'
import ListDetail from '../ListDetail'
import moment from 'moment'

const styles = {
    emptyWrapper: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#787878',
    },
    activityIndicator: {
        marginBottom: 20,
    }
}

class RedditList extends React.Component {
    renderItem = ( {item} ) => (
       <ListDetail data = {item.data}/>
    )
    
    keyExtractor = (item) => (
        item.data.id
    )

    componentDidMount() {
        const { getList } = this.props

        getList()
    }
    
    renderLoadingState = () => {
        return (
        <View style={styles.emptyWrapper}>
            <ActivityIndicator size="large" style={styles.activityIndicator} />
            <Text style={styles.emptyText}>Loading posts for {moment().format('YYYY-MM-DD')}</Text>
        </View>
        )
    }

    render() {
        const { postList, loading } = this.props
        const data = postList && postList.data && postList.data.children || []

        return (
            loading ?
            this.renderLoadingState() :
            <FlatList
                data={ data }
                renderItem={ this.renderItem }
                keyExtractor={ this.keyExtractor }
            />
        )
    }
}

const mapStateToProps = (state) => ({
    postList: state.list,
    loading: state.loading,
})

const mapDispatchToProps = {
    getList,
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditList)