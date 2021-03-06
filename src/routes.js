import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ToolSearch from './components/ToolSearch/ToolSearch';
import Profile from './components/Profile/Profile';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import FAQ from './components/FAQ/FAQ';
import Toolview from './components/Toolview/Toolview';
import Chat from './components/Chat/Chat';
import Messages from './components/Messages/Messages';
import PostTool from './components/PostTool/PostTool';
import CheckOut from './components/CheckOut/CheckOut';
import ToS from './components/ToS/ToS';
import RentalAgreement from './components/RentalAgreement/RentalAgreement';
import Welcome from './components/Welcome/Welcome';
import ToolEdit from './components/ToolEdit/ToolEdit';

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={ToolSearch} path="/search" />
        <Route component={Profile} path="/profile/:userid" />
        <Route component={ProfileEdit} path="/edit/:userid" />
        <Route component={FAQ} path="/faq" />
        <Route component={Chat} path="/chat/:messageid" />
        <Route component={Toolview} path="/toolview/:id" />
        <Route component={Messages} path="/messages" />
        <Route component={PostTool} path="/post" />
        <Route component={CheckOut} path="/checkout/:id" />
        <Route component={ToS} path="/terms_and_conditions" />
        <Route component={RentalAgreement} path="/rental_agreement" />
        <Route component={Welcome} path="/welcome/:userid" />
        <Route component={ToolEdit} path="/tooledit/:id" />
    </Switch>
)