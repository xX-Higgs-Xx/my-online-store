import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalSizeChart = ({ isOpen, onRequestClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('camisa_manga_larga');

  const sizeCharts = {
    camisa_manga_larga: [
      { size: 'Chica', shoulder: '15', backLength: '74', chest: '102', waist: '101', sleeve: '62' },
      { size: 'Mediana', shoulder: '15.5', backLength: '76', chest: '106', waist: '105', sleeve: '63' },
      { size: 'Grande', shoulder: '16', backLength: '78', chest: '110', waist: '109', sleeve: '65' },
      { size: 'XL', shoulder: '16.5', backLength: '80', chest: '114', waist: '113', sleeve: '67' },
      { size: 'XXL', shoulder: '17', backLength: '82', chest: '118', waist: '117', sleeve: '69' },
    ],
    pantalones: [
      { size: '28', waist: '87', hip: '97', rise: '15', inseam: '100', leg: '76' },
      { size: '30', waist: '91', hip: '102', rise: '16', inseam: '101', leg: '84' },
      { size: '32', waist: '95', hip: '104', rise: '16.5', inseam: '102', leg: '88' },
      { size: '34', waist: '99', hip: '106', rise: '17', inseam: '103', leg: '89' },
      { size: '36', waist: '102', hip: '112', rise: '18', inseam: '106', leg: '92' },
    ],
    camisa_manga_corta: [
      { size: 'Chica', shoulder: '15', backLength: '74', chest: '102', waist: '101', sleeve: '19.5' },
      { size: 'Mediana', shoulder: '15.5', backLength: '76', chest: '106', waist: '105', sleeve: '20' },
      { size: 'Grande', shoulder: '16', backLength: '78', chest: '110', waist: '109', sleeve: '20.5' },
      { size: 'XL', shoulder: '16.5', backLength: '80', chest: '114', waist: '113', sleeve: '21' },
      { size: 'XXL', shoulder: '17', backLength: '82', chest: '118', waist: '117', sleeve: '21.5' },
    ],
    polos: [
      { size: 'Chica', shoulder: '15', backLength: '68', chest: '102', waist: '100', sleeve: '20', arm: '35' },
      { size: 'Mediana', shoulder: '15.5', backLength: '70', chest: '106', waist: '104', sleeve: '20.5', arm: '36' },
      { size: 'Grande', shoulder: '16', backLength: '72', chest: '112', waist: '106', sleeve: '21', arm: '37' },
      { size: 'XL', shoulder: '16.5', backLength: '74', chest: '116', waist: '114', sleeve: '21.5', arm: '38' },
      { size: 'XXL', shoulder: '17', backLength: '76', chest: '122', waist: '116', sleeve: '22', arm: '39' },
    ],
    americanas: [
      { size: 'Chica', shoulder: '14', chest: '99', waist: '99', sleeve: '63', arm: '42' },
      { size: 'Mediana', shoulder: '15', chest: '110', waist: '110', sleeve: '66', arm: '44' },
      { size: 'Grande', shoulder: '15.5', chest: '116', waist: '116', sleeve: '69', arm: '46' },
      { size: 'XL', shoulder: '16', chest: '120', waist: '120', sleeve: '70', arm: '48' },
      { size: 'XXL', shoulder: '16.5', chest: '124', waist: '124', sleeve: '72', arm: '50' },
    ],
    bomber: [
      { size: 'Chica', shoulder: '14', chest: '108', waist: '108', sleeve: '57', arm: '40' },
      { size: 'Mediana', shoulder: '15', chest: '120', waist: '120', sleeve: '60', arm: '42' },
      { size: 'Grande', shoulder: '16', chest: '128', waist: '128', sleeve: '62', arm: '44' },
      { size: 'XL', shoulder: '17', chest: '136', waist: '136', sleeve: '64', arm: '46' },
      { size: 'XXL', shoulder: '17.5', chest: '142', waist: '142', sleeve: '65', arm: '47' },
    ],
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Size Chart"
      className="modal z-10 min-w-full"
      overlayClassName="overlay"
    >
      <div className="flex justify-around mb-4 px-48">
        {Object.keys(sizeCharts).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 mx-5 py-1 rounded-md min-w-max text-white ${selectedCategory === category ? 'bg-orange-400' : 'bg-black'}`}
          >
            {category.replace(/_/g, ' ').toUpperCase()}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Tabla de Tallas</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Talla</th>
              {selectedCategory === 'pantalones' ? (
                <>
                  <th className="border-b py-2">Cintura (cm)</th>
                  <th className="border-b py-2">Cadera (cm)</th>
                  <th className="border-b py-2">Largo Cierre (cm)</th>
                  <th className="border-b py-2">Largo Pantalón (cm)</th>
                  <th className="border-b py-2">Pierna (cm)</th>
                </>
              ) : (
                <>
                  <th className="border-b py-2">Hombro (cm)</th>
                  <th className="border-b py-2">Largo Espalda (cm)</th>
                  <th className="border-b py-2">Pecho (cm)</th>
                  <th className="border-b py-2">Cintura (cm)</th>
                  {selectedCategory !== 'camisa_manga_larga' && selectedCategory !== 'camisa_manga_corta' && (
                    <th className="border-b py-2">Manga Larga (cm)</th>
                  )}
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {sizeCharts[selectedCategory].map((row, index) => (
              <tr key={index}>
                <td className="border-b py-2">{row.size}</td>
                <td className="border-b py-2">{row.shoulder || row.waist}</td>
                <td className="border-b py-2">{row.backLength || row.hip}</td>
                <td className="border-b py-2">{row.chest || row.rise}</td>
                <td className="border-b py-2">{row.waist || row.inseam}</td>
                {selectedCategory !== 'pantalones' && selectedCategory !== 'camisa_manga_larga' && selectedCategory !== 'camisa_manga_corta' && (
                  <td className="border-b py-2">{row.sleeve || row.arm}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={onRequestClose} className="mt-4 bg-black text-white px-4 py-2 rounded-md">
        Cerrar
      </button>
    </Modal>
  );
};

export default ModalSizeChart;
