import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';
import './Dashboard.css';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Aboutus() {
    const [projects, setProjects] = useState([]);
    const [overview, setOverview] = useState({
        activeProjects: 0,
        completedProjects: 0,
        totalFunds: 0,
        beneficiaries: 0,
    });
    const [recentActivities, setRecentActivities] = useState([]);
    const [kpiData, setKpiData] = useState({
        volunteerHours: [],
        fundsSpent: [],
    });

    useEffect(() => {
        // Fetch data from backend
        axios.get('/dashboardData')
            .then(response => {
                setProjects(response.data.projects);
                setOverview(response.data.overview);
                setRecentActivities(response.data.recentActivities);
                setKpiData(response.data.kpiData);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="dashboard">
            <h2>Welcome to your CSR Dashboard</h2>

            {/* Overview Metrics */}
            <div className="overview-metrics">
                <div className="metric">
                    <h3>{overview.activeProjects}</h3>
                    <p>Active Projects</p>
                </div>
                <div className="metric">
                    <h3>{overview.completedProjects}</h3>
                    <p>Completed Projects</p>
                </div>
                <div className="metric">
                    <h3>${overview.totalFunds.toLocaleString()}</h3>
                    <p>Total Funds Donated</p>
                </div>
                <div className="metric">
                    <h3>{overview.beneficiaries.toLocaleString()}</h3>
                    <p>Beneficiaries Impacted</p>
                </div>
            </div>

            {/* Recent Activities */}
            <div className="recent-activities">
                <h3>Recent Activities</h3>
                <ul>
                    {recentActivities.map((activity, index) => (
                        <li key={index}>
                            <p>{activity.description}</p>
                            <small>{activity.date}</small>
                        </li>
                    ))}
                </ul>
            </div>

            {/* KPI Tracking */}
            <div className="kpi-tracking">
                <h3>KPI Tracking</h3>
                <Bar
                    data={{
                        labels: ['Volunteer Hours', 'Funds Spent'],
                        datasets: [
                            {
                                label: 'KPI Metrics',
                                data: [kpiData.volunteerHours.reduce((a, b) => a + b, 0), kpiData.fundsSpent.reduce((a, b) => a + b, 0)],
                                backgroundColor: ['#4caf50', '#2196f3'],
                            },
                        ],
                    }}
                />
            </div>

            {/* Graphical Reports */}
            <div className="graphical-reports">
                <h3>Graphical Reports</h3>
                <div className="charts">
                    <Pie
                        data={{
                            labels: ['Funds Used', 'Funds Remaining'],
                            datasets: [
                                {
                                    data: [kpiData.fundsSpent.reduce((a, b) => a + b, 0), overview.totalFunds - kpiData.fundsSpent.reduce((a, b) => a + b, 0)],
                                    backgroundColor: ['#ff9800', '#607d8b'],
                                },
                            ],
                        }}
                    />
                    <Line
                        data={{
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                            datasets: [
                                {
                                    label: 'Beneficiaries Over Time',
                                    data: [50, 100, 150, 200, 250],
                                    borderColor: '#03a9f4',
                                    fill: false,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
