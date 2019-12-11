import posts from '../../posts.json'

const Post = props => {
    console.log('@@@@@@@@')
    console.log(props.post)
    return (

        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
        </div>
    )
}

Post.getInitialProps = ({ query }) => {
    return {
        post: posts[query.id]
    }
}

export default Post