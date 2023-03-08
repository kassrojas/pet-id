import { useState } from "react";
import "./AddPet.css";

const AddPet = () => {
  const [petName, setPetName] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [fixed, setFixed] = useState("");
  const [address, setAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerNum, setOwnerNum] = useState("");
  const [emergName, setEmergName] = useState("");
  const [emergNum, setEmergNum] = useState("");


  return (
    <div className="addPet">
      <h1>Add New Pet</h1>
      <form>
        <label>Pet Name:</label>
        <input
          type="text"
          required
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <label>DOB:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label>Current Weight (lbs):</label>
        <input
          type="number"
          placeholder="35"
          min="0"
          max="250"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label>Type Of Animal:</label>
        <input
          type="text"
          placeholder="Dog"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Breed:</label>
        <input
          type="text"
          placeholder="Mixed Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <label>Sex:</label>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Neutered/Spayed:</label>
        <select
          value={fixed}
          onChange={(e) => setFixed(e.target.value)}
        >
          <option value="fixed">Yes</option>
          <option value="notFixed">No</option>
          <option value="decline">Decline To Answer</option>
        </select>
        <label>Pet Address:</label>
        <textarea
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Owner Name:</label>
        <input
          type="text"
          required
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <label for="phone">Owner Phone Number:</label>
        <small>Format: 123-456-7890</small>
        <input
          type="tel"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={ownerNum}
          onChange={(e) => setOwnerNum(e.target.value)}
        />
        <label>Emergency Contact Name:</label>
        <input
          type="text"
          value={emergName}
          onChange={(e) => setEmergName(e.target.value)}
        />
        <label>Emergency Contact Number:</label>
        <small>Format: 123-456-7890</small>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={emergNum}
          onChange={(e) => setEmergNum(e.target.value)}
        />
        <p>
          {petName} {dob} {weight} {type} {breed} {sex} {fixed} {address} {ownerName} {ownerNum} {emergName} {emergNum}
        </p>
        <button>Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
