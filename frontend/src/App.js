import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import ContentAnalysis from './components/ContentAnalysis';
import UserReports from './components/UserReports';
import TrendAnalysis from './components/TrendAnalysis';
// import AiInsights from './components/AiInsights';
import ModerationQueue from './components/ModerationQueue';
import ReportGeneration from './components/ReportGeneration';
import Settings from './components/Settings';
import Landing from './components/Landing';
import Signup from './components/Signup';
import InsuranceClaimForm from './components/claimform';
import UserProfile from './components/UserProfile';
import UserDetailsWithImages from './components/Details';
function App() {
  return (
    <Router>
      <div className="App">
        
        
        <div className="main-content">
          {/* Routes for different components */}
          <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<InsuranceClaimForm/>} />
            <Route path="/" element={<Landing />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/content-analysis" element={<ContentAnalysis />} />
            <Route path="/reports" element={<UserReports />} />
            <Route path="/trend-analysis" element={<TrendAnalysis />} />
            <Route path="/user-profile" element={<UserDetailsWithImages/>} />
            {/* <Route path="/ai-insights" element={<AiInsights />} /> */}
            <Route path="/moderation-queue" element={<ModerationQueue />} />
            <Route path="/report-generation" element={<ReportGeneration />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
