import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './saurabh.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContext from './LoginContext.jsx';
createRoot(document.getElementById('root')).render(
    <LoginContext>    
        <App />
    </LoginContext>

)
