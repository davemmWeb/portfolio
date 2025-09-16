import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones.
        console.log('Formulario enviado:', formData);
    };


  const handleDownloadPdf = () => {
    const doc = new jsPDF();    
    autoTable(doc, { html: '#my-table' });
    doc.save('formulario.pdf');
  };

  return (
    <div className="p-8 rounded-lg shadow-lg bg-bgTwo w-full max-w-md text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Formulario PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third"
            rows={4}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button type="submit" className="px-6 py-2 font-medium text-white bg-primary rounded hover:bg-primary-dark transition-colors">Enviar</button>
          <button type="button" onClick={handleDownloadPdf} className="px-6 py-2 font-medium text-white bg-third rounded hover:bg-third-dark transition-colors">
            Descargar PDF
          </button>
        </div>
        {/* La tabla se oculta para no ser visible en la UI, solo para la generación del PDF */}
        <table id="my-table" className="hidden">
            <thead>
                <tr>
                    <th>Campo</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nombre</td>
                    <td>{formData.nombre}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{formData.email}</td>
                </tr>
                <tr>
                    <td>Mensaje</td>
                    <td>{formData.mensaje}</td>
                </tr>
            </tbody>
        </table>
      </form>
    </div>
  );
};

export default Form;
