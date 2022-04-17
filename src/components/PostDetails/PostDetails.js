import {Button} from "../Button/Button";

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <Button to={'comments'} state={id}>Get Comments</Button>
            <hr/>
        </div>
    );
};

export {PostDetails};