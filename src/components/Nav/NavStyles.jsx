import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    marginAutoItem: {
        margin: 'auto'
      },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: "#F46036",
        color: '#000000'
    },
    title: {
        alignItems: "center",
    },
    
    menuButton: {
        marginRight: theme.spacing(1)
    },

    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#1C9C8D',
        borderRadius: '2px',
        border: '2px solid #2E294E',
    },

    drawerHeader: {
        display: "flex",
        align: "center",
        alignItems: "center",
        color: "#EDE7D9",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
    },

}));

export default useStyles;