import React, { Component } from 'react';

import { connect } from 'react-redux';

const Video = ({activeLesson, activeModule}) => (
    <div>
        <strong>Módulo {activeModule.id}: {activeModule.title} </strong>
        <span>Aula {activeLesson.id}: {activeLesson.title}</span>
    </div>
);

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
}))(Video);