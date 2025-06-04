export default function NewsDetail({ params }) {
  const { slug } = params;

const fakeData = {
  a: {
    title: "💡 Next.js 14 Rəsmi Olaraq Təqdim Edildi",
    content: `
      Vercel komandası tərəfindən inkişaf etdirilən Next.js-in 14-cü versiyası nəhayət yayımlandı.
      Bu versiyada Server Actions adlı yeni funksiya təqdim edildi...
    `,
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230202143636/NEXT-js-tutorial-1.png"
  },
  b: {
    title: "🚀 TypeScript 5.4 Performans Fokuslu Çıxdı",
    content: `
      Microsoft-un TypeScript komandası 5.4 versiyasını təqdim etdi.
      Bu versiyada əsas fokus transpile sürətinin artırılmasına yönəlib...
    `,
    image: "https://www.rabitsolutions.com/wp-content/uploads/2023/09/typescript-cover-cropped-1300x600.jpeg"
  },
  c: {
    title: "⚛️ React 19 Beta Çıxdı — Yeni 'use' Hook ilə Gəlir",
    content: `
      React komandası React 19 Beta versiyasını yayımladı.
      Yeni use() hook-u təqdim olunub, Suspense daha stabil işləyir...
    `,
    image: "https://reactjs.org/logo-og.png"
  }
};




  const data = fakeData[slug] || "Xəbər tapılmadı.";
 

return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "70%", padding: "1rem" }}>
        <h2>{data.title}</h2>

        <img
          src={data.image}
          alt={data.title}
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" }}
        />
 
        <p>{data.content.trim()}</p>
      </div>
    </div>
)

}