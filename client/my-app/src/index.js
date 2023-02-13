import * as React from 'react';
import ReactDOM from 'react-dom/client';
import AddressForm from './AddressForm';
import Checkout from './Checkout';
import PaymentForm from './PaymentForm';
import Review from './Review';

function UpdateDetailsPage() { 
    return ( 
        <div>
            <Checkout></Checkout>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UpdateDetailsPage />);