import React from 'react'
import Header from '../../components/header/Header'
import { PROFILE_PAGE } from '../../constants/pagesConst'
import Navigation from '../../components/navigation/Navigation'
import ProfileInfo from '../../components/profile-info/ProfileInfo'

const ProfilePage = () => {
  return (
    <div>
      <Header namePage={PROFILE_PAGE}/>
      <Navigation namePage={PROFILE_PAGE} />
      <ProfileInfo namePage={PROFILE_PAGE}/>
    </div>
  )
}

export default ProfilePage