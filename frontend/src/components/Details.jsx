import React from 'react';
import './Details.css';
import images from './images/aa031927b46ce3532994f82550b2db30.webp';
import images2 from './images/download.jpeg';
import images3 from './images/images.jpeg';
import man from './images/man.jpg' ;
const UserDetailsWithImages = ({ userData }) => {
  return (
    <div className="details-container flex">
      {/* Left Section: User and Extracted Details */}
      <div className="details-content w-3/5 p-6">
        {/* User Details Section */}
        <section id="profile_management" className="space-y-6 element-highlight">
          <div className="bg-white rounded-lg border border-neutral-300 p-6">
  <div className="text-center space-y-4">
    <img
      className="h-24 w-24 rounded-full mx-auto"
      src={man}
      alt="Profile"
      loading="lazy"
    />
    <div>
      <h3 className="text-lg font-medium text-black">Manoj Gupta</h3>
      <p className="text-neutral-500">USER ID: 89223</p>
    </div>
    <div className="border-t border-neutral-300 pt-4">
    <dl className="space-y-4">
  {/* First row: Phone Number and Location */}
  <div className='flex justify-between'>
    <div>
      <dt className="text-sm text-neutral-500">Phone Number</dt>
      <dd className="text-black">9858563652</dd>
    </div>
    <div>
      <dt className="text-sm text-neutral-500">Location</dt>
      <dd className="text-black">Delhi, India</dd>
    </div>
  </div>

  {/* Second row: Address and Policy Number */}
  <div className='flex justify-between'>
    <div>
      <dt className="text-sm text-neutral-500">Address</dt>
      <dd className="text-black">123, MG Road, Delhi</dd>
    </div>
    <div>
      <dt className="text-sm text-neutral-500">Policy Number</dt>
      <dd className="text-black">LIC789456123</dd>
    </div>
  </div>
</dl>
    </div>
  </div>
</div>
        </section>

        {/* Extracted Details Section */}
        <div className="bg-white rounded-lg border border-neutral-300 p-6 mt-6 flex justify-between items-center">
  {/* Left: Extracted Details from Images */}
  <div className="extracted-details">
    <h3 className="text-lg font-medium text-black mb-4">Extracted Details from Images</h3>
    <ul className="space-y-2">
      <li>
        <strong>Aadhar Number:</strong> 2943 6593 3461
      </li>
      <li>
        <strong>Policy Number:</strong> L
      </li>
      <li>
        <strong>Bill Amount:</strong> ₹15,000
      </li>
      <li>
        <strong>Issue Date:</strong> 12th December 2023
      </li>
      <li>
        <strong>Validity:</strong> 5 Years
      </li>
    </ul>
  </div>

  {/* Right: Fake Insurance Claim */}
  <div className="fake-claim text-red-600 font-bold text-xl">
  Details does not match <br/>with the user profile<br/><br/>FAKE INSURANCE CLAIM
    
  </div>
</div>
      </div>

      {/* Right Section: Images */}
      <div className="images-section w-2/5 p-6 flex flex-col items-center space-y-4">
      <img src={images} alt="Uploaded Image 1" className="image" style={{ width: '100%', maxHeight: '300px' }} />
<p className="image-name">Aadhar Card</p>

<div className="flex justify-between w-full">
  <div className="image-container" style={{ width: '48%' }}>
    <img
      src={images2}
      alt="Uploaded Image 2"
      className="image"
      style={{ width: '100%', maxHeight: '300px' }}
    />
    <p className="image-name">Hospital Bill</p>
  </div>
  <div className="image-container" style={{ width: '48%' }}>
    <img
      src={images3}
      alt="Uploaded Image 3"
      className="image"
      style={{ width: '100%', maxHeight: '300px' }}
    />
    <p className="image-name">Report And Prescription</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default UserDetailsWithImages;
