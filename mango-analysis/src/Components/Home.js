import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'; // Make sure the import paths match your project structure
import Footer from './footer';
import AboutUs from './aboutUs.js';

function Home() {
  const navigate = useNavigate();
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

  const handleSubmit = () => {
    if (fileSelected) {
      navigate('./aboutUs');
    } else {
      alert('Please select a file before submitting.');
      // You can replace the alert with any validation message or UI behavior you prefer.
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center p-4 mt-16">
        <div className="relative min-h-full w-32 ...">
          <div className="absolute inset-0 ... ">
            <div className="grid items-center justify-center grid-rows-2 p-4 mt-16 text-xl font-bold">
              <div>
                <h3>Add Your Image To Find consumable mangoes</h3>
              </div>
              <br></br>
              <div className="mt-4">
                <input
                  type="file"
                  id="imageUpload"
                  name="imageUpload"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label htmlFor="imageUpload">Upload Image</label>
              </div>
              <br></br>
              <br></br>
              <form>
                <button
                  type="button" // Change to type="button" to prevent form submission
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover-bg-blue-700"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
