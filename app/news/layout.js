import Link from "next/link";

const newsList = [
  { id: "a", title: "Next.js 14 yayımlandı: Server Actions gəlir" },
  { id: "b", title: "TypeScript 5.4 versiyası çıxdı" },
  { id: "c", title: "React 19 Beta təqdim edildi" },
];

export default function NewsLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", borderRight: "1px solid #ccc", padding: "1rem" }}>
        <h2>Xəbərlər</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {newsList.map((item) => (
            <li key={item.id} style={{ borderBottom: "1px solid #444" }}>
              <Link
                href={`/news/${item.id}`}
                style={{
                  display: "block",
                  padding: "1rem",
                  color: "#fff",
                  textDecoration: "none",
                  backgroundColor: "#222",
                  borderRadius: "4px",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

 
      <div style={{ width: "70%", padding: "1rem" }}>
        {children}
      </div>
    </div>
  );
}
