import { Meteor } from 'meteor/meteor';
import React, { Component }  from 'react';
import { AppBar , LeftNav, MenuItem, RaisedButton, Drawer } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// App component - represents the whole app
export default class App extends React.Component {
    constructor(props) {
        injectTapEventPlugin();
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {open: false};
    }
    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.handleToggle}
                        />

                        <Drawer width={500}  open={this.state.open} >
                            <AppBar title="INTRA"
                                    onLeftIconButtonTouchTap={this.handleToggle}
                            />
                        </Drawer>
                    </div>
                </MuiThemeProvider>
        );
    }
}