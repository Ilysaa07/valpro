import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const GoogleSheetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedSheet, setSelectedSheet] = useState('Komitment Alat SBU');
  const [availableSheets] = useState([
    'Komitment Alat SBU',
    'Jenis Alat'
  ]);
  const [showInfo, setShowInfo] = useState(true);

  const SHEET_ID = '1Thb57tW6slr9f5MIvaTmdLUgX2rOEvbKzK5lKB-OJDU';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const directUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${selectedSheet}`;
        const directResponse = await fetch(directUrl, {
          mode: 'cors',
          headers: {
            'Accept': 'text/csv',
          }
        });

        if (directResponse.ok) {
          const csvData = await directResponse.text();
          const rows = csvData.split('\n').filter(row => row.trim() !== '');
          if (rows.length > 1) {
            const headers = rows[0].split(',').map(header => header.replace(/"/g, '').trim());
            const parsedData = rows.slice(1).map(row => {
              const values = row.split(',').map(value => value.replace(/"/g, '').trim());
              const rowData = {};
              headers.forEach((header, index) => {
                rowData[header] = values[index] || '';
              });
              return rowData;
            }).filter(row => Object.values(row).some(value => value !== ''));

            setData(parsedData);
            setError(null);
            return;
          }
        }
      } catch {
        setError('Gagal memuat data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSheet]);

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="p-6 text-gray-500">Memuat data...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  const headers = Object.keys(data[0] || {});

  return (
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-blue-700 text-white cursor-pointer select-none flex items-center justify-between" onClick={() => setShowInfo(!showInfo)}>
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
                <li><b>Peraturan menteri PUPR No. 8/2022</b> — Tata cara pemenuhan sertifikat. <a href="/2022pmpupr8.pdf" className="underline text-blue-600" target="_blank"  download="Peraturan-PUPR-8-2022.pdf">📎 Download</a></li>
                <li><b>SE LPJK No. 2/2024</b> — Batas pencatatan alat di SIMPK</li>
                <li><b>SE LPJK No. 18/2021</b> — Pedoman pencatatan SBU/SKK. <a href="/ilide.info-pedoman-pencatatan-sertifikat-badan-usaha-dan-sertifikat-kompetensi-kerja-konstr-pr_9041a258cc613b352994f291319b16ad.pdf" className="underline text-blue-600" target="_blank" download="Pedoman-Pencatatan-SBU-SKK.pdf">📎 Download</a></li>
                <li><b>SE Menteri PUPR BK-10MM75/2024</b> — Sanksi administratif pencabutan SBU</li>
              </ul>
            </div>
          </div>
        )}

        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <label htmlFor="sheetSelect" className="text-sm font-medium text-gray-700">
              Pilih Sheet:
            </label>
            <select
              id="sheetSelect"
              className="block w-auto pl-3 pr-10 py-2 text-sm border-gray-300 rounded-md shadow-sm"
              value={selectedSheet}
              onChange={(e) => {
                setSelectedSheet(e.target.value);
                setCurrentPage(1);
              }}
            >
              {availableSheets.map((sheet, index) => (
                <option key={index} value={sheet}>{sheet}</option>
              ))}
            </select>
          </div>

          <input
            type="text"
            className="ml-auto block w-64 pl-3 pr-3 py-2 border border-gray-300 rounded-md text-sm"
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
                {headers.map((header, index) => (
                  <th key={index} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} className={`px-4 py-3 text-sm ${header === 'Status Pemenuhan' ? (row[header] === 'Sudah' ? 'bg-green-200 font-semibold' : 'bg-red-200 font-semibold') : 'text-gray-900'}`}>
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-6 py-3 bg-gray-50 flex justify-end">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`mx-1 px-3 py-1 rounded-md text-sm border ${
                    currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}

        <div className="px-6 py-3 bg-gray-50 text-sm text-gray-500">
          Data diperbarui dari Database
        </div>
      </div>
    </div>
  );
};

export default GoogleSheetData;
