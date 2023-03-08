import "./AddPet.css";

const AddPet = () => {
  return (
    <div className="addPet">
      <h1>Add New Pet</h1>
      <form>
        <label>Pet Name:</label>
        <input type="text" required />
        <label>DOB:</label>
        <input type="date" />
        <label>Current Weight (lbs):</label>
        <input type="number" value="10" />
        <label>Type Of Animal:</label>
        <input type="text" />
        <label>Breed:</label>
        <input type="text" />
        <label>Sex:</label>
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="decline">Decline To Answer</option>
        </select>
        <label>Neutered/Spayed:</label>
        <select>
          <option value="neutered">Neutered</option>
          <option value="spayed">Spayed</option>
          <option value="notFixed">Neither</option>
          <option value="decline">Decline To Answer</option>
        </select>
        <label>Pet Address:</label>
        <textarea type="text" />
        <label>Owner Name:</label>
        <input type="text" required />
        <label>Owner Phone Number:</label>
        <input type="text" required />
        <label>Emergency Contact Name:</label>
        <input type="text" />
        <label>Emergency Contact Number:</label>
        <input type="text" />
        <button>Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
