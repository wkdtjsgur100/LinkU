import React, {Component} from 'react';
import MeetingImages from './specific_page/MeetingImages';
import RightPanel from './specific_page/RightPanel';
import MeetingInfo from './specific_page/MeetingInfo';
import Maker from './specific_page/Maker';
import Place from './specific_page/Place';
import Appliers from './specific_page/Appliers';

import ConfirmModal from './utils/ConfirmModal';
import Signup from './signup/Signup';
import MeetingCardBox from './mainpage/MeetingCardBox';
import IntroVideo from './mainpage/IntroVideo';
import IntroOfLinkU from './mainpage/IntroOfLinkU';
import LinkUHeader from './mainpage/LinkUHeader';
import NextMeetingAlarm from './mainpage/NextMeetingAlarm';
import Review from './mainpage/Review';
import LinkUGuide from './guide_page/LinkUGuide';
import Statistics from './mainpage/Statistics';
import LinkUContact from './mainpage/LinkUContact';
import LinkUFooter from './mainpage/LinkUFooter';

const App = () => (
    <div >
        <ConfirmModal />
        <LinkUHeader />
        <IntroOfLinkU />
        <MeetingCardBox />
        <NextMeetingAlarm />
        <Review />
        <Statistics />
        <LinkUContact />
        <LinkUFooter />
    </div>
);

export default App;
