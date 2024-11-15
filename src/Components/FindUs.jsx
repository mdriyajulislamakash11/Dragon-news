import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
        <h2 className="font-semibold mb-5 mt-28">Find Us On</h2>
        <div className="*:w-full space-y-2">
          <button className="btn justify-start"><FaFacebook />Facebook</button>
          <button className="btn justify-start"><FaTwitter />Twitter</button>
          <button className="btn justify-start"><FaInstagram />Instagram</button>
        </div>
      </div>
    );
};

export default FindUs;