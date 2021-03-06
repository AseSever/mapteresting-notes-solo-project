import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { ListItem, ListItemIcon, ListItemText, List } from "@material-ui/core/";
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import SearchIcon from '@material-ui/icons/Search';

const NavItems = ({ store, dispatch, handleDrawerClose }) => {

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  const logOut = () => {
    handleDrawerClose();
    dispatch({ type: 'LOGOUT' })
  }

  const persistentNav = [
    {
      text: loginLinkData.text,
      icon: <HomeIcon />,
      path: loginLinkData.path
    },
  ];
  const userNavItems = [
    {
      text: "Add Location",
      icon: <AddCircleIcon />,
      path: '/note-create'
    },
    {
      text: "My Notes",
      icon: <InfoIcon />,
      path: '/mynotes'
    }
  ];

  return (
    <>
      <List>
        {persistentNav.map(({ text, icon, path }) => (
          <ListItem key={text} component={Link} to={path} onClick={handleDrawerClose}>
            <ListItemIcon style={{ color: "#EFF1F3"}}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {store.user.id && (
          <>
            {userNavItems.map(({ text, icon, path }) => (
              <ListItem key={text} component={Link} to={path} onClick={handleDrawerClose}>
                <ListItemIcon style={{ color: "#EFF1F3"}}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem component={Link} to={'/'} onClick={logOut}>
              <ListItemIcon style={{ color: "#EFF1F3"}}>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary={'Logout'} />
            </ListItem>
          </>
        )}
      </List>
    </>
  );
}
export default connect(mapStoreToProps)(NavItems);