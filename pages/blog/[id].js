import { useRouter } from 'next/router'
import posts from '../../'


export default () => {
    const router = useRouter()
    const post = posts[router.query.id]
    return (
        <>
            <h1>Plog post</h1>
            <h2> {post.title}</h2>
            <p>{post.content} </p>
            <p> </p>
        </>
    ) 

}