import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
        // Nuevos campos del formulario de la imagen
        vehiculo: '',
        tipoServicio: '',
        marca: '',
        modelo: '',
        anio: '',
        valorComercial: '',
        cuotaInicial: '',
        valorFinanciar: '',
        ejecutivoVentas: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();    
    
    // 1. Añade un título al documento
    doc.text("Detalles del Formulario", 14, 20);

    // 2. Prepara los datos para la tabla
    const tableData = Object.entries(formData).map(([key, value]) => {
        // Opcional: Formatear las claves para que se vean mejor
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        return [formattedKey, value];
    });

    // 3. Genera la tabla usando el array de datos
    autoTable(doc, {
        startY: 30, // Posición inicial de la tabla
        head: [['Campo', 'Valor']], // Encabezados de la tabla
        body: tableData,
    });

    doc.save('formulario.pdf');
  };

  return (
        <div className="p-8 rounded-lg shadow-lg bg-bgTwo w-full max-w-md text-white">
            <h2 className="text-2xl font-bold text-center mb-6">Formulario PDF</h2>
            <form className="space-y-6">
                {/* 3. CAMPOS ORIGINALES */}
                <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" rows={4} />
                </div>

                {/* 4. AÑADIR LOS NUEVOS CAMPOS DE LA IMAGEN */}
                <hr className="border-gray-600" />
                <h3 className="text-lg font-bold">Datos del Vehículo</h3>
                
                {/* Vehículo y Tipo de Servicio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="vehiculo">Vehículo:</label>
                        <select id="vehiculo" name="vehiculo" value={formData.vehiculo} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third">
                            <option value="">- Seleccione estado del vehículo -</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="tipoServicio">Tipo de Servicio:</label>
                        <select id="tipoServicio" name="tipoServicio" value={formData.tipoServicio} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third">
                            <option value="">- Servicio -</option>
                            <option value="Particular">Particular</option>
                            <option value="Público">Público</option>
                        </select>
                    </div>
                </div>

                {/* Marca y Modelo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" value={formData.marca} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="modelo">Modelo (versión):</label>
                        <input type="text" id="modelo" name="modelo" value={formData.modelo} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                    </div>
                </div>

                {/* Año y Valor Comercial */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="anio">Año:</label>
                        <input type="text" id="anio" name="anio" value={formData.anio} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="valorComercial">Valor Comercial:</label>
                        <input type="text" id="valorComercial" name="valorComercial" value={formData.valorComercial} onChange={handleChange} className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                    </div>
                </div>

                {/* Cuota Inicial y Valor a Financiar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="cuotaInicial">Cuota Inicial:</label>
                        <input type="text" id="cuotaInicial" name="cuotaInicial" value={formData.cuotaInicial} onChange={handleChange} className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium" htmlFor="valorFinanciar">Valor a Financiar:</label>
                        <input type="text" id="valorFinanciar" name="valorFinanciar" value={formData.valorFinanciar} onChange={handleChange} className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third" />
                    </div>
                </div>

                {/* Ejecutivo de Ventas */}
                <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="ejecutivoVentas">Ejecutivo de Ventas:</label>
                    <select id="ejecutivoVentas" name="ejecutivoVentas" value={formData.ejecutivoVentas} onChange={handleChange} required className="w-full p-3 text-sm rounded bg-bgOne border border-gray-700 focus:border-third focus:ring-third">
                        <option value="">- Seleccione asesor -</option>
                        <option value="Asesor 1">Asesor 1</option>
                        <option value="Asesor 2">Asesor 2</option>
                    </select>
                </div>
                
                <div className="flex justify-center space-x-4">
                    <button type="button" onClick={handleDownloadPdf} className="px-6 py-2 font-medium text-white bg-third rounded hover:bg-third-dark transition-colors">
                        Descargar PDF
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
