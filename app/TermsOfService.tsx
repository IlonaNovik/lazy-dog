import React from 'react';
import Cookies from 'js-cookie';

const TermsOfService = ({ setAgreed }: {setAgreed: (agreed: true) => void }) => {
  const handleAgree = () => {
    setAgreed(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">Welcome to LazyDog. By using our services, you agree to the following terms:</p>
      
      <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using our application, you accept and agree to be bound by the terms and provisions of this agreement.</p>
      
      <h2 className="text-xl font-semibold mt-4">2. Changes to Terms</h2>
      <p className="mb-4">We reserve the right to modify these terms at any time. Your continued use of the service after any changes signifies your acceptance of the new terms.</p>
      
      <h2 className="text-xl font-semibold mt-4">3. User Responsibilities</h2>
      <p className="mb-4">Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
      
      <h2 className="text-xl font-semibold mt-4">4. Use of Camera and Microphone</h2>
      <p className="mb-4">Our app requires access to your device's camera and microphone to provide personalized Yoga pose advice. By using the app, you consent to this access.</p>
      
      <h2 className="text-xl font-semibold mt-4">5. Limitation of Liability</h2>
      <p className="mb-4">We are not liable for any injuries or damages that may occur from the use of our services. Users should practice Yoga poses with caution and consult a professional if needed.</p>
      
      <h2 className="text-xl font-semibold mt-4">6. Governing Law</h2>
      <p className="mb-4">These terms shall be governed by and construed in accordance with the laws of The Kingdom of the Netherlands.</p>
      
      <h2 className="text-xl font-semibold mt-4">7. Contact Information</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us.</p>

      <button onClick={handleAgree} className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Agree
      </button>
    </div>
  );
};

export default TermsOfService;