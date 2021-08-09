import NavBar from '../nav-bar/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from '../cards/post-card/post-card';
import CommunityHeader from '../community-header/communityHeader';
import MakePostCard from '../cards/make-post-card/make-post-card';
import CommentCard from '../cards/comment-card/comment-card';
import CommentSeperator from '../seperators/comments-seperator';

const TopicPage = () => {
    return (
        <div>
            <NavBar isLoggedIn={false} userName="rakan "></NavBar>
            <CommunityHeader></CommunityHeader>
            <MakePostCard></MakePostCard>

            <PostCard
                title={'Hello i am drowining please help'}
                communityTitle={'r/griefers-inc'}
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={141}
                text={'Hello there i am experiencing drowing pls help. k thx bye'}
                likeCount={123}
                dislikeCount={134}
                hideFooter={false}
                borderRadiusDisable={true}
                marginBottom="-0.5px"
            ></PostCard>
            <CommentSeperator>c</CommentSeperator>
            <CommentCard
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={141}
                text={'Hello there i am experiencing drowing pls help . k thx bye'}
                likeCount={123}
                dislikeCount={134}
                isTopComment={true}
            ></CommentCard>
            <CommentCard
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={141}
                text={'Hello there i am experiencing drowing pls help . k thx bye'}
                likeCount={123}
                dislikeCount={134}
                isTopComment={true}
            ></CommentCard>
            <CommentCard
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={141}
                text={'Hello there i am experiencing drowing pls help . k thx bye'}
                likeCount={123}
                dislikeCount={134}
                isTopComment={true}
            ></CommentCard>
            <PostCard
                title={'Hello i am drowining please help'}
                communityTitle={'r/griefers-inc'}
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={10}
                text={'Hello there i am experiencing drowing pls help . k thx bye'}
            ></PostCard>
            <PostCard
                title={'Hello i am drowining please help'}
                communityTitle={'r/griefers-inc'}
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={5}
                text={'Hello there i am experiencing drowing pls help . k thx bye'}
            ></PostCard>
        </div>
        
    )
}

export default TopicPage;