import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/spinner';
import { getProfileByHandle } from '../../actions/profileActions';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCredis from './ProfileHeader';
import ProfileGitHub from './ProfileGitHub';

class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle);
        }
    }
  render() {
    return (
      <div>
        <ProfileHeader />
        <ProfileAbout />
        <ProfileCredis />
        <ProfileGitHub />

      </div>
    )
  }
}

Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state =>{
    profile: state.profile
}

export default connect(mapStateToProps,{getProfileByHandle})(Profile);