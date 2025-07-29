import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Papa from 'papaparse';

const GoogleSheetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedSheet, setSelectedSheet] = useState('Komitment Alat SBU');
  const [availableSheets] = useState(['Komitment Alat SBU', 'Jenis Alat']);
  const [showInfo, setShowInfo] = useState(true);

  const SHEET_ID = '1Thb57tW6slr9f5MIvaTmdLUgX2rOEvbKzK5lKB-OJDU';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${selectedSheet}`;
        const response = await fetch(url);
        const csvText = await response.text();
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        setData(parsed.data);
        setError(null);
      } catch (err) {
        setError('Gagal memuat data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSheet]);

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const headers = Object.keys(data[0] || {});
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) {
    return <div className="p-6 text-center text-gray-500 animate-pulse">⏳ Memuat data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full">
      <Navbar/>
        
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="mb-6">
              <div className="bg-blue-50 border mt-20 border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>  
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Informasi</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>Data di bawah ini diambil secara real-time dari database kami dan menampilkan informasi pemenuhan SBU badan usaha.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="px-6 py-4 bg-blue-700 text-white flex items-center justify-between cursor-pointer select-none" onClick={() => setShowInfo(!showInfo)}>
          <h2 className="text-xl font-bold">Penjelasan Kewajiban Registrasi Peralatan untuk Badan Usaha Pemilik SBU</h2>
          <ChevronDown className={`transition-transform duration-300 ${showInfo ? 'rotate-180' : ''}`} />
        </div>

        {showInfo && (
          <div className="px-6 py-4 bg-blue-50 text-blue-900 border-b border-blue-200 text-sm space-y-2">
            <p>Setiap badan usaha yang telah memperoleh Sertifikat Badan Usaha (SBU) wajib melakukan registrasi peralatan melalui portal SIMPK. Surat Pernyataan Pemenuhan Peralatan hanya berlaku 1 bulan sejak terbitnya SBU.</p>
            <p>Registrasi ini adalah bagian dari verifikasi terhadap alat kerja agar sesuai dengan subklasifikasi dan bidang jasa konstruksi.</p>
            <div className="bg-white p-4 rounded-md shadow-inner">
              <h3 className="font-semibold">Dasar Hukum:</h3>
              <ul className="list-disc ml-5">
                <li>Peraturan LPJK Nomor 6 Tahun 2022</li>
                <li>Permen PUPR Nomor 8 Tahun 2022</li>
                <li>Surat Edaran LPJK terkait SIMPK</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md shadow-inner">
              <h3 className="font-semibold">Sanksi Jika Tidak Registrasi:</h3>
              <ul className="list-disc ml-5">
                <li>Status SBU dihentikan sementara</li>
                <li>Pencabutan permanen bila tidak dipenuhi</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md shadow-inner">
              <h3 className="font-semibold">📄 Dokumen Resmi:</h3>
              <ul className="list-decimal ml-5 space-y-1">
                <li><b>Peraturan menteri PUPR No. 8/2022</b> — Tata cara pemenuhan sertifikat. <a href="/2022pmpupr8.pdf" className="underline text-blue-600" target="_blank" download>📎 Download</a></li>
                <li><b>SE LPJK No. 2/2024</b> — Batas pencatatan alat di SIMPK</li>
                <li><b>SE LPJK No. 18/2021</b> — Pedoman pencatatan SBU/SKK. <a href="/ilide.info-pedoman-pencatatan-sertifikat-badan-usaha-dan-sertifikat-kompetensi-kerja-konstr-pr_9041a258cc613b352994f291319b16ad.pdf" className="underline text-blue-600" target="_blank" download>📎 Download</a></li>
                <li><b>SE Menteri PUPR BK-10MM75/2024</b> — Sanksi administratif pencabutan SBU</li>
              </ul>
            </div>
          </div>
        )}

        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <label htmlFor="sheetSelect" className="text-sm font-medium text-gray-700">Pilih Sheet:</label>
            <select
              id="sheetSelect"
              className="block pl-3 pr-10 py-2 text-sm border-gray-300 rounded-md shadow-sm"
              value={selectedSheet}
              onChange={(e) => {
                setSelectedSheet(e.target.value);
                setCurrentPage(1);
              }}
            >
              {availableSheets.map((sheet, idx) => (
                <option key={idx} value={sheet}>{sheet}</option>
              ))}
            </select>
          </div>

          <input
            type="text"
            className="block w-full sm:w-64 pl-3 pr-3 py-2 border border-gray-300 rounded-md text-sm"
            placeholder="Cari data..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header, idx) => (
                  <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {headers.map((header, colIdx) => (
                    <td key={colIdx} className={`px-4 py-3 text-sm ${header === 'Status Pemenuhan' ? (row[header] === 'Sudah' ? 'bg-green-200 font-semibold' : 'bg-red-400 font-semibold') : 'text-gray-900'}`}>
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-6 py-3 bg-gray-50 flex justify-end flex-wrap gap-2">
            {[...Array(totalPages)].map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm border ${
                    currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}

        <div className="px-6 py-3 bg-gray-50 text-sm text-gray-500 text-right">
          Data diperbarui dari Database
        </div>
      </div>
    </div>
  );
};

export default GoogleSheetData;
