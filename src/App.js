import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from './components/cards/post-card/post-card';
import CommunityHeader from './components/community-header/communityHeader';
import MakePostCard from './components/cards/make-post-card/make-post-card';

function App() {
    return (
        <div className="App">
            <NavBar isLoggedIn={false} userName="rakan "></NavBar>
            <CommunityHeader></CommunityHeader>
            <MakePostCard></MakePostCard>
            <PostCard
                title={'Hello i am drowining please help'}
                communityTitle={'r/griefers-inc'}
                postedBy={'u/ahmad'}
                updatedAt={'2 days ago'}
                commentCount={141}
                text={'Hello there i am experiencing drowing pls help . k thx bye'}
                likeCount = {123}
                dislikeCount = {134}
            ></PostCard>
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
    );
}

export default App;
