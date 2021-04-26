import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { makeStyles } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react';
import { 
    Drawer, 
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar
} from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar
    }
});

function Layout({children}) {

    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();

    const menuItems = [
        { text: 'My Notes', icon: <SubjectOutlined color='secondary'/>, path: '/' },
        { text: 'Create Note', icon: <AddCircleOutlined color='secondary'/>, path: '/create' },
    ];

    return (
        <div className={classes.root}>
            <AppBar 
                elevation={2} 
                className={classes.appbar}
            >
                <Toolbar>
                    <Typography>
                        Today is {format(new Date(), 'do MMMM Y ')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>My Notes</Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem button 
                            key={item.text} 
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );

}

export default Layout;