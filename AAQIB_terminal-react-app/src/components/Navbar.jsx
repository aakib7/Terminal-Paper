import React from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from './Todo';
import Tasks from './Tasks';
import Monthly from './MonthlyReport';

const Navbar = () => {
    return ( <div>
        <BrowserRouter>
            <nav>
                <ul id="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addtask">Add Task</Link>
                    </li>
                    <li>
                        <Link to="/month">Monthly Report</Link>
                    </li>
            
                </ul>
                
            </nav>
            <Routes>
                <Route path="/" element={<Tasks />} />
                <Route path="/addtask" element={<Todo />} />
                <Route path="/month" element={<Monthly />} />
            </Routes>

        </BrowserRouter>
    
    </div> );
}
 
export default Navbar;