import { useState } from 'react';
import { ArrowForwardIos, MoreHoriz } from '@mui/icons-material';
import { Avatar, AvatarGroup, IconButton } from '@mui/material';
import Profile from '../../assets/images/Profile.png';
import Profile1 from '../../assets/images/Profile1.jpg';
import Profile2 from '../../assets/images/Profile2.jpg';
import CustomButton from '../Button/Button';

const Notification = () => {
  const [isViewAll, setIsViewAll] = useState<boolean>(false);
  return (
    <div className="notifications">
      <div className="notification-header p-24">
        <p className="text-light-black f-500 m-0 subtitle">
          Notification Center
        </p>
        <div className="notification-count">18</div>
      </div>
      <div className="notification-body">
        <div className="notification-item_header">
          <span>Activities</span> <span>12</span>
        </div>
        <div className="notification-item_body">
          <div className="item">
            <div className="item_icon">
              <span className="text-light-black f-500">John Doe</span>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </div>
            <div className="item_content">
              <Avatar src={Profile} alt="Profile" />
              <span className="text-secondary text-ellipsis-2">
                Lorem ipsum dolor sit amet, consect adipiscing elit
              </span>
            </div>
            <div className="item_date extra-small">
              <span className="text-secondary f-500">2 min ago</span>
              <span className="text-primary">24/05/2023</span>
            </div>
          </div>
          <div className="item">
            <div className="item_icon">
              <span className="text-light-black f-500">John Doe</span>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </div>
            <div className="item_content">
              <Avatar src={Profile1} alt="Profile" />
              <span className="text-secondary text-ellipsis-2">
                Lorem ipsum dolor sit amet, consect adipiscing elit
              </span>
            </div>
            <div className="item_date extra-small">
              <span className="text-secondary f-500">2 min ago</span>
              <span className="text-primary">24/05/2023</span>
            </div>
          </div>
          <div className="item">
            <div className="item_icon">
              <span className="text-light-black f-500">John Doe</span>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </div>
            <div className="item_content">
              <Avatar src={Profile1} alt="Profile" />
              <span className="text-secondary text-ellipsis-2">
                Lorem ipsum dolor sit amet, consect adipiscing elit
              </span>
            </div>
            <div className="item_date extra-small">
              <span className="text-secondary f-500">2 min ago</span>
              <span className="text-primary">24/05/2023</span>
            </div>
          </div>
          <div className="item">
            <div className="item_icon">
              <span className="text-light-black f-500">John Doe</span>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </div>
            <div className="item_content">
              <Avatar src={Profile1} alt="Profile" />
              <span className="text-secondary text-ellipsis-2">
                Lorem ipsum dolor sit amet, consect adipiscing elit
              </span>
            </div>
            <div className="item_date extra-small">
              <span className="text-secondary f-500">2 min ago</span>
              <span className="text-primary">24/05/2023</span>
            </div>
          </div>
          {isViewAll && (
            <>
              <div className="item">
                <div className="item_icon">
                  <span className="text-light-black f-500">John Doe</span>
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                </div>
                <div className="item_content">
                  <Avatar src={Profile1} alt="Profile" />
                  <span className="text-secondary text-ellipsis-2">
                    Lorem ipsum dolor sit amet, consect adipiscing elit
                  </span>
                </div>
                <div className="item_date extra-small">
                  <span className="text-secondary f-500">2 min ago</span>
                  <span className="text-primary">24/05/2023</span>
                </div>
              </div>
              <div className="item">
                <div className="item_icon">
                  <span className="text-light-black f-500">John Doe</span>
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                </div>
                <div className="item_content">
                  <Avatar src={Profile1} alt="Profile" />
                  <span className="text-secondary text-ellipsis-2">
                    Lorem ipsum dolor sit amet, consect adipiscing elit
                  </span>
                </div>
                <div className="item_date extra-small">
                  <span className="text-secondary f-500">2 min ago</span>
                  <span className="text-primary">24/05/2023</span>
                </div>
              </div>
            </>
          )}
        </div>
        {!isViewAll && (
          <div className="view-all text-center">
            <CustomButton onClick={() => setIsViewAll((prev) => !prev)}>
              View All (8)
            </CustomButton>
          </div>
        )}
      </div>
      <div className="notification-footer">
        <div className="notification-item_header">
          <span>Connections</span> <span>6</span>
        </div>
        <div className="notification-footer_body">
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src={Profile} />
            <Avatar alt="Travis Howard" src={Profile1} />
            <Avatar alt="Cindy Baker" src={Profile2} />
            <Avatar alt="Agnes Walker" src={Profile} />
            <Avatar alt="Trevor Henderson" src={Profile} />
          </AvatarGroup>
          <IconButton color="primary" aria-label="Left" size="small">
            <ArrowForwardIos fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Notification;
