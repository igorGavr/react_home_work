import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../../redux/actions";

export function Posts() {

    let posts = useSelector(({postsState}) => postsState);
    let dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                loadPosts(value, dispatch);
            });

    }, [])
    return (
        <div>
            {
                posts.map(value => <div key={value.id}> {value.title}</div>)

            }

        </div>
    );
}