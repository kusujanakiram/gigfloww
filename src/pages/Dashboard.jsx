import React, { use, useEffect, useState } from 'react';
import './Dashboard.css';
import {
  AreaChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area
} from 'recharts';

import { FaUsers, FaBriefcase, FaTasks } from 'react-icons/fa';
import { FiArrowRight, FiFilter } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const performanceData = [
  { name: 'Monday', value: 50 },
  { name: 'Tuesday', value: 40 },
  { name: 'Wednesday', value: 80 },
  { name: 'Thursday', value: 60 },
  { name: 'Friday', value: 50 },
  { name: 'Saturday', value: 70 },
  { name: 'Sunday', value: 60 },
];

 

const Dashboard = () => {
  const [username, setUsername] = useState('');

useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && currentUser.name) {
    setUsername(currentUser.name);  
  }
}, []);

  
  return (
    <div className="dashboard-container">

      {/* Banner */}
      <div className="banner">
        <p><img src='/symbol.png' className='symbol'/> Optimize your experience on Gigfloww~ track your job post, manage teams and streamline hr operations effortlessly today!</p>
      </div>

      {/* Header */}
      <div className="dashboard-header">
        <h2>Welcome Back, {username|| 'Guest'}</h2>
        <div className="header-calendar">
          <FaRegCalendarAlt style={{ marginRight: '6px' }} />
          Wed 23, May 2025
        </div>
      </div>

      {/* Middle Grid */}
      <div className="middle-grid">
        {/* Left Side */}
        <div className="left-side">
          {/* Cards */}
          <div className="stats-cards">
            <div className="card">
              <div className="card-header">
               <span> Employees</span>
                <FaUsers />
              </div>
              <h2>24</h2>
              <button className="details-btn">View Details <FiArrowRight /></button>
            </div>
            <div className="card">
              <div className="card-header">
                <span> Hiring</span>
                <FaBriefcase />
              </div>
              <h2>5</h2>
              <button className="details-btn">View Details <FiArrowRight /></button>
            </div>
            <div className="card">
              <div className="card-header">
                <span> Projects</span>
                <FaTasks />
              </div>
              <h2>1</h2>
              <button className="details-btn">View Details <FiArrowRight /></button>
            </div>
          </div>

       <div className="performance-card">
  <div className="performance-header">
    <h3>Performance Report</h3>
    <button className="weekly-btn">Weekly</button>
  </div>

  <ResponsiveContainer width="100%" height={220}>
    <AreaChart data={performanceData}>
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
      <XAxis dataKey="name" stroke="#6B7280" />
      <YAxis stroke="#6B7280" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#4F46E5"
        fill="url(#colorValue)"
        strokeWidth={3}
      />
    </AreaChart>
  </ResponsiveContainer>
</div>

        </div>

        {/* Right Side */}
    <div className="right-side">
  <div className="upcoming-card">
    <div className="upcoming-header">
      <h3>Upcoming Actions</h3>
      <div className="calendar-icon">
        <FaRegCalendarAlt />
      </div>
    </div>

    <div className="upcoming-list">
      {[
        {
          start: '03:30 pm',
          end: '04:30 pm',
          type: 'Internal Meeting',
          title: 'Internal Meeting with Jade Sapphire - UI designer'
        },
        {
          start: '05:00 pm',
          end: '05:30 pm',
          type: 'Internal Meeting',
          title: 'Internal Meeting with Content team'
        },
        {
          start: '07:00 pm',
          end: '05:30 pm',
          type: 'Interview',
          title: 'Interview with Achuyut - UI intern'
        },
        {
          start: '05:00 pm',
          end: '05:30 pm',
          type: 'Internal Meeting',
          title: 'Internal Meeting with Content team'
        },
        
      ].map((item, index) => (
        <div className="upcoming-item" key={index}>
          <div className="time-column">
            <strong>{item.start}</strong>
            <span>{item.end}</span>
          </div>
          <div className="info-column">
            <p className="meeting-type">{item.type}</p>
            <p className="meeting-title">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
 </div>
      {/* Incoming Applications */}
      <div className="applications">
        <div className="applications-header">
          <h3>Incoming Applications</h3>
          <div className="applications-actions">
            <button className="filter-btn"><FiFilter /> Filter</button>
            <button className="see-all-btn">See all</button>
          </div>
        </div>

        <div className="applications-list">
          <div className="application-card">
            <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="Elizabeth" className="applicant-img" />
            <h4>Elizabeth Filade</h4>
            <p className="experience-company">Tucke Inc</p>
            <p className="experience-duration">Dec 2022 - Nov 2025</p>
            <button className="resume-btn">View Resume</button>
          </div>
          <div className="application-card">
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Andre" className="applicant-img" />
            <h4>Andre Suares</h4>
            <p className="experience-company">Tucke Inc</p>
            <p className="experience-duration">Dec 2022 - Nov 2025</p>
            <button className="resume-btn">View Resume</button>
          </div>
          <div className="application-card">
            <img src="https://randomuser.me/api/portraits/women/13.jpg" alt="Ishita" className="applicant-img" />
            <h4>Ishita Ashuth</h4>
            <p className="experience-company">Tucke Inc</p>
            <p className="experience-duration">Dec 2022 - Nov 2025</p>
            <button className="resume-btn">View Resume</button>
          </div>
          <div className="application-card">
            <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Ishita" className="applicant-img" />
            <h4>Ishita Ashuth</h4>
            <p className="experience-company">Tucke Inc</p>
            <p className="experience-duration">Dec 2022 - Nov 2025</p>
            <button className="resume-btn">View Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
