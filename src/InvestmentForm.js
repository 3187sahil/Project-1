import React, { useState } from "react";
import "./InvestmentForm.css";


const InvestmentForm = () => {
   
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    investmentName: "",
    sponsorName: "",
    territoryName: "",
    verticalFocus: "",
    horizontalFocus: "",
    territoryBenefitted: "",
    benefitDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Investment Request Submitted:", formData);
    alert("Investment request submitted successfully!");
    setFormData({
      name: "",
      date: "",
      investmentName: "",
      sponsorName: "",
      territoryName: "",
      verticalFocus: "",
      horizontalFocus: "",
      territoryBenefitted: "",
      benefitDetails: "",
    });
    
  };

  return (
    <div className="investment-form-container">
      <h2>Create Investment Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="investmentName">Investment Name:</label>
          <input
            type="text"
            id="investmentName"
            name="investmentName"
            maxLength="50"
            value={formData.investmentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sponsorName">Primary Investment Sponsor Name:</label>
          <input
            type="text"
            id="sponsorName"
            name="sponsorName"
            value={formData.sponsorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="territoryName">Territory Name:</label>
          <input
            type="text"
            id="territoryName"
            name="territoryName"
            value={formData.territoryName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="verticalFocus">Primary Vertical Focus:</label>
          <input
            type="text"
            id="verticalFocus"
            name="verticalFocus"
            value={formData.verticalFocus}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="horizontalFocus">Primary Horizontal Focus:</label>
          <input
            type="text"
            id="horizontalFocus"
            name="horizontalFocus"
            value={formData.horizontalFocus}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="territoryBenefitted">
            Territory Expected to be Benefitted:
          </label>
          <input
            type="text"
            id="territoryBenefitted"
            name="territoryBenefitted"
            value={formData.territoryBenefitted}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="benefitDetails">
            How Will Each Territory be Benefitted:
          </label>
          <textarea
            id="benefitDetails"
            name="benefitDetails"
            value={formData.benefitDetails}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default InvestmentForm;
