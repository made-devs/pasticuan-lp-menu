const StepList = [
  {
    number: 1,
    text: "Investor wajib memiliki visi yang sama dengan PASTICUAN group yang menciptakan jutaan pengusaha baru",
  },
  {
    number: 2,
    text: "Investor menetapkan jumlah quantity quota member dengan minimum adalah 1000 member atau 1.500.000.000 rupiah",
  },
  {
    number: 3,
    text: "Management PASTICUAN investment tidak menampung dana investor, 100% dana investasi dipegang oleh investor",
  },
  {
    number: 4,
    text: "Management PASTICUAN akan mencarikan member potensial yang ingin bergabung namun terkendala terbatasnya dana untuk biaya keanggotaan",
  },
  {
    number: 5,
    text: "Ketika sudah melewati analisa kelayakan, maka data akan dikirim ke investor untuk melihat aplikasi investasi",
  },
  {
    number: 6,
    text: "Investor memproses aktivasi akun dan top up keanggotaan member. Dengan mentransfer langsung ke akun resmi member sesuai sistem PASTICUAN investment",
  },
  {
    number: 7,
    text: "Setelah akun member sudah aktif maka member akan menjalankan pekerjaan melalui referer member, komunitas, tools validasi member, landing page, lead generation, selling, konsul cargo, 90+ additional selling",
  },
  {
    number: 8,
    text: "Pembayaran terhadap pembiayaan dari investor akan di lock Dari aplikasi terhadap penjualan yang dilakukan oleh member",
  },
  {
    number: 9,
    text: "Termin pembayaran adalah 1 kali pembayaran selama 1 bulan jika melewati 1 bulan akan diberikan sanksi mulai dari : kehilangan akses-akses tertentu, pemutusan keanggotaan, pengurangan insentif/komisi dari pic member, menempuh jalur hukum",
  },
  {
    number: 10,
    text: "Member tidak bisa melakukan withdraw sebelum menyelesaikan kewajiban biaya keanggotaan kepada investor",
  },
  {
    number: 11,
    text: "Ketika pembayaran sudah 100%, maka pasticuan wajib langsung mengirim dana sisa pelunasan pembayaran kepada investor.",
  },
  {
    number: 12,
    text: "Pembayaran dan sisa pelunasan dipotong return sebesar 25% untuk investor",
  },
  {
    number: 13,
    text: "Pendapatan pasif income dari member dibawah investor. Bertambah member berarti pendapatan pasif income semakin Tak terhingga",
  },
  {
    number: 14,
    text: "Mendapatkan aplikasi khusus PASTICUAN PRIORITY untuk pemantauan member",
  },
  {
    number: 15,
    text: "Pendapatan pasif income bisa di putar kembali untuk menambah limit kuota lock membership",
  },
];

export default function InvestmentSteps() {
  return (
    <div className=" text-white px-4 py-6 space-y-8 max-w-xl mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">
        Bagaimana Bisa Uang Bekerja untuk Anda?
      </h2>
      {StepList.map((step, index) => (
        <div
          key={step.number}
          className={`relative flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`relative max-w-[85%] bg-white/20 backdrop-blur-md p-4 rounded-lg shadow text-sm`}
          >
            <div
              className={`absolute -top-3 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center shadow-lg ${
                index % 2 === 0 ? "-left-3" : "-right-3"
              }`}
            >
              {step.number}
            </div>
            {step.text}
          </div>
        </div>
      ))}
    </div>
  );
}
