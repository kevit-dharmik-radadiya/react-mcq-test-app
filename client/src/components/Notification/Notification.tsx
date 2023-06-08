import { useState } from 'react';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  CheckOutlined,
  Close,
  InfoOutlined,
  MoreHoriz,
  Notifications,
} from '@mui/icons-material';
import {
  Avatar,
  AvatarGroup,
  Chip,
  Divider,
  IconButton,
  Switch,
} from '@mui/material';
import Button from '../Button/Button';
import CustomAutocomplete from '../Autocomplete/Autocomplete';
import Setting from '../../assets/images/icons/Setting';
import Profile from '../../assets/images/avatar/Profile.png';
import Profile1 from '../../assets/images/avatar/Profile1.jpg';
import Profile2 from '../../assets/images/avatar/Profile2.jpg';
import Updated from '../../assets/images/icons/Updated';
import Alert from '../../assets/images/icons/Alert';
import Company from '../../assets/images/logos/Company';

type Option = {
  label: string;
  value: string;
};

interface NotificationProps {
  onClose: () => void;
}
const Notification = (props: NotificationProps) => {
  const { onClose } = props;
  const [isViewAll, setIsViewAll] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [isConnections, setConnections] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<string | null>(null);
  const notificationFilterOptions = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'Unread',
      value: 'Unread',
    },
    {
      label: 'Messages',
      value: 'Messages',
    },
    {
      label: '@Mention',
      value: '@Mention',
    },
  ];

  const handleChange = (value: Option) => {
    setNotifications(value ? value.value : null);
  };

  return (
    <div className="notifications">
      {!isSetting && !isConnections && (
        <div className="notification-content">
          <div className="notification-header p-24">
            <CustomAutocomplete
              id="notifications"
              value={notifications}
              dataOptions={notificationFilterOptions}
              placeholder="All Notifications"
              adornmentStart={Notifications}
              onChange={(_, value) => {
                handleChange(value);
              }}
              width="200px"
              className="notification-header_select"
            />
            <div className="notification-header_clear">
              <span className="clear-text text-primary small f-500">
                Clear All <span className="vertical-divider" />
              </span>
              <Setting
                size="1.3em"
                className="control-icon"
                onClick={() => setIsSetting((prev) => !prev)}
              />
              <IconButton
                className="control-icon"
                size="small"
                sx={{ p: '5px' }}
                onClick={onClose}
              >
                <Close />
              </IconButton>
            </div>
          </div>
          <div className="notification-body">
            <div className="notification-item_header">
              <span>Activities</span> <span>(12)</span>
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
                  <span className="text-primary">Today</span>
                </div>
              </div>
              <div className="item">
                <div className="item_content">
                  <div className="lh-0">{Updated}</div>
                  <div className="text-secondary">
                    <span className="text-primary text-body f-500">
                      Updated!
                    </span>
                    <br />
                    <span className="text-ellipsis-">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </span>
                  </div>
                </div>
                <div className="item_date extra-small">
                  <span className="text-secondary f-500">10 min ago</span>
                  <span className="text-primary">Today</span>
                </div>
              </div>
              <div className="item">
                <div className="item_icon">
                  <span className="text-light-black f-500">Travis Howard</span>
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
                  <span className="text-primary">Today</span>
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
                      <span className="text-primary">Today</span>
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
                      <span className="text-primary">Today</span>
                    </div>
                  </div>
                </>
              )}
              {!isViewAll && (
                <div className="view-all text-center">
                  <Button onClick={() => setIsViewAll((prev) => !prev)}>
                    View All (8)
                  </Button>
                </div>
              )}
              <Divider>
                <Chip label="Yesterday" />
              </Divider>
              <div className="item">
                <div className="item_content">
                  <div className="item_icon">{Alert}</div>
                  <div className="text-secondary">
                    <span className="text-danger text-body f-500">Alert!</span>
                    <br />
                    <span className="text-ellipsis-2">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_icon">
                  <span className="text-light-black f-500">Remy Sharp</span>
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                </div>
                <div className="item_content">
                  <Avatar src={Profile2} alt="Profile" />
                  <span className="text-secondary text-ellipsis-2">
                    Lorem ipsum dolor sit amet, consect adipiscing elit
                  </span>
                </div>
              </div>
              <div className="item">
                <div className="item_content">
                  <div className="lh-0">{Updated}</div>
                  <div className="text-secondary">
                    <span className="text-primary text-body f-500">
                      Updated!
                    </span>
                    <br />
                    <span className="text-ellipsis-">
                      Lorem ipsum dolor sit amet, consect adipiscing elit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider sx={{ m: 1 }} />
          <div className="notification-footer">
            <div className="notification-item_header">
              <span>Connections</span> <span>(6)</span>
            </div>
            <div className="notification-footer_body">
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={Profile} />
                <Avatar alt="Travis Howard" src={Profile1} />
                <Avatar alt="Cindy Baker" src={Profile2} />
                <Avatar alt="Agnes Walker" src={Profile} />
                <Avatar alt="Trevor Henderson" src={Profile} />
              </AvatarGroup>
              <IconButton
                color="primary"
                aria-label="Left"
                size="small"
                onClick={() => setConnections((prev) => !prev)}
              >
                <ArrowForwardIos fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        </div>
      )}
      {isSetting && (
        <div className="notification-setting p-24">
          <div className="setting-header">
            <IconButton
              className="control-icon"
              size="small"
              sx={{ p: '5px' }}
              onClick={() => setIsSetting((prev) => !prev)}
            >
              <ArrowBackIosNew fontSize="inherit" />
            </IconButton>
            <span className="text-light-black f-500">
              Notifications Preference
            </span>
          </div>
          <div className="setting-body">
            <div className="setting-info">
              <InfoOutlined className="text-primary" />
              <span className="text-secondary small">
                Customize your web notifications by selecting options. You will
                receive notifications only for the options enabled here. Users
                can still view feeds for individual projects that are disabled
                here by selecting them in the Feed tab.
              </span>
            </div>
            <div className="setting-options">
              <div className="option-header">Options</div>
              <div className="option">
                <div className="option-title">
                  <Notifications /> Unread
                </div>
                <Switch defaultChecked />
              </div>
              <div className="option">
                <div className="option-title">
                  <Notifications /> Messages
                </div>
                <Switch />
              </div>
              <div className="option">
                <div className="option-title">
                  <Notifications /> @Mention
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
      )}
      {isConnections && (
        <div className="connections p-24">
          <div className="connection-header">
            <IconButton
              className="control-icon"
              size="small"
              sx={{ p: '5px' }}
              onClick={() => setConnections((prev) => !prev)}
            >
              <ArrowBackIosNew fontSize="inherit" />
            </IconButton>
            <span className="text-light-black f-500">Connections (6)</span>
          </div>
          <div className="connection-body grid grid-lg-6 grid-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-header_icon">
                  <Company size="5.5em" className="company-icon" />
                </div>
              </div>
              <div className="card-body">
                <Avatar
                  src={Profile}
                  alt="Profile"
                  sx={{ width: 60, height: 60 }}
                />
                <h4 className="text-primary">John Doe</h4>
                <p className="text-secondary extra-small text-ellipsis-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="card-footer">
                <span className="extra-small text-primary f-500">View</span>
                <div className="connect">
                  <IconButton color="primary" size="small">
                    <Close fontSize="inherit" />
                  </IconButton>
                  <IconButton color="primary" size="small">
                    <CheckOutlined fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-header_icon">
                  <Company size="5.5em" className="company-icon" />
                </div>
              </div>
              <div className="card-body">
                <Avatar
                  src={Profile1}
                  alt="Profile"
                  sx={{ width: 60, height: 60 }}
                />
                <h4 className="text-primary">Travis How</h4>
                <p className="text-secondary extra-small text-ellipsis-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="card-footer">
                <span className="extra-small text-primary f-500">View</span>
                <div className="connect">
                  <IconButton color="primary" size="small">
                    <Close fontSize="inherit" />
                  </IconButton>
                  <IconButton color="primary" size="small">
                    <CheckOutlined fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-header_icon">
                  <Company size="5.5em" className="company-icon" />
                </div>
              </div>
              <div className="card-body">
                <Avatar
                  src={Profile2}
                  alt="Profile"
                  sx={{ width: 60, height: 60 }}
                />
                <h4 className="text-primary">Cindy Baker</h4>
                <p className="text-secondary extra-small text-ellipsis-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="card-footer">
                <span className="extra-small text-primary f-500">View</span>
                <div className="connect">
                  <IconButton color="primary" size="small">
                    <Close fontSize="inherit" />
                  </IconButton>
                  <IconButton color="primary" size="small">
                    <CheckOutlined fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
