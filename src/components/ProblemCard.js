import React, { useState } from 'react';
import Modal from 'react-modal';
import { problemsData } from '../data/problems';
import { 
  FaNetworkWired, 
  FaSignal, 
  FaWifi,
  FaTachometerAlt,
  FaShieldAlt,
  FaPlug,
  FaExclamationTriangle,
  FaCogs
} from 'react-icons/fa';
Modal.setAppElement('#root');


const ProblemCard = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const getIcon = (id) => {
    switch(id) {
      case 1: return <FaNetworkWired className="card-icon" />;
      case 2: return <FaSignal className="card-icon" />;
      case 3: return <FaWifi className="card-icon" />;
      case 4: return <FaTachometerAlt className="card-icon" />;
      case 5: return <FaShieldAlt className="card-icon" />;
      case 6: return <FaPlug className="card-icon" />;
      case 7: return <FaExclamationTriangle className="card-icon" />;
      case 8: return <FaCogs className="card-icon" />;
      default: return <FaNetworkWired className="card-icon" />;
    }
  };


  return (
    <div className="problem-grid">
      {problemsData.map((problem) => (
        <div 
          key={problem.id} 
          className="problem-card"
          onClick={() => setSelectedProblem(problem)}
        >
          {getIcon(problem.id)}
          <h3>{problem.title}</h3>
          <p>{problem.problem}</p>
        </div>
      ))}

      <Modal
        isOpen={!!selectedProblem}
        onRequestClose={() => setSelectedProblem(null)}
        className="solution-modal"
        overlayClassName="modal-overlay"
      >
        {selectedProblem && (
          <div>
            <h2>Solution pour: {selectedProblem.title}</h2>
            <p>{selectedProblem.solution}</p>
            <button onClick={() => setSelectedProblem(null)}>Fermer</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProblemCard;