import React, { useState } from 'react';
import './Signup.css'; // Reuse the styling
import { useNavigate } from 'react-router-dom';

const InsuranceClaimForm = () => {
  const [formData, setFormData] = useState({
    policyHolderName: '',
    nomineeName: '',
    policyNumber: '',
    claimType: '',
    files: [],
    deathCertificate: null,
    hospitalBills: null,
    garageBills: null,
    damagePhotos: null,
    prescriptionReports: null,
    aadharCard: null,
  });
  const [loading, setLoading] = useState(false); // For managing the loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const newFiles = [...e.target.files];
    setFormData({ ...formData, files: [...formData.files, ...newFiles] });
  };

  const handleFileRemove = (index) => {
    const updatedFiles = formData.files.filter((_, i) => i !== index);
    setFormData({ ...formData, files: updatedFiles });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Claim data submitted:', formData);
    
    setLoading(true); // Set loading state to true

    // Set a 10-second delay before redirecting
    setTimeout(() => {
      setLoading(false); // Stop loading
      navigate('/dashboard'); // Redirect after the delay
    }, 10000); // 10 seconds delay
  };

  const navigate = useNavigate();

  return (
    <div className="signup-form-container">
      <div className="form-wrapper">
        <h2>Submit Insurance Claim</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="policyHolderName"
            placeholder="Name of Policy Holder"
            value={formData.policyHolderName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nomineeName"
            placeholder="Name of Nominee"
            value={formData.nomineeName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="policyNumber"
            placeholder="Policy Number"
            value={formData.policyNumber}
            onChange={handleChange}
            required
          />

          {/* Claim Type Selection */}
          <select
            className="bg-neutral-700 text-white p-2 rounded-lg w-800"
            name="claimType"
            value={formData.claimType}
            onChange={handleChange}
            required
          >
            <option value="" className="bg-black text-white">
              Select Insurance Type
            </option>
            <option value="health" className="bg-black text-white">
              Health Insurance
            </option>
            <option value="life" className="bg-black text-white">
              Life Insurance
            </option>
            <option value="car" className="bg-black text-white">
              Car Insurance
            </option>
          </select>

          {/* Conditional File Inputs Based on Claim Type */}
          {formData.claimType === 'life' && (
            <>
              <div className="file-input-container">
                <label>Upload Death Certificate</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'deathCertificate')}
                />
                <div className="file-preview-container">
                  {formData.deathCertificate &&
                    formData.deathCertificate.map((file, index) => (
                      <div key={index} className="file-preview">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index, 'deathCertificate')}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              <div className="file-input-container">
                <label>Upload Medical Reports</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'hospitalBills')}
                />
                <div className="file-preview-container">
                  {formData.hospitalBills &&
                    formData.hospitalBills.map((file, index) => (
                      <div key={index} className="file-preview">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index, 'hospitalBills')}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}

          {formData.claimType === 'car' && (
            <>
              <div className="file-input-container">
                <label>Upload Damage Photos (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'damagePhotos')}
                />
                <div className="file-preview-container">
                  {formData.damagePhotos &&
                    formData.damagePhotos.map((file, index) => (
                      <div key={index} className="file-preview">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index, 'damagePhotos')}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              <div className="file-input-container">
                <label>Upload Garage Bills (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'garageBills')}
                />
                <div className="file-preview-container">
                  {formData.garageBills &&
                    formData.garageBills.map((file, index) => (
                      <div key={index} className="file-preview">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index, 'garageBills')}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}

          {formData.claimType === 'health' && (
            <>
              <div className="file-input-container">
                <label>Upload Hospital Bills </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'hospitalBills')}
                />
                <div className="file-preview-container">
                  {formData.hospitalBills &&
                    formData.hospitalBills.map((file, index) => (
                      <div key={index} className="file-preview">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index, 'hospitalBills')}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              </div>

              <div className="file-input-container">
                <label>Upload Prescription & Reports </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'prescriptionReports')}
                />
                <div className="file-preview-container">
                  {formData.prescriptionReports &&
                    formData.prescriptionReports.map((file, index) => (
                      <div key={index} className="file-preview">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleFileRemove(index, 'prescriptionReports')}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}

          {/* Upload Aadhar Card */}
          <div className="file-input-container">
            <label>Upload Aadhar Card </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, 'aadharCard')}
            />
            <div className="file-preview-container">
              {formData.aadharCard &&
                formData.aadharCard.map((file, index) => (
                  <div key={index} className="file-preview">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleFileRemove(index, 'aadharCard')}
                    >
                      Remove
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <button type="submit" className="submit-button">
            {loading ? 'Submitting...' : 'Submit Claim'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsuranceClaimForm;
