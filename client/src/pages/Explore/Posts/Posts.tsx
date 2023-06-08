import { useState } from 'react';
import { Box } from '@mui/material';
import { ChatBubbleOutline, Favorite, FavoriteBorder } from '@mui/icons-material';
import Company from '../../../assets/images/logos/Company';
import Post1 from '../../../assets/images/posts/Post_1.jpg';

const Posts = () => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className="posts">
      <div>
        <p className="title bold m-0">Hey!</p>
        <p className="text-secondary m-0">Find your relevant posts here.</p>
      </div>
      <div className="posts-box">
        <div className="card">
          <div className="card-header">
            <div className="card-header_img">
              <img src={Post1} alt="Post1" />
            </div>
          </div>
          <div className="card-body">
            <h4 className="text-primary">Boost Your Knowledge</h4>
            <p className="text-secondary extra-small text-ellipsis-3">
              In a world that thrives on information and constant learning,
              increasing your knowledge power is not only advantageous but also
              empowering. Whether you want to impress others with your
              intelligence, enhance your problem-solving abilities, or simply
              satisfy your thirst for knowledge, developing a well-rounded
              intellect is a worthwhile pursuit.
            </p>
          </div>
          <div className="card-footer">
            <div className="post-likes">
              <Box
                className={`like-icon cursor-pointer small ${
                  like ? 'text-primary' : 'text-secondary'
                }`}
                onClick={() => setLike((prev) => !prev)}
              >
                {like ? <Favorite /> : <FavoriteBorder />} 12k
              </Box>
            </div>
            <div className="post-likes">
              <Box className="comment-icon cursor-pointer small text-secondary">
                <ChatBubbleOutline fontSize="small" /> 12k
              </Box>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-header_icon">
              <Company size="7em" className="company-icon shape1" />
              <Company size="13em" className="company-icon shape2" />
            </div>
          </div>
          <div className="card-body">
            <h4 className="text-primary">John Doe</h4>
            <p className="text-secondary extra-small text-ellipsis-3">
              n a world that thrives on information and constant learning,
              increasing your knowledge power is not only advantageous but also
              empowering. Whether you want to impress others with your
              intelligence, enhance your problem-solving abilities, or simply
              satisfy your thirst for knowledge, developing a well-rounded
              intellect is a worthwhile pursuit.
            </p>
          </div>
          <div className="card-footer">
            <div className="post-likes">
              <Box
                className={`like-icon cursor-pointer small ${
                  like ? 'text-primary' : 'text-secondary'
                }`}
                onClick={() => setLike((prev) => !prev)}
              >
                {like ? <Favorite /> : <FavoriteBorder />} 12k
              </Box>
            </div>
            <div className="post-likes">
              <Box className="comment-icon cursor-pointer small text-secondary">
                <ChatBubbleOutline fontSize="small" /> 12k
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
