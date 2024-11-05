import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const submitHandler = async (event) => {
    if (!formData.firstName || !formData.lastName || !formData.email || formData.country === "select") {
      alert("Please fill in all required fields.");
      return;
    }
    event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data); // Log the response from the server
            if (data.success) {
                alert('User registered successfully!');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error during registration.');
        }
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Application Form</h1>
      <form className="space-y-2" onSubmit={submitHandler}>
        <label htmlFor="firstName" className="text-gray-900 leading-6 text-sm font-medium">
          First Name <br />
        </label>
        <input
          type="text"
          onChange={changeHandler}
          value={formData.firstName}
          name="firstName"
          id="firstName"
          placeholder="First Name"
          className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
        />
        <br />

        <label htmlFor="lastName" className="text-gray-900 leading-6 text-sm font-medium">
          Last Name <br />
          <input
            type="text"
            onChange={changeHandler}
            value={formData.lastName}
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />
        </label>
        <br />

        <label htmlFor="email" className="text-gray-900 leading-6 text-sm font-medium">
          Email <br />
          <input
            type="email"
            onChange={changeHandler}
            value={formData.email}
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />
        </label>
        <br />

        <label htmlFor="country" className="text-gray-900 leading-6 text-sm font-medium">
          Country <br />
          <select
            name="country"
            id="country"
            onChange={changeHandler}
            value={formData.country}
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          >
            <option value="select">Please Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="belgium">Belgium</option>
            <option value="france">France</option>
            <option value="singapore">Singapore</option>
          </select>
        </label>
        <br />

        <label htmlFor="streetAddress" className="text-gray-900 leading-6 text-sm font-medium">
          Street address <br />
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            onChange={changeHandler}
            value={formData.streetAddress}
            placeholder="Street address"
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />
        </label>
        <br />

        <label htmlFor="city" className="text-gray-900 leading-6 text-sm font-medium">
          City <br />
          <input
            type="text"
            id="city"
            name="city"
            onChange={changeHandler}
            value={formData.city}
            placeholder="City"
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />
        </label>
        <br />

        <label htmlFor="state" className="text-gray-900 leading-6 text-sm font-medium">
          State / Province <br />
          <input
            type="text"
            id="state"
            name="state"
            onChange={changeHandler}
            value={formData.state}
            placeholder="State"
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />
        </label>
        <br />

        <label htmlFor="postalCode" className="text-gray-900 leading-6 text-sm font-medium">
          ZIP / Postal code
          <br />
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            onChange={changeHandler}
            value={formData.postalCode}
            placeholder="Zip Code"
            className="w-full border mt-2 rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal"
          />
        </label>
        <br />

        <fieldset className="mb-10">
          <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
          
          <div className="mt-4 space-y-2">
            <div className="flex">
              <input
                type="checkbox"
                name="comments"
                id="comments"
                checked={formData.comments}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 rounded"
              />
              <div className="flex flex-col ml-3">
                <label htmlFor="comments" className="text-sm font-semibold leading-6 text-gray-900">Comments</label>
                <p className="text-gray-500 text-sm">Get notified when someone posts a comment on a posting.</p>
              </div>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 rounded"
              />
              <div className="flex flex-col ml-3">
                <label htmlFor="candidates" className="text-sm font-semibold leading-6 text-gray-900">Candidates</label>
                <p className="text-gray-500 text-sm">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={formData.offers}
                onChange={changeHandler}
                className="h-4 w-4 mt-1 rounded"
              />
              <div className="flex flex-col ml-3">
                <label htmlFor="offers" className="text-gray-900 leading-6 text-sm font-medium">
                  Offers
                </label>
                <p className="text-gray-500 text-sm">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-10">
          <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notification</legend>
          <p className="text-gray-500">These are delivered via SMS to your mobile phone.</p>

          <div className="mt-4 space-y-2">
            <div className="flex gap-x-4">
              <input
                type="radio"
                name="pushNotifications"
                id="pushEverything"
                value="Everything"
                onChange={changeHandler}
              />
              <label htmlFor="pushEverything" className="text-gray-900 leading-6 text-sm font-medium">
                Everything
              </label>
            </div>
            <div className="flex gap-x-4">
              <input
                type="radio"
                name="pushNotifications"
                id="pushEmail"
                value="Same as email"
                onChange={changeHandler}
              />
              <label htmlFor="pushEmail" className="text-gray-900 leading-6 text-sm font-medium">
                Same as email
              </label>
            </div>
            <div className="flex gap-x-4">
              <input
                type="radio"
                name="pushNotifications"
                id="pushNothing"
                value="No push notification"
                onChange={changeHandler}
              />
              <label htmlFor="pushNothing" className="text-gray-900 leading-6 text-sm font-medium">
                No push notification
              </label>
            </div>
          </div>
        </fieldset>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
