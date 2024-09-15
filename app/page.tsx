import { AbbeyGlassHook } from "@/public/AbbeyGlassHook";
import { Button } from "@mui/material";
import AbbeyLogo from "../public/Abbey-Glass.png";
import BrandHook from "./components/brand-hook";
import BrandLogo from "./components/brand-logo";
import Prompt from "./components/prompt";
import ResponseBox from "./components/response-box";

export default function Home() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center gap-6">
      <div className="flex gap-2 items-center justify-center">
        <div className="font-bold md:text-5xl text-4xl text-center">
          Styled for You | Abbey Glass
        </div>
      </div>
      <BrandLogo img={AbbeyLogo} />
      <BrandHook hook={AbbeyGlassHook} />
      <div className="flex flex-col items-end rounded-md w-full md:w-4/5">
        <Prompt
          emojiString={"\u{1F389}"}
          description="Tell us about your event!"
          placeholderText="(Mother of, wedding, black tie, cocktail,
            daytime)"
          topic="event"
        />
        <Prompt
          emojiString={"\u{1F60A}"}
          description="Tell us about yourself"
          topic="yourself"
          placeholderText="(age, location, style, favorite
            color, favorite brands)"
        />
        <Prompt
          emojiString={"\u{1F4CF}"}
          description="Tell us about your shape"
          topic="shape"
          placeholderText="(size, body considerations, coverage on
            arms/legs)"
        />
      </div>
      <ResponseBox />
      <div className="flex w-full md:w-4/5 justify-end">
        <Button
          style={{ display: "flex", gap: "4px", color: "white" }}
          variant="contained"
          disabled={false}
          color="secondary"
        >
          <div>{"\u{2728}"}</div>
          <div className="font-bold">Style for me</div>
        </Button>
      </div>
      <div className="flex w-full md:w-4/5 justify-end"></div>
    </div>

    import React, { useState } from "react";
import "./App.css"; // Add your custom CSS here

const App = () => {
  const [step, setStep] = useState(1); // Start at step 1 (1st flow)
  const [selectedDress, setSelectedDress] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [userResponses, setUserResponses] = useState({
    event: "",
    yourself: "",
    shape: "",
  });

  const dresses = [
    { id: 1, img: "https://via.placeholder.com/200", description: "Dress 1" },
    { id: 2, img: "https://via.placeholder.com/200", description: "Dress 2" },
    { id: 3, img: "https://via.placeholder.com/200", description: "Dress 3" },
  ];

  const accessories = [
    { id: 1, img: "https://via.placeholder.com/200", description: "Handbag 1" },
    { id: 2, img: "https://via.placeholder.com/200", description: "Handbag 2" },
    { id: 3, img: "https://via.placeholder.com/200", description: "Handbag 3" },
  ];

  const proceedToNextStep = (nextStep) => setStep(nextStep);

  const handleDressSelect = (dress) => {
    setSelectedDress(dress);
    proceedToNextStep(3); // Move to the 3rd flow
  };

  const handleAccessorySelect = (accessory) => {
    setSelectedAccessory(accessory);
    proceedToNextStep(4); // Move to the final 4th flow
  };

  // Function to handle form input and transition to 2nd flow
  const handleStyleForMeClick = () => {
    proceedToNextStep(2); // Transition to the 2nd flow
  };

  return (
    <div className="container">
      {step === 1 && (
        <FirstFlow
          userResponses={userResponses}
          setUserResponses={setUserResponses}
          onProceed={handleStyleForMeClick}
        />
      )}
      {step === 2 && (
        <SecondFlow
          dresses={dresses}
          onDressSelect={handleDressSelect}
        />
      )}
      {step === 3 && (
        <ThirdFlow
          accessories={accessories}
          onAccessorySelect={handleAccessorySelect}
        />
      )}
      {step === 4 && (
        <FourthFlow
          selectedDress={selectedDress}
          selectedAccessory={selectedAccessory}
        />
      )}
    </div>
  );
};

// 1st Flow: Initial User Interaction (e.g., Preferences or Welcome)
const FirstFlow = ({ userResponses, setUserResponses, onProceed }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Styled for You | Abbey Glass</h2>
      <p>Say hello to effortless elegance with your personalized style journey.</p>

      <div className="accordion">
        {/* First question */}
        <h4>🎉 Tell us about your event!</h4>
        <textarea
          name="event"
          value={userResponses.event}
          onChange={handleInputChange}
          placeholder="Describe your event here..."
        />
        {/* Second question */}
        <h4>😊 Tell us about yourself</h4>
        <textarea
          name="yourself"
          value={userResponses.yourself}
          onChange={handleInputChange}
          placeholder="Tell us about yourself..."
        />
        {/* Third question */}
        <h4>📝 Tell us about your shape</h4>
        <textarea
          name="shape"
          value={userResponses.shape}
          onChange={handleInputChange}
          placeholder="Describe your body shape..."
        />
      </div>

      <button className="style-for-me-btn" onClick={onProceed}>
        ✨ Style for Me
      </button>

      <div className="current-responses">
        <h5>Current Responses (debug info)</h5>
        <p>Event: {userResponses.event}</p>
        <p>Yourself: {userResponses.yourself}</p>
        <p>Shape: {userResponses.shape}</p>
      </div>
    </div>
  );
};

// 2nd Flow: Select Dress
const SecondFlow = ({ dresses, onDressSelect }) => {
  return (
    <div>
      <h2>Styled for you</h2>
      <p>We've thought about your preferences. Here are your top 3 recommendations.</p>
      <div className="recommendations">
        {dresses.map((dress) => (
          <div
            key={dress.id}
            className="recommendation-card"
            onClick={() => onDressSelect(dress)}
          >
            <img src={dress.img} alt={`Dress ${dress.id}`} />
            <p>{dress.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3rd Flow: Select Accessory
const ThirdFlow = ({ accessories, onAccessorySelect }) => {
  return (
    <div>
      <h2>Complete the look with accessories</h2>
      <p>Choose from these handbags or jewelry to complement your look.</p>
      <div className="recommendations">
        {accessories.map((accessory) => (
          <div
            key={accessory.id}
            className="recommendation-card"
            onClick={() => onAccessorySelect(accessory)}
          >
            <img src={accessory.img} alt={`Accessory ${accessory.id}`} />
            <p>{accessory.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4th Flow: Package Selection and Checkout
const FourthFlow = ({ selectedDress, selectedAccessory }) => {
  return (
    <div>
      <h2>Your Selected Package</h2>
      <p>Here is your package for the event:</p>
      <div className="package">
        <div>
          <h4>Your Dress</h4>
          {selectedDress && <img src={selectedDress.img} alt="Selected Dress" />}
          <div className="size-options">
            <span className="size-btn">XS</span>
            <span className="size-btn">S</span>
            <span className="size-btn">M</span>
            <span className="size-btn">L</span>
            <span className="size-btn">XL</span>
          </div>
        </div>
        <div>
          <h4>Your Accessory</h4>
          {selectedAccessory && (
            <img src={selectedAccessory.img} alt="Selected Accessory" />
          )}
          <div className="color-options">
            <span className="color-btn">Black</span>
            <span className="color-btn">Green</span>
            <span className="color-btn">Yellow</span>
          </div>
        </div>
        <div>
          <button className="checkout-btn">Add to Cart and Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default App;
  );
}
