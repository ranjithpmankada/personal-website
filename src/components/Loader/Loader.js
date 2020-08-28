import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const portal = ReactDOM.createPortal()
function Loader = () => {
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        
    });
    return (
        <div>Loading...</div>
    )
}