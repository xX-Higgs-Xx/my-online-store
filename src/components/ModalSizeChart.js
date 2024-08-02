// src/components/ModalSizeChart.js
import React from 'react';
import Modal from 'react-modal';

const ModalSizeChart = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Size Chart"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="p-4 bg-white rounded-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Tabla de Tallas</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Talla</th>
              <th className="border-b py-2">Pecho (cm)</th>
              <th className="border-b py-2">Cintura (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2">XS</td>
              <td className="border-b py-2">78-82</td>
              <td className="border-b py-2">62-66</td>
            </tr>
            <tr>
              <td className="border-b py-2">S</td>
              <td className="border-b py-2">83-87</td>
              <td className="border-b py-2">67-71</td>
            </tr>
            <tr>
              <td className="border-b py-2">M</td>
              <td className="border-b py-2">88-92</td>
              <td className="border-b py-2">72-76</td>
            </tr>
            <tr>
              <td className="border-b py-2">L</td>
              <td className="border-b py-2">93-97</td>
              <td className="border-b py-2">77-81</td>
            </tr>
            <tr>
              <td className="border-b py-2">XL</td>
              <td className="border-b py-2">98-102</td>
              <td className="border-b py-2">82-86</td>
            </tr>
          </tbody>
        </table>
        <button onClick={onRequestClose} className="mt-4 bg-black text-white px-4 py-2 rounded-md">
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ModalSizeChart;
