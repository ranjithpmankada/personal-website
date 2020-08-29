import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Loader() {
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        window.addEventListener("loadstart", function(event) {
            console.log("load")
        });
    });
    return (
        <div>Loading...</div>
    )
}
export default Loader;