import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NotePage from '../NotePage/NotePage';
import MyNotes from '../MyNotes/MyNotes';
import MyNoteDetails from '../MyNoteDetails/MyNoteDetails';
import Edit from '../Edit/Edit';
import MapContainer from '../MapContainer/MapContainer';

// MATERIAL-UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ImageUpload from '../ImageUpload/ImageUpload';

/* Colors for project 

Portland Orange #F46036
Space Cadet #2E294E
Persian Green #1B998B
Rose Madder #E71D36
June Bud #C5D86D
*/

const customeTheme = createMuiTheme({
  //theme settings
  palette: {
    primary: {
      main: '#15796E',
    },
    secondary: {
      main: '#E93C0C',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '2px',
        border: '2px solid #2E294E',
      },
      contained: {
        boxShadow: '2px 2px 0 #2E294E',
      },
    },
    MuiIcon: {
      root: {
        borderRadius: '2px',
        border: '2px solid #2E294E',
      },
      contained: {
        boxShadow: '2px 2px 0 #2E294E',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#C5D86D',
        borderRadius: '2px',
        border: '2px solid #2E294E',
      },
      elevation1: {
        boxShadow: '2px 2px 0 #2E294E'
      },
      elevation2: {
        boxShadow: '4px 4px 0 #2E294E'
      },
      elevation3: {
        boxShadow: '4px 5px 0 #2E294E'
      }
    },
    MuiCard: {
      root: {
        marginBottom: '20px'
      }
    },
    MuiCardHeader: {
      root: {
        backgroundColor: '#1B998B',
        borderRadius: '3px',
        border: '2px solid #2E294E',
        boxSizing: 'border-box',
        width: '90%',
        align: 'center',
        margin: '15px auto',
        fontWeight: 'bold',
        color: '#EFF1F3',
      },
    },
    MuiCardActionArea: {
      root: {
        align: 'center',
        margin: '-5px auto',
      }  
    },
    MuiCardActions: {
      root: {
        marginTop: '8px'
      },
    },
    MuiDivider: {
      root: {
        border: '1px solid #2E294E',
      },
    }
  },

});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <ThemeProvider theme={customeTheme}>
        <Router>
          <div>
            <Nav />

            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
                component={AboutPage}
              />

              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/user"
                component={UserPage}
              />

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/info"
                component={InfoPage}
              />

              {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LoginPage at /login
                exact
                path="/login"
                component={LoginPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration"
                component={RegisterPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LandingPage at "/home"
                exact
                path="/home"
                component={LandingPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                exact
                path="/note-create"
                component={NotePage}

              />
              <ProtectedRoute
                exact
                path="/mynotes"
                component={MyNotes}
              />
              <ProtectedRoute
                path="/details/:id"
                component={MyNoteDetails}
              />
              <ProtectedRoute
                path="/edit-details/:id"
                component={Edit}
              />


              <Route exact path="/map" component={MapContainer} />
              <Route exact path="/upload" component={ImageUpload} />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
