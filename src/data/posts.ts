export interface Post {
  id: string;
  title: string;
  category: string;
  span: string;
  img: string;
  desc: string;
}

export const posts: Post[] = [
  {
    id: "01",
    title: "KosKita: Schedule Interface",
    category: "Slicing & Glassmorphism",
    span: "col-span-12 md:col-span-7",
    img: "https://images.unsplash.com/photo-1774262836107-0d75bca4135f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Bukan sekadar halaman statis, melainkan dekonstruksi tab jadwal interaktif menggunakan Tailwind 4 dan Glassmorphism untuk manajemen hunian yang taktil.",
  },
  {
    id: "02",
    title: "LibroModern",
    category: "Web Architecture",
    span: "col-span-12 md:col-span-4 md:mt-40",
    img: "https://images.unsplash.com/photo-1774262836107-0d75bca4135f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Mendefinisikan ulang ekosistem literasi digital melalui struktur kode yang tidak kompromi dan arsitektur data yang fluid.",
  },
  {
    id: "03",
    title: "DompetKu AI",
    category: "Intelligence Integration",
    span: "col-span-12 md:col-span-6 md:-mt-20 md:ml-auto",
    img: "https://images.unsplash.com/photo-1774262836107-0d75bca4135f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Pelacak finansial yang bernapas. Mengintegrasikan Qwen AI untuk melampaui sekadar tabel pemasukan dan pengeluaran konvensional.",
  },
  {
    id: "04",
    title: "Infra Competition 2025",
    category: "System Infrastructure",
    span: "col-span-12 md:col-span-5 md:mt-20",
    img: "https://images.unsplash.com/photo-1774262836107-0d75bca4135f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Finalis Jagoan Hosting Infra Competition. Eksplorasi performa tinggi dan manajemen sistem tingkat lanjut.",
  },
];
